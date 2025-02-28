import React from 'react';
import { Building } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About EcoPedal Hyderabad</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Transforming urban mobility in Hyderabad with sustainable, convenient, and affordable bike-sharing solutions.
        </p>
      </div>
      
      {/* Our Story */}
      <section className="mb-16">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
              alt="Hyderabad City" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-lg text-gray-600 mb-4">
              EcoPedal was founded in 2024 by a group of urban mobility enthusiasts and environmental advocates who recognized the growing challenges of last-mile connectivity in Hyderabad's expanding metro network.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              After extensive research and collaboration with urban planners, we launched our pilot program with 50 bikes at 5 metro stations. The overwhelming response led to rapid expansion, and today we operate over 500 bikes across 50+ stations throughout the city.
            </p>
            <p className="text-lg text-gray-600">
              Our partnership with Hyderabad Metro Rail Limited (HMRL) has been instrumental in creating a seamless transportation ecosystem that benefits thousands of commuters daily while reducing traffic congestion and carbon emissions.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Impact */}
      <section className="mb-16 bg-gray-50 p-8 rounded-lg">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Impact</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl font-bold text-emerald-600 mb-2">25,000+</div>
            <p className="text-gray-600">Active Users</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl font-bold text-emerald-600 mb-2">150,000+</div>
            <p className="text-gray-600">Rides Completed</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl font-bold text-emerald-600 mb-2">75,000 kg</div>
            <p className="text-gray-600">CO₂ Emissions Saved</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl font-bold text-emerald-600 mb-2">250,000 km</div>
            <p className="text-gray-600">Total Distance Covered</p>
          </div>
        </div>
      </section>
      
      {/* Our Partners */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Partners</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Building className="h-8 w-8 text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold">Hyderabad Metro Rail Limited</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Our primary partner in establishing docking stations at metro exits and integrating payment systems for seamless commuter experience.
            </p>
            <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">Learn more about our partnership</a>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Building className="h-8 w-8 text-green-600 mr-3" />
              <h3 className="text-xl font-semibold">Telangana Renewable Energy</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Collaborating to power our charging stations with renewable energy sources and reduce our carbon footprint.
            </p>
            <a href="#" className="text-green-600 hover:text-green-700 font-medium">Explore our green initiatives</a>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Building className="h-8 w-8 text-purple-600 mr-3" />
              <h3 className="text-xl font-semibold">Hyderabad Smart City Initiative</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Working together to integrate our bike-sharing system into the broader smart city infrastructure and data ecosystem.
            </p>
            <a href="#" className="text-purple-600 hover:text-purple-700 font-medium">View smart city integration</a>
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Leadership Team</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                alt="Rajesh Kumar" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-1">Rajesh Kumar</h3>
            <p className="text-emerald-600 mb-3">Founder & CEO</p>
            <p className="text-gray-600 text-sm">
              Urban mobility expert with 15+ years of experience in sustainable transportation solutions.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80" 
                alt="Priya Sharma" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-1">Priya Sharma</h3>
            <p className="text-emerald-600 mb-3">CTO</p>
            <p className="text-gray-600 text-sm">
              Tech innovator specializing in AI-driven mobility solutions and smart infrastructure.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                alt="Vikram Reddy" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-1">Vikram Reddy</h3>
            <p className="text-emerald-600 mb-3">COO</p>
            <p className="text-gray-600 text-sm">
              Operations expert with extensive experience in logistics and fleet management.
            </p>
          </div>
        </div>
      </section>
      
      {/* Join Us */}
      <section className="bg-emerald-600 text-white rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
            <p className="text-lg mb-6">
              We're always looking for passionate individuals to join our team and help us transform urban mobility in Hyderabad.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-white text-emerald-600 hover:bg-gray-100 font-bold py-2 px-6 rounded-lg"
              >
                View Careers
              </a>
              <a 
                href="#" 
                className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-2 px-6 rounded-lg"
              >
                Contact Us
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80" 
              alt="EcoPedal Team" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;