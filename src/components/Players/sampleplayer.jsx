import React from 'react';

class VideoPlayer extends React.Component {
  render() {
    return (
      <div>
        <video controls width="640" height="360">
          <source src="https://srv878-files.hstgr.io/2fc1f47d664e6b53/files/public_html/Movies/Youtubetestvideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }
}

export default VideoPlayer;
