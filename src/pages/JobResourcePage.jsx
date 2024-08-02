import React from 'react';
import JobCard from '../components/JobCard';

const jobs = [
  {
    title: 'Software Engineer',
    description: 'Develop and maintain software applications.',
    company: 'Tech Corp',
    location: 'New York, NY',
    type: 'Full-time'
  },
  {
    title: 'Marketing Coordinator',
    description: 'Coordinate marketing activities and campaigns.',
    company: 'Marketing Co.',
    location: 'Los Angeles, CA',
    type: 'Part-time'
  },
  {
    title: 'Customer Support Specialist',
    description: 'Provide customer support and resolve issues.',
    company: 'Support Inc.',
    location: 'Remote',
    type: 'Full-time'
  }
];

const JobResourcePage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8">Job Opportunities</h2>
      <div>
        <img src="" alt="" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {jobs.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </div>
    </div>
  );
};

export default JobResourcePage;
