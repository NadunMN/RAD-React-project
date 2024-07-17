import React ,{useState, useEffect} from 'react'
import Secondbackground from "../Assets/376991-PBRMQU-413-01.png"
import Navibar from './Navibar'
import CardComponent from './CardComponent';

function Home() {
  const [welcomeMessage, setwelcomeMessage] = useState('RAD Project');

  useEffect(() => {
    // document.title = welcomeMessage;
    console.log(welcomeMessage);

    return () => {
      console.log('Component will unmount');
    };
  }, [welcomeMessage]);

  const handleInputChange =(event) =>{
      setwelcomeMessage(event.target.value);
  }
  return (
    <>
    <div className= "home-container">
        <Navibar  className="home-icon"/>
    </div>
    {/* <div className='image-bg'>
        <img src={BannerBackground} alt=''></img>
    </div> */}
    <div className='home-text'>
    <p className='landing-hedding1'>The Modern landing page for</p>
    <p className='landing-hedding2'>React Developers</p>
    <p className='landing-hedding3'>Nadun Maudusanka</p>
      <button className='button-1'><a href='#div-id' className='link-readmore'>Read More</a></button>
    <h1><br/>Welcome 👍<br/>{welcomeMessage}</h1>
      {/* Step 4: Input field to capture user input */}
      <input 
        type="text" 
        placeholder="Enter your welcome message" 
        onChange={handleInputChange} 
        className='user-input-area'
      />

    </div >
    <div className='second-main-div' id="div-id">
      <div className='image-second-div'>
      <img src={Secondbackground} alt="About illustration"/>
      </div>
    <div className='second-div-home'>
      <p className='sub-text-second-div'><span className='topic-text'>Descripiton of our site</span><br/><br/><br/><span className='topic-text-sub'>Introducing our innovative business web application, designed to streamline your operations
         and enhance productivity. Our app provides an all-in-one solution for managing tasks, tracking projects,
          and collaborating with team members. With its intuitive user interface and powerful features, you can easily oversee 
          your business activities, from customer relationship management (CRM) to financial tracking and reporting. The application is fully 
          customizable to fit your unique business needs and integrates seamlessly with other essential tools.
         Experience increased efficiency and drive growth with our cutting-edge web app, tailored to support businesses of all sizes.</span></p>

    </div>
    </div>

    <div className='third-dive-card'>
      <CardComponent />
      <CardComponent/>
      <CardComponent/>
    </div>
    
    </>
  )
}

export default Home