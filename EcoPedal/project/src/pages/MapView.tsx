import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { Bike, Battery, Users, Navigation, Search, Filter } from 'lucide-react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icons in React Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

// Custom bike icon
const bikeIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  shadowSize: [41, 41]
});

// Sample data for bike stations
const bikeStations = [
  {
    id: 1,
    name: 'Ameerpet Metro Station',
    location: [17.4374, 78.4487],
    availableBikes: 8,
    totalDocks: 12,
    ebikes: 5,
    regularBikes: 3,
    batteryLevel: 85,
    isMetroStation: true
  },
  {
    id: 2,
    name: 'Begumpet',
    location: [17.4447, 78.4664],
    availableBikes: 4,
    totalDocks: 8,
    ebikes: 2,
    regularBikes: 2,
    batteryLevel: 70,
    isMetroStation: false
  },
  {
    id: 3,
    name: 'Miyapur Metro Station',
    location: [17.4969, 78.3715],
    availableBikes: 10,
    totalDocks: 15,
    ebikes: 7,
    regularBikes: 3,
    batteryLevel: 90,
    isMetroStation: true
  },
  {
    id: 4,
    name: 'HITEC City',
    location: [17.4435, 78.3772],
    availableBikes: 6,
    totalDocks: 10,
    ebikes: 4,
    regularBikes: 2,
    batteryLevel: 75,
    isMetroStation: false
  },
  {
    id: 5,
    name: 'Secunderabad Station',
    location: [17.4344, 78.5013],
    availableBikes: 12,
    totalDocks: 20,
    ebikes: 8,
    regularBikes: 4,
    batteryLevel: 95,
    isMetroStation: true
  }
];

// Component to set the map view to user's location
const LocationMarker = () => {
  const [position, setPosition] = useState<[number, number] | null>(null);
  const map = useMap();

  useEffect(() => {
    map.locate().on("locationfound", function (e) {
      setPosition([e.latlng.lat, e.latlng.lng]);
      map.flyTo(e.latlng, map.getZoom());
    });
  }, [map]);

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
};

const MapView = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredStations, setFilteredStations] = useState(bikeStations);
  const [filters, setFilters] = useState({
    onlyEbikes: false,
    onlyMetroStations: false,
    minBatteryLevel: 0
  });
  
  // Hyderabad center coordinates
  const hyderabadCenter: [number, number] = [17.3850, 78.4867];
  
  // Filter stations based on search and filters
  useEffect(() => {
    let result = bikeStations;
    
    // Apply search filter
    if (searchQuery) {
      result = result.filter(station => 
        station.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Apply other filters
    if (filters.onlyEbikes) {
      result = result.filter(station => station.ebikes > 0);
    }
    
    if (filters.onlyMetroStations) {
      result = result.filter(station => station.isMetroStation);
    }
    
    if (filters.minBatteryLevel > 0) {
      result = result.filter(station => station.batteryLevel >= filters.minBatteryLevel);
    }
    
    setFilteredStations(result);
  }, [searchQuery, filters]);
  
  const handleFilterChange = (filterName: string, value: boolean | number) => {
    setFilters(prev => ({
      ...prev,
      [filterName]: value
    }));
  };

  return (
    <div className="flex flex-col h-[calc(100vh-64px)]">
      <div className="bg-white p-4 shadow-md z-10">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Find Available Bikes</h1>
          
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search for stations..."
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <button
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50"
              onClick={() => document.getElementById('filterModal')?.classList.toggle('hidden')}
            >
              <Filter className="h-5 w-5 mr-2" />
              Filters
            </button>
          </div>
          
          {/* Filter Modal */}
          <div id="filterModal" className="hidden bg-white p-4 rounded-md shadow-lg border border-gray-200 mb-4">
            <h3 className="font-semibold text-lg mb-3">Filter Options</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="onlyEbikes"
                  className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                  checked={filters.onlyEbikes}
                  onChange={(e) => handleFilterChange('onlyEbikes', e.target.checked)}
                />
                <label htmlFor="onlyEbikes" className="ml-2 block text-sm text-gray-700">
                  Only show stations with e-bikes
                </label>
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="onlyMetroStations"
                  className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                  checked={filters.onlyMetroStations}
                  onChange={(e) => handleFilterChange('onlyMetroStations', e.target.checked)}
                />
                <label htmlFor="onlyMetroStations" className="ml-2 block text-sm text-gray-700">
                  Only show metro station docks
                </label>
              </div>
              
              <div>
                <label htmlFor="batteryLevel" className="block text-sm text-gray-700 mb-1">
                  Minimum battery level: {filters.minBatteryLevel}%
                </label>
                <input
                  type="range"
                  id="batteryLevel"
                  min="0"
                  max="100"
                  step="5"
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  value={filters.minBatteryLevel}
                  onChange={(e) => handleFilterChange('minBatteryLevel', parseInt(e.target.value))}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex-grow relative">
        <MapContainer 
          center={hyderabadCenter} 
          zoom={12} 
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          
          <LocationMarker />
          
          {filteredStations.map(station => (
            <Marker 
              key={station.id} 
              position={station.location}
              icon={bikeIcon}
            >
              <Popup>
                <div className="p-1">
                  <h3 className="font-bold text-lg">{station.name}</h3>
                  {station.isMetroStation && (
                    <div className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded inline-block mb-2">
                      Metro Station
                    </div>
                  )}
                  <div className="flex items-center text-sm mb-1">
                    <Bike className="h-4 w-4 mr-1" />
                    <span>{station.availableBikes} bikes available / {station.totalDocks} docks</span>
                  </div>
                  <div className="flex items-center text-sm mb-1">
                    <Battery className="h-4 w-4 mr-1" />
                    <span>Avg. battery: {station.batteryLevel}%</span>
                  </div>
                  <div className="mt-2">
                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white py-1 px-3 rounded text-sm">
                      Reserve a Bike
                    </button>
                    <button className="ml-2 bg-gray-100 hover:bg-gray-200 text-gray-800 py-1 px-3 rounded text-sm flex items-center">
                      <Navigation className="h-3 w-3 mr-1" />
                      Directions
                    </button>
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
      
      {/* Station List for Mobile */}
      <div className="md:hidden bg-white border-t border-gray-200 overflow-y-auto max-h-48">
        <div className="p-2">
          <h3 className="font-semibold text-gray-700 mb-2">Nearby Stations</h3>
          <div className="space-y-2">
            {filteredStations.map(station => (
              <div key={station.id} className="p-2 border border-gray-200 rounded-md">
                <div className="flex justify-between items-center">
                  <h4 className="font-medium">{station.name}</h4>
                  <span className="text-sm text-gray-500">
                    {station.availableBikes}/{station.totalDocks} bikes
                  </span>
                </div>
                <div className="flex items-center text-xs text-gray-500 mt-1">
                  <Battery className="h-3 w-3 mr-1" />
                  <span>{station.batteryLevel}% battery</span>
                  {station.isMetroStation && (
                    <span className="ml-2 bg-blue-100 text-blue-800 px-1 rounded">Metro</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapView;