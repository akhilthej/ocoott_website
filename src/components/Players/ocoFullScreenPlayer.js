import React from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';

const OcoFullScreenPlayer = () => {
  const { videoData } = useParams();
  const movie = JSON.parse(decodeURIComponent(videoData));

  return (
    <div>
      <h1>{movie.name}</h1>
      {/* Add the video player here using the 'movie.link' property */}
      <ReactPlayer url={movie.link} width="100%" height="100%" controls />
      {/* Additional information about the video */}
      <p>Director: {movie.director}</p>
      <p>Genre: {movie.gener}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default OcoFullScreenPlayer;
