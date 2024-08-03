
const StoryComponent = ({ story, onReadMore }) => {
  return (
    <div className="w-80 rounded overflow-hidden shadow-lg mx-2 my-5">
      <img className="w-full h-48 object-cover" src={story.image} alt={story.title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{story.title}</div>
        <p className="text-gray-700 text-base">
          {story.summary}
        </p>
        <button
          onClick={() => onReadMore(story)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        >
          Discover More
        </button>
      </div>
    </div>
  );
};

export default StoryComponent;
