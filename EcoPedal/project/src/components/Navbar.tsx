import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bike, Menu, X, User, MapPin, Info, LogIn } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-emerald-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Bike className="h-8 w-8 mr-2" />
              <span className="font-bold text-xl">EcoPedal Hyderabad</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/map" className="px-3 py-2 rounded-md hover:bg-emerald-700 flex items-center">
              <MapPin className="h-5 w-5 mr-1" />
              <span>Find Bikes</span>
            </Link>
            <Link to="/book" className="px-3 py-2 rounded-md hover:bg-emerald-700 flex items-center">
              <Bike className="h-5 w-5 mr-1" />
              <span>Book a Ride</span>
            </Link>
            <Link to="/about" className="px-3 py-2 rounded-md hover:bg-emerald-700 flex items-center">
              <Info className="h-5 w-5 mr-1" />
              <span>About</span>
            </Link>
            <Link to="/profile" className="px-3 py-2 rounded-md hover:bg-emerald-700 flex items-center">
              <User className="h-5 w-5 mr-1" />
              <span>Profile</span>
            </Link>
            <Link to="/login" className="ml-4 px-4 py-2 bg-white text-emerald-600 font-medium rounded-md hover:bg-gray-100 flex items-center">
              <LogIn className="h-5 w-5 mr-1" />
              <span>Login</span>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-emerald-700 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-emerald-600">
            <Link 
              to="/map" 
              className="block px-3 py-2 rounded-md hover:bg-emerald-700 flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <MapPin className="h-5 w-5 mr-2" />
              <span>Find Bikes</span>
            </Link>
            <Link 
              to="/book" 
              className="block px-3 py-2 rounded-md hover:bg-emerald-700 flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <Bike className="h-5 w-5 mr-2" />
              <span>Book a Ride</span>
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 rounded-md hover:bg-emerald-700 flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <Info className="h-5 w-5 mr-2" />
              <span>About</span>
            </Link>
            <Link 
              to="/profile" 
              className="block px-3 py-2 rounded-md hover:bg-emerald-700 flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <User className="h-5 w-5 mr-2" />
              <span>Profile</span>
            </Link>
            <Link 
              to="/login" 
              className="block px-3 py-2 rounded-md bg-white text-emerald-600 font-medium hover:bg-gray-100 flex items-center mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <LogIn className="h-5 w-5 mr-2" />
              <span>Login</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;