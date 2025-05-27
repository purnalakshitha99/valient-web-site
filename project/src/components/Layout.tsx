import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowUp } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
    
    if (window.scrollY > 500) {
      setShowScrollTop(true);
    } else {
      setShowScrollTop(false);
    }
  };
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      <header 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white shadow-md py-2' 
            : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-primary-900 font-bold text-xl md:text-2xl">Valiant</span>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <NavLink to="/" label="Home" isActive={location.pathname === '/'} />
            <NavLink to="/domain" label="Domain" isActive={location.pathname === '/domain'} />
            <NavLink to="/milestones" label="Milestones" isActive={location.pathname === '/milestones'} />
            <NavLink to="/documents" label="Documents" isActive={location.pathname === '/documents'} />
            <NavLink to="/presentations" label="Presentations" isActive={location.pathname === '/presentations'} />
            <NavLink to="/about" label="About Us" isActive={location.pathname === '/about'} />
            <NavLink to="/contact" label="Contact" isActive={location.pathname === '/contact'} />
          </nav>
          
          <button 
            className="md:hidden text-primary-900 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile menu */}
        <div 
          className={`md:hidden absolute w-full bg-white shadow-lg transition-transform duration-300 ease-in-out transform ${
            isMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <MobileNavLink to="/" label="Home" />
            <MobileNavLink to="/domain" label="Domain" />
            <MobileNavLink to="/milestones" label="Milestones" />
            <MobileNavLink to="/documents" label="Documents" />
            <MobileNavLink to="/presentations" label="Presentations" />
            <MobileNavLink to="/about" label="About Us" />
            <MobileNavLink to="/contact" label="Contact" />
          </div>
        </div>
      </header>
      
      <main className="flex-grow pt-16">
        {children}
      </main>
      
      <footer className="bg-primary-900 text-white">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">Project 24-25J-042</h3>
              <p className="text-primary-100">
                Exposure Therapy for Four Different Phobias Through Virtual and Augmented Reality Scenarios and Games
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-primary-100 hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/domain" className="text-primary-100 hover:text-white transition-colors">Domain</Link></li>
                <li><Link to="/documents" className="text-primary-100 hover:text-white transition-colors">Documents</Link></li>
                <li><Link to="/about" className="text-primary-100 hover:text-white transition-colors">About Us</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4 text-white">Contact</h4>
              <p className="text-primary-100 mb-2">Department of Computer Science</p>
              <p className="text-primary-100 mb-2">Email: research@university.edu</p>
              <p className="text-primary-100">Phone: (123) 456-7890</p>
            </div>
          </div>
          
          <div className="border-t border-primary-700 mt-8 pt-8 text-center">
            <p className="text-primary-200">
              © {new Date().getFullYear()} Project 24-25J-042. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
      
      {/* Scroll to top button */}
      <button 
        className={`fixed right-6 bottom-6 p-3 rounded-full bg-primary-600 text-white shadow-lg transition-opacity duration-300 ${
          showScrollTop ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </button>
    </div>
  );
};

interface NavLinkProps {
  to: string;
  label: string;
  isActive: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ to, label, isActive }) => {
  return (
    <Link 
      to={to} 
      className={`font-medium transition-colors duration-200 relative ${
        isActive 
          ? 'text-primary-600' 
          : 'text-gray-700 hover:text-primary-600'
      }`}
    >
      {label}
      {isActive && (
        <span className="absolute bottom-[-4px] left-0 w-full h-0.5 bg-primary-600"></span>
      )}
    </Link>
  );
};

interface MobileNavLinkProps {
  to: string;
  label: string;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ to, label }) => {
  return (
    <Link 
      to={to} 
      className="block py-2 text-gray-800 font-medium hover:text-primary-600 transition-colors"
    >
      {label}
    </Link>
  );
};

export default Layout;