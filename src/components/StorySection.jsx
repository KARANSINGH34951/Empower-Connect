import { useState } from 'react';
import stories from '../utilis/storiesData';
import StoryComponent from './StoryComponent';
import Popup from './Popup';

const StorySection = () => {
  const [selectedStory, setSelectedStory] = useState(null);

  const handleReadMore = (story) => {
    setSelectedStory(story);
  };

  const handleClosePopup = () => {
    setSelectedStory(null);
  };

  return (
    <div className="container w-full m-20 text-white px-10">
      <h1 className="text-6xl font-bold text-center mb-10">Life-Changing Stories</h1>
      <div className="flex justify-center items-center">
        <div className="flex flex-wrap justify-center mx-2">
          {stories.map((story) => (
            <StoryComponent key={story.id} story={story} onReadMore={handleReadMore} />
          ))}
        </div>
        {selectedStory && <Popup story={selectedStory} onClose={handleClosePopup} />}
      </div>
    </div>
  );
};

export default StorySection;
