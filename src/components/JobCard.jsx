import React from 'react';

const JobCard = ({ job }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden mb-4">
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{job.title}</h3>
        <p className="text-gray-700 mb-4">{job.description}</p>
        <div className="text-gray-600 mb-4">
          <span className="font-semibold">Company:</span> {job.company}
        </div>
        <div className="text-gray-600 mb-4">
          <span className="font-semibold">Location:</span> {job.location}
        </div>
        <div className="text-gray-600 mb-4">
          <span className="font-semibold">Type:</span> {job.type}
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobCard;
