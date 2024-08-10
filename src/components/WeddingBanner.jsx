import React from 'react';

function WeddingBanner() {
  return (
    <div
      id='home'
      className="relative h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage: "url('/BannerWedingO.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 md:px-8">
        <h1 
          className="text-4xl sm:text-5xl md:text-6xl font-light leading-tight"
          style={{ fontFamily: '"Brush Script MT", cursive' }}
        >
          Turning Dreams into Reality
        </h1>
        <h2 
          className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold mt-4 leading-relaxed"
          style={{ fontFamily: 'cursive' }}
        >
          Every detail, every moment, perfectly planned for your most cherished day.
        </h2>
      </div>
    </div>
  );
}

export default WeddingBanner;
