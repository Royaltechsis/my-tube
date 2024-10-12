// src/components/VideoPlayer.js
import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function VideoPlayer({ videoUrl, isLoading }) {
  return (
    <Box className="flex flex-col items-center justify-center w-full h-full p-4 bg-gray-900 rounded-lg shadow-lg">
      {isLoading ? (
        <CircularProgress className="text-white" />
      ) : (
        <iframe
          width="100%"
          height="315"
          src={videoUrl}
          title="Video player"
          frameBorder="0"
          allowFullScreen
          className="rounded-lg shadow-md"
        ></iframe>
      )}
    </Box>
  );
}

export default VideoPlayer;
