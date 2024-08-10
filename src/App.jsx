import React from 'react';
import Navbar from './components/Navbar'
import WeddingBanner from './components/WeddingBanner'
import AboutUsSection from './components/AboutUsSection'
import OurServices from './components/OurServices'
import MembershipPlan from './components/MembershipPlan'
import ContactForm from './components/ContactForm'


const App = () => {
  return (
    <div>
      <Navbar/>
      <WeddingBanner/>
      <AboutUsSection/>
      <OurServices/>
      <MembershipPlan/>
      <ContactForm/>
    </div>
  );
};

export default App;
