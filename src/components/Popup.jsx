// Popup.js
import React from 'react';

const Popup = ({ story, onClose }) => {
  if (!story) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-10">
      <div className="bg-white p-8 rounded-lg max-w-lg w-full relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-600 hover:text-gray-900">
          &times;
        </button>
        <img className="w-full h-48 object-cover mb-4" src={story.image} alt={story.title} />
        <h2 className="text-2xl font-bold mb-4">{story.title}</h2>
        <p>{story.fullText}</p>
      </div>
    </div>
  );
};

export default Popup;
