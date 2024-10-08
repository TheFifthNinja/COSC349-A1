import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navigation';
import DarkMode from './components/DarkMode';
import Hero from './components/Hero';
import SignIn from './pages/SignIn';
import CreateAccount from './pages/CreateAccount';
import CreateProperty from './pages/CreateProperty';
import ShowProperty from './pages/ShowProperty';
import About from './pages/About';
import Details from './pages/Details';
import Renting from './pages/Renting';

function AppContent() {
  const location = useLocation();
  const pathname = location.pathname;
  const [renter,setRenter] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    return savedDarkMode;
  });

  const handleLogin = (renter) => {
    setRenter(renter)
  }

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={`bg-white dark:bg-gray-900 min-h-screen`}>
      <Navbar 
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode} 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen} 
        pathname={pathname}
        renter={renter}
      />
      <Routes>
        <Route path="/" element={<Hero renter={renter} darkMode={darkMode} />} />
        <Route path="/renting" element={<Renting renter={renter}/>} />
        <Route path="/details/:id" element={<Details renter={renter} darkMode={darkMode} />} />
        <Route path="/create-property" element={<CreateProperty darkMode={darkMode} renter={renter} />} />
        <Route path="/sign-in" element={<SignIn  renter={handleLogin}/>} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/show-property" element={<ShowProperty darkMode={darkMode} renter={renter}/>} />
        <Route path="/about" element={<About renter={renter} darkMode={darkMode} />} />
      </Routes>
      <DarkMode darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
