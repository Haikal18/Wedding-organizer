import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';

// Data Testimonials
const testimonials = [
  {
    name: 'Sarah Clarissa',
    image: 'https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=600',
    review: `Planning my wedding through this website was an absolute dream! The tools and resources provided made organizing every detail seamless and stress-free. I couldn't have asked for a better experience!`,
  },
  {
    name: 'Jessica Katteri',
    image: 'https://images.pexels.com/photos/247322/pexels-photo-247322.jpeg?auto=compress&cs=tinysrgb&w=600',
    review: `This wedding organization site was phenomenal! From choosing the venue to coordinating with vendors, everything was so easy to manage. It made the entire process enjoyable and memorable.`,
  },
  {
    name: 'James Gerald',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600',
    review: `I cannot recommend this wedding website enough! The level of detail and care put into every feature made planning our big day not only easy but also fun. Every bride and groom should use it!`,
  },
  {
    name: 'David Fario',
    image: 'https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=600',
    review: `Using this website for our wedding was the best decision we made. The attention to detail, the ability to customize, and the overall user experience exceeded all our expectations.`,
  },
  {
    name: 'Andre Lora',
    image: 'https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=600',
    review: `From start to finish, this wedding organization site was a lifesaver. It helped us keep everything on track, and the final result was a beautiful, well-coordinated wedding day.`,
  },
  {
    name: 'Mario Gani',
    image: 'https://images.pexels.com/photos/1036627/pexels-photo-1036627.jpeg?auto=compress&cs=tinysrgb&w=600',
    review: `I had an amazing experience using this site to organize our wedding. Every feature was thoughtfully designed to make the planning process smooth and enjoyable. Highly recommended!`,
  },
];


const ReviewCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Move to the next slide
  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    setCurrentIndex((prevIndex) => prevIndex + 1);
  };


  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Handle transition end to loop slides seamlessly
  const handleTransitionEnd = () => {
    setIsTransitioning(false);

    if (currentIndex === testimonials.length) {
      setCurrentIndex(0);
    } else if (currentIndex < 0) {
      setCurrentIndex(testimonials.length - 1);
    }
  };

  return (
    <div id='Riview' className="relative w-full max-w-xl mx-auto pt-5">
      <h2 className="text-3xl font-bold text-gray-900 text-center mt-5">Customer reviews </h2>
      <div className="overflow-hidden relative h-[350px]">
        <div
          className={`flex transition-transform duration-700 ease-in-out ${
            isTransitioning ? '' : 'duration-0'
          }`}
          style={{ transform: `translateX(-${(currentIndex + 1) * 100}%)` }}
          onTransitionEnd={handleTransitionEnd}
        >
          {/* Clone last slide and place it first */}
          <div className="w-full flex-shrink-0 ">
            <div className="flex flex-col items-center p-4 py-10">
              <img
                className="rounded-full mb-3"
                src={testimonials[testimonials.length - 1].image}
                alt={`${testimonials[testimonials.length - 1].name}'s profile`}
                style={{ width: '100px', height: '100px' }}
              />
              <h5 className="text-lg font-semibold">{testimonials[testimonials.length - 1].name}</h5>
              <p className="text-center mt-2">{testimonials[testimonials.length - 1].review}</p>
              <div className="flex justify-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-500" />
                ))}
              </div>
            </div>
          </div>

          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <div className="flex flex-col items-center p-4 py-10">
                <img
                  className="rounded-full mb-3"
                  src={testimonial.image}
                  alt={`${testimonial.name}'s profile`}
                  style={{ width: '100px', height: '100px' }}
                />
                <h5 className="text-lg font-semibold">{testimonial.name}</h5>
                <p className="text-center mt-2">{testimonial.review}</p>
                <div className="flex justify-center mt-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500" />
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Clone first slide and place it last */}
          <div className="w-full flex-shrink-0">
            <div className="flex flex-col items-center p-4 py-10">
              <img
                className="rounded-full mb-3"
                src={testimonials[0].image}
                alt={`${testimonials[0].name}'s profile`}
                style={{ width: '100px', height: '100px' }}
              />
              <h5 className="text-lg font-semibold">{testimonials[0].name}</h5>
              <p className="text-center mt-2">{testimonials[0].review}</p>
              <div className="flex justify-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-500" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCarousel;
