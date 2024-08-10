import React from 'react';
import Navbar from './components/Navbar'
import WeddingBanner from './components/WeddingBanner'
import AboutUsSection from './components/AboutUsSection'
import OurServices from './components/OurServices'
import MembershipPlan from './components/MembershipPlan'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import ReviewCarousel from './components/ReviewCarousel'

const App = () => {
  return (
    <div>
      <Navbar/>
      <WeddingBanner/>
      <AboutUsSection/>
      <OurServices/>
      <MembershipPlan/>
      <ReviewCarousel/>
      <ContactForm/>
      <Footer/>
    </div>
  );
};

export default App;
