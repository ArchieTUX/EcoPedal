import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Bike, Users, Calendar, Clock, MapPin, CreditCard, ChevronDown, ChevronUp } from 'lucide-react';

type BookingFormData = {
  rideType: 'solo' | 'pool';
  pickupLocation: string;
  dropoffLocation: string;
  date: string;
  time: string;
  bikeType: 'regular' | 'ebike';
  paymentMethod: string;
};

const BookRide = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<BookingFormData>({
    defaultValues: {
      rideType: 'solo',
      bikeType: 'ebike',
      paymentMethod: 'wallet'
    }
  });
  
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);
  const [estimatedPrice, setEstimatedPrice] = useState('₹45-60');
  const [estimatedTime, setEstimatedTime] = useState('15-20 min');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [bookingDetails, setBookingDetails] = useState<BookingFormData | null>(null);
  
  const rideType = watch('rideType');
  const bikeType = watch('bikeType');
  
  const onSubmit = (data: BookingFormData) => {
    console.log(data);
    setBookingDetails(data);
    setShowConfirmation(true);
  };
  
  // Popular locations in Hyderabad
  const popularLocations = [
    "Ameerpet Metro Station",
    "Miyapur Metro Station",
    "HITEC City",
    "Secunderabad Station",
    "Jubilee Hills",
    "Gachibowli",
    "LB Nagar",
    "Dilsukhnagar",
    "Begumpet",
    "Kukatpally"
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {!showConfirmation ? (
        <>
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Book Your Ride</h1>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* Ride Type Selection */}
                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-3">Choose Ride Type</label>
                  <div className="grid grid-cols-2 gap-4">
                    <label className={`border rounded-lg p-4 flex items-start cursor-pointer ${rideType === 'solo' ? 'border-emerald-500 bg-emerald-50' : 'border-gray-200'}`}>
                      <input
                        type="radio"
                        value="solo"
                        {...register('rideType')}
                        className="sr-only"
                      />
                      <div className="flex-shrink-0 mt-1">
                        <Bike className={`h-6 w-6 ${rideType === 'solo' ? 'text-emerald-500' : 'text-gray-400'}`} />
                      </div>
                      <div className="ml-3">
                        <span className={`block font-medium ${rideType === 'solo' ? 'text-emerald-700' : 'text-gray-700'}`}>
                          Solo Ride
                        </span>
                        <span className="text-sm text-gray-500">
                          Book a bike for yourself
                        </span>
                      </div>
                    </label>
                    
                    <label className={`border rounded-lg p-4 flex items-start cursor-pointer ${rideType === 'pool' ? 'border-emerald-500 bg-emerald-50' : 'border-gray-200'}`}>
                      <input
                        type="radio"
                        value="pool"
                        {...register('rideType')}
                        className="sr-only"
                      />
                      <div className="flex-shrink-0 mt-1">
                        <Users className={`h-6 w-6 ${rideType === 'pool' ? 'text-emerald-500' : 'text-gray-400'}`} />
                      </div>
                      <div className="ml-3">
                        <span className={`block font-medium ${rideType === 'pool' ? 'text-emerald-700' : 'text-gray-700'}`}>
                          Bike Pool
                        </span>
                        <span className="text-sm text-gray-500">
                          Share your ride & save costs
                        </span>
                      </div>
                    </label>
                  </div>
                </div>
                
                {/* Locations */}
                <div className="mb-6">
                  <div className="mb-4">
                    <label htmlFor="pickupLocation" className="block text-gray-700 font-medium mb-2">
                      Pickup Location
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <MapPin className="h-5 w-5 text-gray-400" />
                      </div>
                      <select
                        id="pickupLocation"
                        {...register('pickupLocation', { required: 'Pickup location is required' })}
                        className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                      >
                        <option value="">Select pickup location</option>
                        {popularLocations.map((location, index) => (
                          <option key={index} value={location}>{location}</option>
                        ))}
                      </select>
                    </div>
                    {errors.pickupLocation && (
                      <p className="mt-1 text-sm text-red-600">{errors.pickupLocation.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="dropoffLocation" className="block text-gray-700 font-medium mb-2">
                      Dropoff Location
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <MapPin className="h-5 w-5 text-gray-400" />
                      </div>
                      <select
                        id="dropoffLocation"
                        {...register('dropoffLocation', { required: 'Dropoff location is required' })}
                        className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                      >
                        <option value="">Select dropoff location</option>
                        {popularLocations.map((location, index) => (
                          <option key={index} value={location}>{location}</option>
                        ))}
                      </select>
                    </div>
                    {errors.dropoffLocation && (
                      <p className="mt-1 text-sm text-red-600">{errors.dropoffLocation.message}</p>
                    )}
                  </div>
                </div>
                
                {/* Date and Time */}
                <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="date" className="block text-gray-700 font-medium mb-2">
                      Date
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Calendar className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="date"
                        id="date"
                        {...register('date', { required: 'Date is required' })}
                        className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                      />
                    </div>
                    {errors.date && (
                      <p className="mt-1 text-sm text-red-600">{errors.date.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="time" className="block text-gray-700 font-medium mb-2">
                      Time
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Clock className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="time"
                        id="time"
                        {...register('time', { required: 'Time is required' })}
                        className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                      />
                    </div>
                    {errors.time && (
                      <p className="mt-1 text-sm text-red-600">{errors.time.message}</p>
                    )}
                  </div>
                </div>
                
                {/* Advanced Options Toggle */}
                <div className="mb-6">
                  <button
                    type="button"
                    className="flex items-center text-emerald-600 hover:text-emerald-700"
                    onClick={() => setIsAdvancedOpen(!isAdvancedOpen)}
                  >
                    {isAdvancedOpen ? (
                      <ChevronUp className="h-5 w-5 mr-1" />
                    ) : (
                      <ChevronDown className="h-5 w-5 mr-1" />
                    )}
                    Advanced Options
                  </button>
                  
                  {isAdvancedOpen && (
                    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                      <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Bike Type</label>
                        <div className="grid grid-cols-2 gap-4">
                          <label className={`border rounded-lg p-3 flex items-center cursor-pointer ${bikeType === 'regular' ? 'border-emerald-500 bg-emerald-50' : 'border-gray-200'}`}>
                            <input
                              type="radio"
                              value="regular"
                              {...register('bikeType')}
                              className="sr-only"
                            />
                            <Bike className={`h-5 w-5 ${bikeType === 'regular' ? 'text-emerald-500' : 'text-gray-400'}`} />
                            <span className={`ml-2 ${bikeType === 'regular' ? 'text-emerald-700' : 'text-gray-700'}`}>
                              Regular Bike
                            </span>
                          </label>
                          
                          <label className={`border rounded-lg p-3 flex items-center cursor-pointer ${bikeType === 'ebike' ? 'border-emerald-500 bg-emerald-50' : 'border-gray-200'}`}>
                            <input
                              type="radio"
                              value="ebike"
                              {...register('bikeType')}
                              className="sr-only"
                            />
                            <Bike className={`h-5 w-5 ${bikeType === 'ebike' ? 'text-emerald-500' : 'text-gray-400'}`} />
                            <span className={`ml-2 ${bikeType === 'ebike' ? 'text-emerald-700' : 'text-gray-700'}`}>
                              E-Bike
                            </span>
                          </label>
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="paymentMethod" className="block text-gray-700 font-medium mb-2">
                          Payment Method
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <CreditCard className="h-5 w-5 text-gray-400" />
                          </div>
                          <select
                            id="paymentMethod"
                            {...register('paymentMethod')}
                            className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                          >
                            <option value="wallet">EcoPedal Wallet</option>
                            <option value="card">Credit/Debit Card</option>
                            <option value="upi">UPI</option>
                            <option value="metro">Metro Card</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Ride Summary */}
                <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-medium text-gray-700 mb-2">Ride Summary</h3>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-600">Estimated fare:</span>
                    <span className="font-medium">{estimatedPrice}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Estimated time:</span>
                    <span className="font-medium">{estimatedTime}</span>
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-lg shadow-md transition duration-150 ease-in-out"
                >
                  Book Now
                </button>
              </form>
            </div>
          </div>
        </>
      ) : (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-emerald-600 p-6 text-white text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
              <Bike className="h-8 w-8 text-emerald-600" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Booking Confirmed!</h2>
            <p>Your bike will be ready for pickup</p>
          </div>
          
          <div className="p-6">
            <div className="mb-6">
              <h3 className="font-medium text-gray-700 mb-3">Booking Details</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Ride Type:</span>
                  <span className="font-medium">
                    {bookingDetails?.rideType === 'solo' ? 'Solo Ride' : 'Bike Pool'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Pickup:</span>
                  <span className="font-medium">{bookingDetails?.pickupLocation}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Dropoff:</span>
                  <span className="font-medium">{bookingDetails?.dropoffLocation}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Date & Time:</span>
                  <span className="font-medium">{bookingDetails?.date} at {bookingDetails?.time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Bike Type:</span>
                  <span className="font-medium">
                    {bookingDetails?.bikeType === 'regular' ? 'Regular Bike' : 'E-Bike'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Payment Method:</span>
                  <span className="font-medium">
                    {bookingDetails?.paymentMethod === 'wallet' ? 'EcoPedal Wallet' : 
                     bookingDetails?.paymentMethod === 'card' ? 'Credit/Debit Card' :
                     bookingDetails?.paymentMethod === 'upi' ? 'UPI' : 'Metro Card'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Booking ID:</span>
                  <span className="font-medium">ECO-{Math.floor(Math.random() * 10000)}</span>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-blue-50 rounded-lg mb-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-blue-800">Unlock Instructions</h3>
                  <div className="mt-2 text-sm text-blue-700">
                    <p>Use the QR code scanner in the app to unlock your bike at the station. Your bike will be held for 15 minutes.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setShowConfirmation(false)}
                className="flex-1 bg-white border border-gray-300 text-gray-700 font-medium py-2 px-4 rounded-lg hover:bg-gray-50"
              >
                Modify Booking
              </button>
              <button
                onClick={() => window.location.href = '/map'}
                className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 px-4 rounded-lg"
              >
                View on Map
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookRide;