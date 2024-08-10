import React from 'react';

const AboutUsSection = () => {
  return (
    <section id="About" className="bg-pink-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 lg:pr-8 text-center lg:text-left lg:ml-10">
          <h2 className="text-indigo-900 text-2xl sm:text-3xl font-bold mb-4">About Us</h2>
          <h3 className="text-red-500 text-xl sm:text-2xl font-semibold mb-4">Team Of Passionate People</h3>
          <p className="text-gray-700 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam officiis, reiciendis veniam
            incidunt architecto quam velit dolorum exercitationem cum aliquam ab quas dicta dolores ad earum quas.
          </p>
          <p className="text-gray-700 mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente adipisci totam, nam
            voluptates quis delectus. Ea quo repudiandae.
          </p>
          <button className="bg-transparent hover:bg-red-500 text-red-500 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
            Read More
          </button>
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0 lg:ml-64">
          <img 
            src="/Weddingring.jpg" 
            alt="Two chairs decorated with flowers" 
            className="rounded-lg shadow-lg max-w-xs sm:max-w-sm lg:max-w-md mx-auto  w-[283px]"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
