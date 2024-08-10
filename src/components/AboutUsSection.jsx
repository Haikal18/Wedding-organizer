import React from 'react';

const AboutUsSection = () => {
  return (
    <section id="About" className="bg-[#F1F1F1] py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 lg:pr-8 text-center lg:text-left lg:ml-10">
          <h2 className="text-indigo-900 text-2xl sm:text-3xl font-bold mb-4">About Us</h2>
          <h3 className="text-[#FFDE4D] text-xl sm:text-2xl font-semibold mb-4">A Team of Passionate Experts</h3>
          <p className="text-gray-700 mb-4">
            We are a dedicated team committed to helping you create your dream wedding. With experience and creativity, we craft every detail with love and attention.
          </p>
          <p className="text-gray-700 mb-8">
            From concept to execution, we ensure that every moment of your wedding becomes a beautiful and unforgettable memory.
          </p>
          <button className="bg-transparent hover:bg-[#FFDE4D] text-[#FFDE4D] font-semibold hover:text-white py-2 px-4 border border-[#FFDE4D] hover:border-transparent rounded">
            Learn More
          </button>
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0 lg:ml-64">
          <img 
            src="/Weddingring.jpg" 
            alt="Two chairs decorated with flowers" 
            className="rounded-lg shadow-lg max-w-xs sm:max-w-sm lg:max-w-md mx-auto w-[283px]"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
