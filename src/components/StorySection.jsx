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
    <div className="container mx-auto py-16 px-4 text-white">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-10">Life-Changing Stories</h1>
      <div className="flex flex-wrap justify-center">
        {stories.map((story) => (
          <StoryComponent key={story.id} story={story} onReadMore={handleReadMore} />
        ))}
      </div>
      {selectedStory && <Popup story={selectedStory} onClose={handleClosePopup} />}
    </div>
  );
};

export default StorySection;
