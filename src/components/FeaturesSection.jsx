import FeatureCard from './FeatureCard';
import { FaUsers, FaHandsHelping, FaBriefcase, FaBookOpen, FaDonate, FaLightbulb } from 'react-icons/fa';

const FeaturesSection = () => {
  const features = [
    {
      Icon: FaUsers,
      title: 'Community Support',
      description: 'Join forums and discussions to share experiences and get advice from peers.'
    },
    {
      Icon: FaHandsHelping,
      title: 'Support Services',
      description: 'Find counseling, financial planning, and legal assistance services.'
    },
    {
      Icon: FaBriefcase,
      title: 'Job Opportunities',
      description: 'Browse job listings and training programs to boost your career.'
    },
    {
      Icon: FaBookOpen,
      title: 'Educational Resources',
      description: 'Access materials on financial literacy, job skills, and personal development.'
    },
    {
      Icon: FaDonate,
      title: 'Donation and Fundraising',
      description: 'Contribute to causes and support individuals in need through donations.'
    },
    {
      Icon: FaLightbulb,
      title: 'Innovation Hub',
      description: 'Explore innovative projects and ideas to make a difference in the community.'
    }
  ];

  return (
    <section className="py-12 dark:bg-gray-900 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-blue-600 mb-8">Features of Our Platform</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              Icon={feature.Icon} 
              title={feature.title} 
              description={feature.description} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
