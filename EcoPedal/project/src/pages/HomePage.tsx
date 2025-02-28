import React from 'react';
import { Link } from 'react-router-dom';
import { Bike, Users, MapPin, Clock, Shield, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-gradient-to-r from-emerald-600 to-teal-500 text-white">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1571188654248-7a89213915f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Eco-Friendly Mobility for Hyderabad
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Solving last-mile connectivity with smart e-bike sharing and pooling solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/map" 
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg flex items-center justify-center"
              >
                <MapPin className="mr-2 h-5 w-5" />
                Find Nearby Bikes
              </Link>
              <Link 
                to="/book" 
                className="bg-white hover:bg-gray-100 text-emerald-600 font-bold py-3 px-6 rounded-lg shadow-lg flex items-center justify-center"
              >
                <Bike className="mr-2 h-5 w-5" />
                Book a Ride
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How EcoPedal Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered platform makes bike sharing and pooling simple, efficient, and eco-friendly.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Locate</h3>
              <p className="text-gray-600">
                Find available e-bikes at docking stations near metro stations and key locations across Hyderabad.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bike className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Ride</h3>
              <p className="text-gray-600">
                Unlock with your app and enjoy a smooth ride with our premium e-bikes. Choose solo or pool with others.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Return</h3>
              <p className="text-gray-600">
                Park at any designated docking station. Pay only for the time you use with our flexible pricing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Smart Features for Urban Mobility</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform combines cutting-edge technology with user-friendly design to transform urban commuting.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="bg-emerald-100 p-3 rounded-full mr-4">
                  <Zap className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold">E-Bike Fleet</h3>
              </div>
              <p className="text-gray-600">
                Modern, eco-friendly electric bikes with smart features and comfortable design for urban commuting.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="bg-emerald-100 p-3 rounded-full mr-4">
                  <Users className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold">Bike Pooling</h3>
              </div>
              <p className="text-gray-600">
                Share your route with others going the same way to split costs and reduce carbon footprint.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="bg-emerald-100 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold">AI Route Optimization</h3>
              </div>
              <p className="text-gray-600">
                Smart algorithms suggest the most efficient routes based on traffic, terrain, and user preferences.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="bg-emerald-100 p-3 rounded-full mr-4">
                  <Shield className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold">Safety Features</h3>
              </div>
              <p className="text-gray-600">
                Built-in lights, GPS tracking, and emergency assistance for a secure riding experience.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="bg-emerald-100 p-3 rounded-full mr-4">
                  <Clock className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold">Real-time Availability</h3>
              </div>
              <p className="text-gray-600">
                Live updates on bike availability at each station, with reservation options for planning ahead.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="bg-emerald-100 p-3 rounded-full mr-4">
                  <Bike className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold">Metro Integration</h3>
              </div>
              <p className="text-gray-600">
                Seamless connection with Hyderabad Metro, with stations strategically placed near metro exits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Metro Partnership Section */}
      <section className="py-16 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <img 
                src="https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                alt="Hyderabad Metro Station" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Partnering with Hyderabad Metro
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We've partnered with Hyderabad Metro Rail Limited (HMRL) to provide seamless last-mile connectivity for metro commuters. Our docking stations are strategically located at metro exits for maximum convenience.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold">✓</div>
                  <p className="ml-3 text-gray-600">Dedicated parking zones at all major metro stations</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold">✓</div>
                  <p className="ml-3 text-gray-600">Integrated payment with metro smart cards</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold">✓</div>
                  <p className="ml-3 text-gray-600">Special discounts for metro commuters</p>
                </li>
              </ul>
              <Link 
                to="/about" 
                className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700"
              >
                Learn more about our partnerships
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Commute?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of Hyderabadis who are making their city greener and their commutes smarter with EcoPedal.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/register" 
              className="bg-white text-emerald-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg shadow-lg"
            >
              Sign Up Now
            </Link>
            <Link 
              to="/map" 
              className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3 px-8 rounded-lg shadow-lg"
            >
              Explore the Map
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;