// src/components/VideoPlayer.js
import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import VideoCard from './VideoCard'; // Import VideoCard to display related videos

function VideoPlayer({ videoUrl, isLoading, relatedVideos = [] }) { // Default to an empty array
  return (
    <Box className="bg-gray-900 rounded-lg shadow-lg p-4 mt-20">
      <Box className="flex flex-col items-center justify-center w-full">
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

      {/* Related Videos Section */}
      <Box className="mt-4">
        <h2 className="text-white text-lg mb-2">Related Videos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {relatedVideos.length > 0 ? ( // Check if there are related videos
            relatedVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))
          ) : (
            <p className="text-gray-400">No related videos available.</p> // Fallback message
          )}
        </div>
      </Box>
    </Box>
  );
}

export default VideoPlayer;
