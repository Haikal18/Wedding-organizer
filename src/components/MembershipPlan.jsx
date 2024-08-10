import React from 'react';

function MembershipPlan() {
  return (
    <section id="Pricing" className="mt-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">MEMBERSHIP PLAN</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Plan 1: Basic */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center p-6">
            <div className="bg-red-500 py-4 text-white font-semibold text-xl">Basic</div>
            <div className="py-6">
              <p className="text-4xl font-bold text-gray-900">$10.99</p>
              <p className="text-gray-600">Per Month</p>
            </div>
            <ul className="text-gray-700 mb-6">
              <li className="flex justify-center items-center mb-2">
                <span className="text-green-500">&#10003;</span> Photography
              </li>
              <li className="flex justify-center items-center mb-2">
                <span className="text-green-500">&#10003;</span> Consultation
              </li>
              <li className="flex justify-center items-center mb-2">
                <span className="text-green-500">&#10003;</span> Full Assistance
              </li>
              <li className="flex justify-center items-center mb-2">
                <span className="text-red-500">&#10007;</span> Vendor Referrals
              </li>
              <li className="flex justify-center items-center mb-2">
                <span className="text-red-500">&#10007;</span> Find Place
              </li>
            </ul>
            <a href="#" className="inline-block bg-red-500 text-white font-bold py-2 px-6 rounded-full hover:bg-red-600 transition">Buy Now</a>
          </div>

          {/* Plan 2: Standard */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center p-6">
            <div className="bg-red-500 py-4 text-white font-semibold text-xl">Standard</div>
            <div className="py-6">
              <p className="text-4xl font-bold text-gray-900">$19.99</p>
              <p className="text-gray-600">Per Month</p>
            </div>
            <ul className="text-gray-700 mb-6">
              <li className="flex justify-center items-center mb-2">
                <span className="text-green-500">&#10003;</span> Photography
              </li>
              <li className="flex justify-center items-center mb-2">
                <span className="text-green-500">&#10003;</span> Consultation
              </li>
              <li className="flex justify-center items-center mb-2">
                <span className="text-green-500">&#10003;</span> Full Assistance
              </li>
              <li className="flex justify-center items-center mb-2">
                <span className="text-red-500">&#10007;</span> Vendor Referrals
              </li>
              <li className="flex justify-center items-center mb-2">
                <span className="text-red-500">&#10007;</span> Find Place
              </li>
            </ul>
            <a href="#" className="inline-block bg-red-500 text-white font-bold py-2 px-6 rounded-full hover:bg-red-600 transition">Buy Now</a>
          </div>

          {/* Plan 3: Premium */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center p-6">
            <div className="bg-red-500 py-4 text-white font-semibold text-xl">Premium</div>
            <div className="py-6">
              <p className="text-4xl font-bold text-gray-900">$29.99</p>
              <p className="text-gray-600">Per Month</p>
            </div>
            <ul className="text-gray-700 mb-6">
              <li className="flex justify-center items-center mb-2">
                <span className="text-green-500">&#10003;</span> Photography
              </li>
              <li className="flex justify-center items-center mb-2">
                <span className="text-green-500">&#10003;</span> Consultation
              </li>
              <li className="flex justify-center items-center mb-2">
                <span className="text-green-500">&#10003;</span> Full Assistance
              </li>
              <li className="flex justify-center items-center mb-2">
                <span className="text-green-500">&#10003;</span> Vendor Referrals
              </li>
              <li className="flex justify-center items-center mb-2">
                <span className="text-green-500">&#10003;</span> Find Place
              </li>
            </ul>
            <a href="#" className="inline-block bg-red-500 text-white font-bold py-2 px-6 rounded-full hover:bg-red-600 transition">Buy Now</a>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default MembershipPlan;
