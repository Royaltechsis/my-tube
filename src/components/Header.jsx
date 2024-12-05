// src/components/Header.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Update import here
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate(); // Use useNavigate here

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search/${searchQuery}`);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center p-3 bg-gray-900 text-white w-full fixed mb-10 z-20">
        {/* Left Section */}
        <div className="flex items-center gap-3">
          {/* <button>
            <MenuIcon className="cursor-pointer text-white" />
          </button> */}
          <div className="text-2xl font-bold  md:block">
            <Link to='/'>
            <span className="text-red-500">MyTube</span>
            </Link>
          </div>
        </div>

        {/* Center Section - Search */}
        <div className="flex items-center w-6/12 gap-2">
          <div className="flex flex-grow bg-gray-700 rounded-full px-4 py-2 items-center">
            <input
              type="text"
              className="w-full bg-gray-700 text-white outline-none placeholder-gray-400"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            />
            <SearchIcon className="cursor-pointer" onClick={handleSearch} />
          </div>
          {/* <MicIcon className="cursor-pointer text-white ml-2" /> */}
        </div>

        {/* Right Section */}
        {/* <div className="flex items-center gap-4">
          <VideoCallIcon className="cursor-pointer text-white" />
          <NotificationsIcon className="cursor-pointer text-white" />
          <AccountCircleIcon className="cursor-pointer text-white" />
        </div> */}
      </div>
    </div>
  );
}

export default Header;
