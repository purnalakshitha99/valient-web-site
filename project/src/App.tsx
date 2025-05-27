import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from './components/Layout';
import Home from './pages/Home';
import Domain from './pages/Domain';
import Milestones from './pages/Milestones';
import Documents from './pages/Documents';
import Presentations from './pages/Presentations';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  in: {
    opacity: 1,
    y: 0
  },
  exit: {
    opacity: 0,
    y: -20
  }
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5
};

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route 
            path="/" 
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="exit"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Home />
              </motion.div>
            } 
          />
          <Route 
            path="/domain" 
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="exit"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Domain />
              </motion.div>
            } 
          />
          <Route 
            path="/milestones" 
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="exit"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Milestones />
              </motion.div>
            } 
          />
          <Route 
            path="/documents" 
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="exit"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Documents />
              </motion.div>
            } 
          />
          <Route 
            path="/presentations" 
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="exit"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Presentations />
              </motion.div>
            } 
          />
          <Route 
            path="/about" 
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="exit"
                variants={pageVariants}
                transition={pageTransition}
              >
                <AboutUs />
              </motion.div>
            } 
          />
          <Route 
            path="/contact" 
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="exit"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Contact />
              </motion.div>
            } 
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;