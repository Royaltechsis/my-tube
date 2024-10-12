// src/pages/Home.js
import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import VideoPlayer from '../components/VideoPlayer';
import RandomVideoList from '../components/VideoList';

function Home() {
  return (
    <div className="w-full h-screen bg-gray-800 flex flex-col">
      {/* Header */}
      <Header />

      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar className="w-1/4 md:w-1/5 lg:w-1/6 bg-gray-900 hidden sm:flex" />

        {/* Main Content */}
        <div className="flex-1 p-4 overflow-y-auto">
          {/* Video Player */}
          <VideoPlayer videoUrl={'https://www.youtube.com/embed/example'} isLoading={false} />

          {/* Video Cards or Main Content Area */}
          <RandomVideoList />
        </div>
      </div>
    </div>
  );
}

export default Home;
