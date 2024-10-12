// src/components/RandomVideoList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import VideoCard from './VideoCard'; // Fixed file name casing

const YOUTUBE_API_KEY = 'AIzaSyAklks7MgtatKOCkxbUvZslLMB2DYt6POQ';  // Replace with your YouTube API key
const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3';

function getRandomVideos(videos, count = 5) {
  // Shuffle the video list and take `count` number of videos
  return videos.sort(() => 0.5 - Math.random()).slice(0, count);
}

function RandomVideoList() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(`${YOUTUBE_API_URL}/videos`, {
          params: {
            part: 'snippet,statistics',
            chart: 'mostPopular',
            regionCode: 'US', // You can change the region code as needed
            maxResults: 50, // Fetch up to 50 videos at once (YouTube API limit)
            key: YOUTUBE_API_KEY,
          },
        });

        const videoData = response.data.items.map((item) => ({
          id: item.id,
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails.high.url,
          channelName: item.snippet.channelTitle,
          channelAvatar: '', // You can fetch channel avatar separately if needed
          viewCount: item.statistics.viewCount,
          uploadDate: item.snippet.publishedAt,
        }));

        // Select a random subset of videos
        const randomVideos = getRandomVideos(videoData, 5); // Get 5 random videos
        setVideos(randomVideos);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="video-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
}

export default RandomVideoList;
