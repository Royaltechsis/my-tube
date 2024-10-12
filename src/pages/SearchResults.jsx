// src/pages/SearchResults.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import VideoCard from '../components/VideoCard';

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
            maxResults: 10,
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
    <div className="search-results">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
}

export default SearchResults;
