import React from 'react'
import contact from '../Assets/2803137-01.png'
import ContactForm from './ContactForm';
import Navibar from './Navibar'

function ContatUs() {
  return (
    <>
    <Navibar/>
    <div className="content">
    <div className="about-image">
                <img src={contact} alt="About illustration"/>
            </div>
        <div className="about-section" id="about">
            <div className="about-text">
                <h1>CONTACT US</h1>
                <p className="about-text-para">We value your feedback and are here to assist with any questions or concerns you may have.
                   Whether you need more information about our services, have a specific inquiry, or 
                   simply want to share your experience with us, please don't hesitate to reach out.
                   

</p>
                <p className="about-text-para"> You can contact us via email at [your email address], call us at [your phone number], or fill out the form below. 
                Our dedicated support team is committed to responding to your queries promptly and ensuring you receive the best possible service.</p>
                <button className='see-more-button'>See More</button>
            </div>
             
        </div>
    </div>
      <ContactForm/>
      </>
    
  );
}

export default ContatUs