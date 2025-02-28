import React, { useState } from 'react';
import { Bike, CreditCard, Bell, Settings, User, LogOut, ChevronRight, Award } from 'lucide-react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  
  // Mock user data
  const userData = {
    name: 'Priya Sharma',
    email: 'priya.sharma@example.com',
    phone: '+91 98765 43210',
    memberSince: 'March 2025',
    walletBalance: 450,
    totalRides: 28,
    totalDistance: 87.5,
    co2Saved: 35.2,
    upcomingRide: {
      id: 'ECO-4582',
      date: '2025-04-15',
      time: '09:30',
      pickup: 'Ameerpet Metro Station',
      dropoff: 'HITEC City'
    }
  };
  
  // Mock ride history data
  const rideHistory = [
    {
      id: 'ECO-4581',
      date: '2025-04-10',
      pickup: 'Secunderabad Station',
      dropoff: 'Begumpet',
      duration: '18 min',
      distance: '3.2 km',
      fare: '₹45'
    },
    {
      id: 'ECO-4573',
      date: '2025-04-07',
      pickup: 'HITEC City',
      dropoff: 'Jubilee Hills',
      duration: '25 min',
      distance: '4.8 km',
      fare: '₹65'
    },
    {
      id: 'ECO-4562',
      date: '2025-04-03',
      pickup: 'Miyapur Metro Station',
      dropoff: 'JNTU',
      duration: '12 min',
      distance: '2.1 km',
      fare: '₹30'
    },
    {
      id: 'ECO-4550',
      date: '2025-03-28',
      pickup: 'Ameerpet Metro Station',
      dropoff: 'Punjagutta',
      duration: '10 min',
      distance: '1.8 km',
      fare: '₹25'
    }
  ];
  
  // Chart data for usage statistics
  const chartData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Rides Taken',
        data: [5, 8, 7, 8],
        backgroundColor: 'rgba(16, 185, 129, 0.7)',
      },
      {
        label: 'Distance (km)',
        data: [12.5, 22.3, 18.7, 34.0],
        backgroundColor: 'rgba(59, 130, 246, 0.7)',
      }
    ],
  };
  
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Monthly Usage Statistics',
      },
    },
  };
  
  // Render different content based on active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div>
            {/* Welcome Card */}
            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg shadow-md p-6 text-white mb-6">
              <h2 className="text-2xl font-bold mb-2">Welcome back, {userData.name}!</h2>
              <p className="mb-4">Member since {userData.memberSince}</p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/20 rounded-lg p-3 flex-1">
                  <p className="text-sm opacity-80">Wallet Balance</p>
                  <p className="text-xl font-bold">₹{userData.walletBalance}</p>
                </div>
                <div className="bg-white/20 rounded-lg p-3 flex-1">
                  <p className="text-sm opacity-80">Total Rides</p>
                  <p className="text-xl font-bold">{userData.totalRides}</p>
                </div>
                <div className="bg-white/20 rounded-lg p-3 flex-1">
                  <p className="text-sm opacity-80">CO₂ Saved</p>
                  <p className="text-xl font-bold">{userData.co2Saved} kg</p>
                </div>
              </div>
            </div>
            
            {/* Upcoming Ride */}
            {userData.upcomingRide && (
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h3 className="text-lg font-semibold mb-4">Upcoming Ride</h3>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="bg-emerald-100 p-2 rounded-full mr-4">
                      <Bike className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <p className="font-medium">{userData.upcomingRide.pickup} → {userData.upcomingRide.dropoff}</p>
                      <p className="text-sm text-gray-500">
                        {new Date(userData.upcomingRide.date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })} at {userData.upcomingRide.time}
                      </p>
                    </div>
                  </div>
                  <button className="text-emerald-600 hover:text-emerald-700 font-medium">
                    View Details
                  </button>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md">
                    Get Directions
                  </button>
                  <button className="flex-1 border border-gray-300 text-gray-700 hover:bg-gray-50 py-2 px-4 rounded-md">
                    Cancel Ride
                  </button>
                </div>
              </div>
            )}
            
            {/* Usage Statistics */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-lg font-semibold mb-4">Your Usage Statistics</h3>
              <Bar data={chartData} options={chartOptions} />
            </div>
            
            {/* Recent Rides */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Recent Rides</h3>
                <button className="text-emerald-600 hover:text-emerald-700 font-medium">
                  View All
                </button>
              </div>
              <div className="space-y-4">
                {rideHistory.slice(0, 3).map(ride => (
                  <div key={ride.id} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                    <div className="flex justify-between mb-1">
                      <p className="font-medium">{ride.pickup} → {ride.dropoff}</p>
                      <p className="text-gray-600">{ride.fare}</p>
                    </div>
                    <div className="flex justify-between text-sm text-gray-500">
                      <p>{new Date(ride.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} • {ride.duration} • {ride.distance}</p>
                      <button className="text-emerald-600 hover:text-emerald-700">Details</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
        
      case 'rides':
        return (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4">Ride History</h3>
            <div className="space-y-4">
              {rideHistory.map(ride => (
                <div key={ride.id} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                  <div className="flex justify-between mb-1">
                    <p className="font-medium">{ride.pickup} → {ride.dropoff}</p>
                    <p className="text-gray-600">{ride.fare}</p>
                  </div>
                  <div className="flex justify-between text-sm text-gray-500">
                    <p>{new Date(ride.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} • {ride.duration} • {ride.distance}</p>
                    <button className="text-emerald-600 hover:text-emerald-700">Receipt</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
        
      case 'wallet':
        return (
          <div>
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Wallet Balance</h3>
                <span className="text-2xl font-bold text-emerald-600">₹{userData.walletBalance}</span>
              </div>
              <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md">
                Add Money
              </button>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-lg font-semibold mb-4">Payment Methods</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 border border-gray-200 rounded-md">
                  <div className="flex items-center">
                    <CreditCard className="h-5 w-5 text-gray-500 mr-3" />
                    <div>
                      <p className="font-medium">•••• •••• •••• 4582</p>
                      <p className="text-sm text-gray-500">Expires 09/27</p>
                    </div>
                  </div>
                  <span className="text-sm bg-emerald-100 text-emerald-800 px-2 py-1 rounded">Default</span>
                </div>
                
                <div className="flex items-center justify-between p-3 border border-gray-200 rounded-md">
                  <div className="flex items-center">
                    <CreditCard className="h-5 w-5 text-gray-500 mr-3" />
                    <div>
                      <p className="font-medium">UPI: sharma.p@okaxis</p>
                      <p className="text-sm text-gray-500">Last used: Apr 10, 2025</p>
                    </div>
                  </div>
                  <button className="text-sm text-gray-500 hover:text-gray-700">Set Default</button>
                </div>
              </div>
              <button className="mt-4 text-emerald-600 hover:text-emerald-700 font-medium flex items-center">
                <span className="mr-1">Add Payment Method</span>
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4">Transaction History</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Wallet Recharge</p>
                    <p className="text-sm text-gray-500">Apr 10, 2025</p>
                  </div>
                  <span className="text-emerald-600 font-medium">+₹200</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Ride: ECO-4581</p>
                    <p className="text-sm text-gray-500">Apr 10, 2025</p>
                  </div>
                  <span className="text-red-600 font-medium">-₹45</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Ride: ECO-4573</p>
                    <p className="text-sm text-gray-500">Apr 07, 2025</p>
                  </div>
                  <span className="text-red-600 font-medium">-₹65</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Wallet Recharge</p>
                    <p className="text-sm text-gray-500">Apr 05, 2025</p>
                  </div>
                  <span className="text-emerald-600 font-medium">+₹300</span>
                </div>
              </div>
            </div>
          </div>
        );
        
      case 'rewards':
        return (
          <div>
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Your Green Points</h3>
                <span className="text-2xl font-bold text-emerald-600">1,250 pts</span>
              </div>
              <div className="bg-emerald-50 p-4 rounded-md mb-4">
                <p className="text-sm text-emerald-800">
                  You've saved approximately {userData.co2Saved} kg of CO₂ emissions by choosing EcoPedal!
                </p>
              </div>
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Next Reward: 1,500 pts</span>
                <span>250 pts to go</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-emerald-600 h-2.5 rounded-full" style={{ width: '83%' }}></div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4">Available Rewards</h3>
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium">Free 30-minute Ride</h4>
                    <span className="bg-emerald-100 text-emerald-800 text-sm px-2 py-1 rounded">1,500 pts</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Redeem your points for a free 30-minute ride on any of our bikes.
                  </p>
                  <button className="text-emerald-600 hover:text-emerald-700 text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed" disabled>
                    Redeem (250 pts more needed)
                  </button>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium">₹100 Wallet Credit</h4>
                    <span className="bg-emerald-100 text-emerald-800 text-sm px-2 py-1 rounded">1,000 pts</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Convert your green points to wallet credit for future rides.
                  </p>
                  <button className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
                    Redeem Now
                  </button>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium">Metro Discount Voucher</h4>
                    <span className="bg-emerald-100 text-emerald-800 text-sm px-2 py-1 rounded">800 pts</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Get 10% off on your next metro ticket purchase.
                  </p>
                  <button className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
                    Redeem Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
        
      case 'settings':
        return (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4">Account Settings</h3>
            
            <div className="mb-6">
              <h4 className="font-medium text-gray-700 mb-3">Personal Information</h4>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-600 mb-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                    defaultValue={userData.name}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-gray-600 mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                    defaultValue={userData.email}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm text-gray-600 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                    defaultValue={userData.phone}
                  />
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="font-medium text-gray-700 mb-3">Preferences</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Email Notifications</p>
                    <p className="text-sm text-gray-500">Receive updates about your rides and promotions</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                  </label>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Push Notifications</p>
                    <p className="text-sm text-gray-500">Get real-time updates about your rides</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                  </label>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Default Bike Type</p>
                    <p className="text-sm text-gray-500">Choose your preferred bike type</p>
                  </div>
                  <select className="border border-gray-300 rounded-md px-3 py-2">
                    <option value="ebike">E-Bike</option>
                    <option value="regular">Regular Bike</option>
                    <option value="any">No Preference</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-6 rounded-md">
                Save Changes
              </button>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar */}
        <div className="md:w-64 flex-shrink-0">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex flex-col items-center mb-6">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-3">
                <User className="h-10 w-10 text-emerald-600" />
              </div>
              <h2 className="text-xl font-bold">{userData.name}</h2>
              <p className="text-gray-500 text-sm">{userData.email}</p>
            </div>
            <div className="space-y-1">
              <button
                className={`w-full flex items-center px-4 py-2 rounded-md ${activeTab === 'dashboard' ? 'bg-emerald-100 text-emerald-700' : 'text-gray-700 hover:bg-gray-100'}`}
                onClick={() => setActiveTab('dashboard')}
              >
                <Bike className="h-5 w-5 mr-3" />
                Dashboard
              </button>
              <button
                className={`w-full flex items-center px-4 py-2 rounded-md ${activeTab === 'rides' ? 'bg-emerald-100 text-emerald-700' : 'text-gray-700 hover:bg-gray-100'}`}
                onClick={() => setActiveTab('rides')}
              >
                <Bike className="h-5 w-5 mr-3" />
                My Rides
              </button>
              <button
                className={`w-full flex items-center px-4 py-2 rounded-md ${activeTab === 'wallet' ? 'bg-emerald-100 text-emerald-700' : 'text-gray-700 hover:bg-gray-100'}`}
                onClick={() => setActiveTab('wallet')}
              >
                <CreditCard className="h-5 w-5 mr-3" />
                Wallet & Payments
              </button>
              <button
                className={`w-full flex items-center px-4 py-2 rounded-md ${activeTab === 'rewards' ? 'bg-emerald-100 text-emerald-700' : 'text-gray-700 hover:bg-gray-100'}`}
                onClick={() => setActiveTab('rewards')}
              >
                <Award className="h-5 w-5 mr-3" />
                Green Rewards
              </button>
              <button
                className={`w-full flex items-center px-4 py-2 rounded-md ${activeTab === 'settings' ? 'bg-emerald-100 text-emerald-700' : 'text-gray-700 hover:bg-gray-100'}`}
                onClick={() => setActiveTab('settings')}
              >
                <Settings className="h-5 w-5 mr-3" />
                Settings
              </button>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <button className="w-full flex items-center justify-center text-red-600 hover:text-red-700">
              <LogOut className="h-5 w-5 mr-2" />
              Sign Out
            </button>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="flex-1">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;