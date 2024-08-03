import React from 'react';
import JobCard from '../components/JobCard';
import img from "../utilis/images/GRID BACKGROUND.jpg"

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
  },
  {
    title: 'Support Staff',
    description: 'Provide assitance to do day to day task.',
    company: 'Support Inc.',
    location: 'Remote',
    type: 'Full-time'
  },
  {
    title: 'Teacher fro primary school',
    description: 'Should able to communicate in English.',
    company: 'Grow the future.',
    location: 'Remote',
    type: 'Full-time'
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
      <h2 className="text-3xl font-bold mb-8 text-center">Job Opportunities</h2>
      <div className='w-full h-[200px] text-center '>
        <img src="https://th.bing.com/th/id/OIP.l0AdeAhm01JACl9xUNI9ZAHaEF?w=302&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" className='object-contain w-full' alt="img" />
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
