import PropTypes from 'prop-types';

const FeatureCard = ({ Icon, title, description }) => {
  return (
    <div className="flex flex-col items-center p-4 bg-white shadow-md rounded-lg">
      <div className="text-3xl mb-2"><Icon /></div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

FeatureCard.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default FeatureCard;
