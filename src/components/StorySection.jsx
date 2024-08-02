import React, { useState } from 'react';
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
    <div className="container flex justify-center items-center w-full m-20">
      <div className="flex flex-wrap justify-center mx-2">
        {stories.map((story) => (
          <StoryComponent key={story.id} story={story} onReadMore={handleReadMore} />
        ))}
      </div>
      {selectedStory && <Popup story={selectedStory} onClose={handleClosePopup} />}
    </div>
  );
};

export default StorySection;
