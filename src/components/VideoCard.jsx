// src/components/VideoCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import { formatDistanceToNow } from 'date-fns';

function VideoCard({ video }) {
  // Convert uploadDate to a Date object and check if it's valid
  const uploadDate = new Date(video.uploadDate);
  const isValidDate = !isNaN(uploadDate.getTime()); // Check if the date is valid

  return (
    <Link to={`/video/${video.id}`} className="block w-full sm:w-80 m-2">
      <div className="video-card flex flex-col">
        {/* Video Thumbnail */}
        <div className="relative w-full aspect-w-16 aspect-h-9">
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Video Info */}
        <div className="flex mt-3">
          {/* Channel Avatar */}
          <Avatar
            src={video.channelAvatar}
            alt={video.channelName}
            className="mr-3"
          />
          
          {/* Video Details */}
          <div className="flex flex-col">
            <h3 className="text-sm font-semibold text-white line-clamp-2">{video.title}</h3>
            <p className="text-xs text-gray-400 mt-1">{video.channelName}</p>
            <p className="text-xs text-gray-400">
              {isValidDate 
                ? `${video.viewCount} views • ${formatDistanceToNow(uploadDate)} ago`
                : `${video.viewCount} views • Unknown upload time`}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default VideoCard;
