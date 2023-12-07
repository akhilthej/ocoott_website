// FullScreenIframe.js
import React from 'react';

const FullScreenIframe = ({ videoSrc }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <iframe
        src={videoSrc}
        title="Full Screen Video"
        className="w-full h-full"
        allowFullScreen
        autoPlay 
      ></iframe>
    </div>
  );
};

// Default video source URL
FullScreenIframe.defaultProps = {
  videoSrc:
    'https://videos.ocomovies.com/wp-content/uploads/2023/12/shuuQ.mp4',
};

export default FullScreenIframe;
