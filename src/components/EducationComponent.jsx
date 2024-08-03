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
    <div className="container mx-auto py-16 px-4">
      <div className="section mb-12">
        <h2 className="text-4xl font-bold mb-4 section-title">Financial Literacy</h2>
        <p className="text-lg mb-6">
          Access resources to understand budgeting, saving, investing, and managing debt.
        </p>
        <ul>
          {resources.financialLiteracy.map((resource, index) => (
            <li key={index} className="resource-item mb-2">
              <a href={resource.link} className="text-blue-500 hover:underline">
                {resource.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="section mb-12">
        <h2 className="text-4xl font-bold mb-4 section-title">Job Skills</h2>
        <p className="text-lg mb-6">
          Enhance your job skills with these resources on resume writing, interview techniques, and networking skills.
        </p>
        <ul>
          {resources.jobSkills.map((resource, index) => (
            <li key={index} className="resource-item mb-2">
              <a href={resource.link} className="text-blue-500 hover:underline">
                {resource.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="section mb-12">
        <h2 className="text-4xl font-bold mb-4 section-title">Personal Development</h2>
        <p className="text-lg mb-6">
          Develop personally with resources on time management, goal setting, and stress management.
        </p>
        <ul>
          {resources.personalDevelopment.map((resource, index) => (
            <li key={index} className="resource-item mb-2">
              <a href={resource.link} className="text-blue-500 hover:underline">
                {resource.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EducationComponent;
