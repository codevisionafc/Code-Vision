import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Event from './pages/Event';
import Members from './pages/Members';
import Alumnus from './pages/Alumnus';
import Gallery from './pages/Gallery';
import ContactUs from './pages/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen font-poppins">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/event" element={<Event />} />
          <Route path="/members" element={<Members />} />
          <Route path="/alumnus" element={<Alumnus />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
