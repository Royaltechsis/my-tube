// src/pages/VideoDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import VideoPlayer from '../components/VideoPlayer';
import Header from '../components/Header'

const YOUTUBE_API_KEY = 'AIzaSyAklks7MgtatKOCkxbUvZslLMB2DYt6POQ'; // Replace with your YouTube API key
const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/videos';

function VideoDetail() {
  const { videoId } = useParams();
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideoDetails = async () => {
      try {
        const response = await axios.get(YOUTUBE_API_URL, {
          params: {
            part: 'snippet,contentDetails',
            id: videoId,
            key: YOUTUBE_API_KEY,
          },
        });
        if (response.data.items.length > 0) {
          const videoData = response.data.items[0];
          setVideo({
            url: `https://www.youtube.com/embed/${videoData.id}`,
            title: videoData.snippet.title,
            description: videoData.snippet.description,
          });
        }
      } catch (error) {
        console.error('Error fetching video details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideoDetails();
  }, [videoId]);

  return (
    <div className="video-detail p-4 bg-gray-900 h-screen">
      <Header />
      {loading ? (
        <p>Loading...</p>
      ) : video ? (
        <>
          <VideoPlayer videoUrl={video.url} />
          <h2 className="text-xl font-semibold text-white mt-4">{video.title}</h2>
          <p className="text-gray-100 mt-2">{video.description}</p>
        </>
      ) : (
        <p>Video not found.</p>
      )}
    </div>
  );
}

export default VideoDetail;
