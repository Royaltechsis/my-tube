// src/components/Header.js
import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import Sidebar from './Sidebar';

function Header() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <>
    <div>
      <div className="flex justify-between items-center p-3 bg-gray-800 text-white w-full">
        {/* Left Section */}
        <div className="flex items-center gap-3">
          <button onClick={toggleSidebar}>
            <MenuIcon className="cursor-pointer text-white" />
          </button>
          <div className="text-2xl font-bold hidden md:block">
            <span className="text-red-500">MyTube</span>
          </div>
        </div>

        {/* Center Section - Search */}
        <div className="flex items-center w-6/12 gap-2">
          <div className="flex flex-grow bg-gray-700 rounded-full px-4 py-2 items-center">
            <input
              type="text"
              className="w-full bg-gray-700 text-white outline-none placeholder-gray-400"
              placeholder="Search"
            />
            <SearchIcon className="cursor-pointer" />
          </div>
          <MicIcon className="cursor-pointer text-white ml-2" />
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <VideoCallIcon className="cursor-pointer text-white" />
          <NotificationsIcon className="cursor-pointer text-white" />
          <AccountCircleIcon className="cursor-pointer text-white" />
        </div>
      </div>

      {/* Sidebar Component */}
      {/* <Sidebar collapsed={isSidebarCollapsed} /> */}
    </div>
    </>
  );
}

export default Header;
