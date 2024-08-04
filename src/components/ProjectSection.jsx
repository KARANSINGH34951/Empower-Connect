
import ProjectPieChart from './ProjectPieChart';
import ImageCard from './ImageCard';
import image from '../utilis/images/img2.jpg'; // Replace with the actual path to your image

const ProjectSection = () => {
  return (
    <div className="container mx-auto px-4 py-16 text-white md:px-7 lg:px-10">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
          <ImageCard image={image} altText="Empower Connect" />
        </div>
        <div className="w-full lg:w-1/2 px-4">
          <h2 className="text-3xl font-bold mb-4">Empower Connect Impact</h2>
          <p className="mb-8 text-white">
            Our platform aims to provide support in various areas such as job opportunities, skills training, financial aid, and community support. Here's a breakdown of our impact:
          </p>
          <div className="text-white">
            <ProjectPieChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
