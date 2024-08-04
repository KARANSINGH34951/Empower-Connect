import React, { useEffect } from 'react';
import gsap from 'gsap';

const resources = {
  financialLiteracy: [
    { title: 'Understanding Budgeting', link: '#' },
    { title: 'Saving and Investing', link: '#' },
    { title: 'Managing Debt', link: '#' }
  ],
  jobSkills: [
    { title: 'Resume Writing', link: '#' },
    { title: 'Interview Techniques', link: '#' },
    { title: 'Networking Skills', link: '#' }
  ],
  personalDevelopment: [
    { title: 'Time Management', link: '#' },
    { title: 'Goal Setting', link: '#' },
    { title: 'Stress Management', link: '#' }
  ]
};

const EducationComponent = () => {
  useEffect(() => {
    gsap.fromTo(
      ".section-title",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2 }
    );
    gsap.fromTo(
      ".resource-item",
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 1, stagger: 0.1, delay: 0.5 }
    );
  }, []);

  return (
    <div className="container mx-auto py-16 px-4 lg:px-8">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
          <div className=" border border-gray-200 rounded-lg p-6 shadow-lg">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 section-title text-blue-700">Financial Literacy</h2>
            <p className="text-lg mb-6 text-white">
              Access resources to understand budgeting, saving, investing, and managing debt.
            </p>
            <ul className="space-y-4">
              {resources.financialLiteracy.map((resource, index) => (
                <li key={index} className="resource-item">
                  <a href={resource.link} className="text-lg text-blue-500 hover:text-blue-700 transition-colors underline">
                    {resource.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
          <div className=" border border-gray-200 rounded-lg p-6 shadow-lg">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 section-title text-green-700">Job Skills</h2>
            <p className="text-lg mb-6 text-white">
              Enhance your job skills with these resources on resume writing, interview techniques, and networking skills.
            </p>
            <ul className="space-y-4">
              {resources.jobSkills.map((resource, index) => (
                <li key={index} className="resource-item">
                  <a href={resource.link} className="text-lg text-green-500 hover:text-green-700 transition-colors underline">
                    {resource.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-1/3 px-4 mb-8">
          <div className=" border border-gray-200 rounded-lg p-6 shadow-lg">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 section-title text-purple-700">Personal Development</h2>
            <p className="text-lg mb-6 text-white">
              Develop personally with resources on time management, goal setting, and stress management.
            </p>
            <ul className="space-y-4">
              {resources.personalDevelopment.map((resource, index) => (
                <li key={index} className="resource-item">
                  <a href={resource.link} className="text-lg text-purple-500 hover:text-purple-700 transition-colors underline">
                    {resource.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationComponent;
