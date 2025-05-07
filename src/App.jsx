import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Import components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import CustomOrder from './components/CustomOrder';
import Footer from './components/Footer';
import Admin from './components/Admin';
import { ProjectDataProvider } from './components/ProjectDataContext';

// Main App component
const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading (in real app, this might be fetching data)
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-blue-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-yellow-400 mx-auto mb-4"></div>
          <h2 className="text-xl text-white font-medium">Loading...</h2>
        </div>
      </div>
    );
  }

  return (
    <ProjectDataProvider>
      <Router>
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Navbar />
                <main>
                  <Hero />
                  <Products />
                  <About />
                  <Gallery />
                  <Contact />
                  <CustomOrder />
                </main>
                <Footer />
              </>
            } 
          />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </ProjectDataProvider>
  );
};

export default App;