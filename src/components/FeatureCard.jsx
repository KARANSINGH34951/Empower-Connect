const FeatureCard = ({ Icon, title, description }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md text-center">
      <Icon className="text-4xl mb-4 text-blue-500 mx-auto" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
