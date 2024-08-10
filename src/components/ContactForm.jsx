import React from "react";

const ContactForm = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <form className="bg-white p-6 rounded-lg shadow-md max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-6 text-center">Contact US</h2>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <input 
            type="text" 
            placeholder="Name" 
            className="border border-gray-300 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input 
            type="email" 
            placeholder="Email" 
            className="border border-gray-300 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <input 
            type="text" 
            placeholder="Number" 
            className="border border-gray-300 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input 
            type="date" 
            placeholder="Dd/Mm/Yyyy" 
            className="border border-gray-300 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        
        <div className="mb-4">
          <input 
            type="text" 
            placeholder="Your Address" 
            className="border border-gray-300 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        
        <div className="mb-4">
          <select 
            className="border border-gray-300 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400">
            <option>Basic Plan</option>
            <option>Standard Plan</option>
            <option>Premium Plan</option>
          </select>
        </div>
        
        <div className="mb-6">
          <textarea 
            placeholder="Your Message" 
            className="border border-gray-300 p-2 rounded-lg w-full h-24 focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </div>
        
        <button 
          type="submit" 
          className="w-full py-2 px-4 bg-pink-500 text-white font-semibold rounded-lg shadow-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-75">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
