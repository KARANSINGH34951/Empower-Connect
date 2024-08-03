

const ImageCard = ({ image, altText }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg ">
      <img className="w-full" src={image} alt={altText} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Empower Connect</div>
        <p className="text-white text-base ">
          Transforming lives, one connection at a time. Join us in our mission to empower individuals and communities.
        </p>
      </div>
    </div>
  );
};

export default ImageCard;
