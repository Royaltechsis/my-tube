// src/components/Sidebar.js
import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import SearchIcon from '@mui/icons-material/Search';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import HistoryIcon from '@mui/icons-material/History';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import DownloadIcon from '@mui/icons-material/Download';

function Sidebar() {
  
  // Updated Item component using Material UI icons
  function Item({ icon: Icon, title }) {
    return (
      <div className="item flex gap-5 items-center  p-2 hover:bg-gray-700 cursor-pointer rounded-md  ">
        <Icon className="text-white" />
        <h3 className="text-white">{title}</h3>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center  w-3/12 bg-gray-800 text-white p-4">
      {/* Group 1 */}
      <div className="flex flex-col gap-3 w-full  ">
        <Item icon={HomeIcon} title="Home" />
        <Item icon={SubscriptionsIcon} title="Subscriptions" />
      </div>

      {/* Group 2 */}
      <div className="flex flex-col gap-3 w-full mt-4">
        <Item icon={SearchIcon} title="Search" />
        <Item icon={PlaylistPlayIcon} title="Playlists" />
        <Item icon={HistoryIcon} title="History" />
        <Item icon={SettingsIcon} title="Settings" />
        <Item icon={LogoutIcon} title="Logout" />
        <Item icon={DownloadIcon} title="Download" />
      </div>
    </div>
  );
}

export default Sidebar;
