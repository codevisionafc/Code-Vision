import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Events from './pages/Events';
import Members from './pages/Members';
import Alumni from './pages/Alumni';
import Gallery from './pages/Gallery';
import ContactUs from './pages/ContactUs';
import './assets/customScrollbar.css';
import AnimatedBackground from './components/AnimatedBackground';
import packageInfo from '../package.json';
// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  if (pathname.startsWith('/events/')) return null;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const homepage = packageInfo.homepage || '/';
const base = new URL(homepage).pathname;

export default function App() {
  return (
    <Router basename={base}>
      <AnimatedBackground />
      <ScrollToTop />
      <div className="min-h-screen font-poppins">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:event" element={<Events />} />
          <Route path="/members" element={<Members />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
