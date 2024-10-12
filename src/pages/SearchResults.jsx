// src/pages/SearchResults.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import VideoCard from '../components/VideoCard';
import Header from '../components/Header'; // Import Header
import Sidebar from '../components/Sidebar'; // Import Sidebar

const YOUTUBE_API_KEY = 'AIzaSyAklks7MgtatKOCkxbUvZslLMB2DYt6POQ';
const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3';

function SearchResults() {
  const { query } = useParams();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await axios.get(`${YOUTUBE_API_URL}/search`, {
          params: {
            part: 'snippet',
            maxResults: 30,
            q: query,
            key: YOUTUBE_API_KEY,
          },
        });

        const videoData = response.data.items.map((item) => ({
          id: item.id.videoId,
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails.high.url,
          channelName: item.snippet.channelTitle,
        }));

        setVideos(videoData);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

    fetchSearchResults();
  }, [query]);

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar className="w-1/4 md:w-1/5 lg:w-1/6 bg-gray-900 hidden sm:flex" />

        {/* Main Content */}
        <div className="flex-1 p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
