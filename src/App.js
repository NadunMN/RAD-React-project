import './App.css';
import Home from './component/Home';
import About from './component/About';
import ContactUs from './component/ContactUs'; // Corrected import
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './component/Footer';

function App() {
  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<ContactUs />} /> {/* Corrected import */}
          
        </Routes>
      </BrowserRouter>
      <Footer/>
      </>
  );
}

export default App;
