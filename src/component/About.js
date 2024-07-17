import React from "react";
// import { BsFillPlayCircleFill } from "react-icons/bs";
import Background from '../Assets/2914503_Mesa de trabajo 1.png'
import Navibar from './Navibar'


function About() {
  return (
    <>
    <Navibar/>

    <div className="content">
    <div className="about-image">
                <img src={Background} alt="About illustration"/>
            </div>
        <div className="about-section" id="about">
            <div className="about-text">
                <h1>About</h1>
                <p className="about-text-para">Welcome to [Your Company Name]!
                   We are dedicated to [briefly describe your company's mission or purpose]. Founded [year], 
                   we strive to [mention any unique selling points or values your company upholds]. Our team is passionate about
                    [describe your team's commitment or specialization]. Whether you're looking for [services/products offered], 
                    [describe any key achievements or milestones], or [mention any community involvement or partnerships], [Your Company Name] is here to 
                    [mention how your company serves its customers/clients]. 
                  </p>
                
                <button className='see-more-button' >See More</button>
            </div>
             
        </div>
    </div>
    </>
  );
};

export default About;
