// src/components/RandomVideoList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import VideoCard from './VideoCard';

const YOUTUBE_API_KEY = 'AIzaSyAklks7MgtatKOCkxbUvZslLMB2DYt6POQ'; // Replace with your YouTube API key
const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3';

function RandomVideoList() {
  const [videos, setVideos] = useState([]);
  const [visibleVideos, setVisibleVideos] = useState(30); // Show 30 videos initially

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(`${YOUTUBE_API_URL}/videos`, {
          params: {
            part: 'snippet,statistics',
            chart: 'mostPopular',
            regionCode: 'US', // Change as needed
            maxResults: 50, // Maximum limit for the YouTube API request
            key: YOUTUBE_API_KEY,
          },
        });

        const videoData = response.data.items.map((item) => ({
          id: item.id,
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails.high.url,
          channelName: item.snippet.channelTitle,
          viewCount: item.statistics.viewCount,
          uploadDate: item.snippet.publishedAt,
        }));

        setVideos(videoData);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, []);

  const handleLoadMore = () => {
    setVisibleVideos((prevVisible) => prevVisible + 15); // Load 15 more videos on each click
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <div className="video-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {videos.slice(0, visibleVideos).map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
      {visibleVideos < videos.length && (
        <button
          onClick={handleLoadMore}
          className="mt-4 px-6 py-2 bg-red-500 text-white rounded-full"
        >
          See More
        </button>
      )}
    </div>
  );
}

export default RandomVideoList;
