// src/components/Signup.jsx
import { useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import  app  from '../utilis/firebase'; // Ensure the correct path to your config file
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login, logout } from '../utilis/userSlice'; // Ensure the correct path to your userSlice
import gsap from 'gsap';
import { FaGoogle } from 'react-icons/fa';

const auth = getAuth(app);

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, setForm] = useState({ username: '', email: '', password: '', confirmPassword: '' });
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [signIn, setSignIn] = useState(true);
  const [msg, setMsg] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.id]: e.target.value });

  const toggleSignIn = () => {
    setMsg("");
    setForm({ username: '', email: '', password: '', confirmPassword: '' });
    setSignIn(!signIn);
  };

  const handleGoogleAuth = () => {
    setGoogleLoading(true);
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(({ user }) => {
        dispatch(login({
          email: user.email,
          password: '',
          username: user.displayName,
          loggedIn: true,
        }));
        setGoogleLoading(false);
        navigate("/");
      })
      .catch(({ message }) => {
        setGoogleLoading(false);
        setMsg(message);
      });
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const createUser = () => {
    if (signIn && (!form.username || !form.email || !form.password || !form.confirmPassword)) {
      setMsg("All fields are required.");
      return;
    }

    if (!validateEmail(form.email)) {
      setMsg("Invalid email format.");
      return;
    }

    if (signIn && form.password !== form.confirmPassword) {
      setMsg("Passwords do not match.");
      return;
    }

    if (signIn && !acceptedTerms) {
      setMsg("You must accept the terms and conditions.");
      return;
    }

    setLoading(true);
    const authFunction = signIn ? createUserWithEmailAndPassword : signInWithEmailAndPassword;
    authFunction(auth, form.email, form.password)
      .then(({ user }) => {
        if (signIn) {
          return updateProfile(user, { displayName: form.username })
            .then(() => {
              dispatch(login({
                email: form.email,
                password: form.password,
                username: form.username,
                loggedIn: true,
              }));
              setLoading(false);
              navigate("/");
            });
        } else {
          dispatch(login({
            email: form.email,
            password: form.password,
            username: user.displayName,
            loggedIn: true,
          }));
          setLoading(false);
          navigate("/");
        }
      })
      .catch(({ message }) => {
        setLoading(false);
        setMsg(message);
      });
  };

  useEffect(() => {
    gsap.fromTo(".sign-up-container", { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" });
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen  ">
      <div className="sign-up-container p-8 border border-6 border-blue-600 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">
          {signIn ? "Sign Up" : "Sign In"}
        </h2>

        {signIn && (
          <input
            type="text"
            id="username"
            onChange={handleChange}
            value={form.username}
            placeholder="Username"
            className="sign-up-input w-full px-4 py-2 mb-4 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        )}

        <input
          type="text"
          id="email"
          onChange={handleChange}
          value={form.email}
          placeholder="Email"
          className="sign-up-input w-full px-4 py-2 mb-4 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
        />

        <input
          type="password"
          id="password"
          onChange={handleChange}
          value={form.password}
          placeholder="Password"
          className="sign-up-input w-full px-4 py-2 mb-4 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
        />

        {signIn && (
          <input
            type="password"
            id="confirmPassword"
            onChange={handleChange}
            value={form.confirmPassword}
            placeholder="Confirm Password"
            className="sign-up-input w-full px-4 py-2 mb-4 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        )}

        {signIn && (
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="terms"
              onChange={(e) => setAcceptedTerms(e.target.checked)}
              checked={acceptedTerms}
              className="mr-2"
            />
            <label htmlFor="terms" className="text-white">I accept the terms and conditions</label>
          </div>
        )}

        <span className="text-red-500">{msg}</span>

        <button
          onClick={createUser}
          className={`sign-up-button w-full py-2 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition duration-300 ${loading ? 'cursor-not-allowed' : ''}`}
          disabled={loading}
        >
          {loading ? (
            <div className="flex items-center justify-center">
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span className="ml-2">{signIn ? "Signing Up..." : "Signing In..."}</span>
            </div>
          ) : (
            signIn ? "SIGN UP" : "SIGN IN"
          )}
        </button>

        <button className="text-center text-white justify-center p-3" onClick={toggleSignIn}>
          {signIn ? "Already a User? Sign In" : "New User? Sign Up Now"}
        </button>

        <div className='flex justify-center'>
          <button onClick={handleGoogleAuth} className={`flex items-center bg-green-600 px-4 py-2 text-white rounded ${googleLoading ? 'cursor-not-allowed' : ''}`} disabled={googleLoading}>
            {googleLoading ? (
              <div className="flex items-center">
                <svg className="animate-spin h-5 w-5 text-white mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Signing In...</span>
              </div>
            ) : (
              <>
                <FaGoogle style={{ marginRight: '8px' }} />
                <span>Sign In with Google</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
