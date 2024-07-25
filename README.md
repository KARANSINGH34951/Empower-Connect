# Empower Connect: A Platform for Poverty Alleviation

## Table of Contents

- [Project Concept](#project-concept)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation and Setup](#installation-and-setup)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Project Concept

Empower Connect is a web platform designed to connect low-income individuals with resources, job opportunities, and support services. The platform provides a centralized space for job listings, skills training programs, financial literacy courses, and access to microloans or grants.

## Features

1. **Resource Directory:** A comprehensive list of available resources (food banks, shelters, community centers).
2. **Job Listings:** A section for job postings tailored to low-income individuals (entry-level positions, gig work).
3. **Skills Training:** Access to online courses and workshops for skill development and career advancement.
4. **Financial Literacy:** Educational content and workshops on managing finances, budgeting, and accessing financial aid.
5. **Microloans and Grants:** Information and application portals for microloans and grants.
6. **Community Support:** Forums and chat groups for users to share experiences, advice, and support.

## Technologies Used

- **Frontend:** React.js, HTML, CSS, Tailwind CSS
- **Authentication:** Firebase Authentication
- **State Management:** React Context API
- **Animations:** GSAP (GreenSock Animation Platform)

## Installation and Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/KARANSINGH34951/Empower-Connect.git
   cd empower-connect
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up Firebase:**
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
   - Enable Authentication (Email/Password) and Firestore Database.
   - Copy your Firebase config object and replace the placeholder values in `src/firebaseConfig.js`.

4. **Start the development server:**
   ```bash
   npm start
   ```

5. **Build the project for production:**
   ```bash
   npm run build
   ```

## Usage

1. **Home Page:** Introduction to the platform and navigation to different sections.
2. **Resource Directory:** Browse and search for available resources like food banks and shelters.
3. **Job Listings:** View job postings and apply for positions.
4. **Skills Training:** Access online courses and workshops for skill development.
5. **Financial Literacy:** Learn about managing finances and accessing financial aid.
6. **Microloans and Grants:** Get information and apply for microloans and grants.
7. **Community Support:** Join forums and chat groups to connect with others.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
