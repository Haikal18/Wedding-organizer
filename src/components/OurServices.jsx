import React from 'react';
// Import FontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faHeart, faUtensils } from '@fortawesome/free-solid-svg-icons';

function OurServices() {
  return (
    <section id="Service" className=" bg-[#F1F1F1]">
      <div className="container mx-auto px-4 pt-5">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">OUR SERVICES</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-white rounded-lg shadow-md transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl overflow-hidden text-center p-8">
            <div className="flex justify-center mb-6">
              <FontAwesomeIcon icon={faCamera} className="text-[#FFDE4D] w-16 h-16"/>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Wedding Photography & Videography</h3>
            <p className="text-gray-600">Capture every special moment with our expert photography and videography services, tailored to your unique style.</p>
          </div>
          {/* Service 2 */}
          <div className="bg-white rounded-lg shadow-md transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl overflow-hidden text-center p-8">
            <div className="flex justify-center mb-6">
              <FontAwesomeIcon icon={faHeart} className="text-[#FFDE4D] w-16 h-16"/>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Customized Wedding Planning</h3>
            <p className="text-gray-600">From venue selection to final touches, we offer personalized wedding planning services to ensure your big day is perfect.</p>
          </div>
          {/* Service 3 */}
          <div className="bg-white rounded-lg shadow-md transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl overflow-hidden text-center p-8">
            <div className="flex justify-center mb-6">
              <FontAwesomeIcon icon={faUtensils} className="text-[#FFDE4D] w-16 h-16"/>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Catering & Menu Design</h3>
            <p className="text-gray-600">Delight your guests with our exquisite catering services, featuring customized menus to suit every palate.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurServices;
