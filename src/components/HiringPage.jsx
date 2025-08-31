// components/HiringPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, Calendar, MapPin, DollarSign, Clock, Award } from 'lucide-react';
import logo from '../assets/logo.png';

const HiringPage = () => {
  // Sample job positions
  const jobPositions = [
    {
      id: 1,
      title: "Senior Rural Development Officer",
      department: "Rural Development Division",
      type: "Full-time",
      location: "Colombo, Sri Lanka",
      salary: "LKR 120,000 - 150,000",
      experience: "5+ years",
      deadline: "2025-10-15"
    },
    {
      id: 2,
      title: "Social Security Analyst",
      department: "Social Security Division",
      type: "Full-time",
      location: "Kandy, Sri Lanka",
      salary: "LKR 100,000 - 130,000",
      experience: "3+ years",
      deadline: "2025-10-20"
    },
    {
      id: 3,
      title: "Community Empowerment Coordinator",
      department: "Community Empowerment Division",
      type: "Full-time",
      location: "Gampaha, Sri Lanka",
      salary: "LKR 90,000 - 120,000",
      experience: "4+ years",
      deadline: "2025-10-10"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  src={logo}
                  alt="Ministry Logo"
                  className="h-12 w-10"
                />
              </div>
              <div className="ml-3">
                <h1 className="text-lg font-bold text-gray-900">
                  Ministry of Rural Development
                </h1>
              </div>
            </div>
            
            <Link 
              to="/" 
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6">
            <Users className="w-10 h-10 text-blue-600" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            We're <span className="text-blue-600">Hiring</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Join our team and make a difference in rural communities across Sri Lanka
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 max-w-2xl mx-auto mb-16">
            <div className="bg-white rounded-lg p-4 shadow-sm flex items-center">
              <Award className="w-6 h-6 text-blue-600 mr-2" />
              <span className="text-sm font-medium">Career Growth</span>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm flex items-center">
              <DollarSign className="w-6 h-6 text-blue-600 mr-2" />
              <span className="text-sm font-medium">Competitive Salary</span>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm flex items-center">
              <Clock className="w-6 h-6 text-blue-600 mr-2" />
              <span className="text-sm font-medium">Flexible Hours</span>
            </div>
          </div>
        </div>
      </div>

      {/* Job Listings Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Current Openings</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobPositions.map((job) => (
              <div key={job.id} className="bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                  <p className="text-gray-600 mb-4">{job.department}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="bg-blue-100 p-2 rounded-lg mr-3">
                        <Users className="w-4 h-4 text-blue-600" />
                      </div>
                      <span>{job.type}</span>
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="bg-blue-100 p-2 rounded-lg mr-3">
                        <MapPin className="w-4 h-4 text-blue-600" />
                      </div>
                      <span>{job.location}</span>
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="bg-blue-100 p-2 rounded-lg mr-3">
                        <DollarSign className="w-4 h-4 text-blue-600" />
                      </div>
                      <span>{job.salary}</span>
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="bg-blue-100 p-2 rounded-lg mr-3">
                        <Award className="w-4 h-4 text-blue-600" />
                      </div>
                      <span>{job.experience} experience</span>
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="bg-blue-100 p-2 rounded-lg mr-3">
                        <Calendar className="w-4 h-4 text-blue-600" />
                      </div>
                      <span>Apply by: {new Date(job.deadline).toLocaleDateString()}</span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Join Us?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional Growth</h3>
              <p className="text-gray-600">Continuous learning opportunities and career advancement paths</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <DollarSign className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Competitive Benefits</h3>
              <p className="text-gray-600">Comprehensive health insurance and retirement plans</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Supportive Team</h3>
              <p className="text-gray-600">Collaborative work environment with experienced professionals</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Nationwide Impact</h3>
              <p className="text-gray-600">Make a real difference in rural communities across Sri Lanka</p>
            </div>
          </div>
        </div>
      </div>

      {/* Application Process */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Application Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full text-lg font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Submit Application</h3>
              <p className="text-gray-600">Complete our online application form with your details</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full text-lg font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Interview Process</h3>
              <p className="text-gray-600">Participate in interviews with our hiring team</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full text-lg font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Join Our Team</h3>
              <p className="text-gray-600">Receive an offer and begin your journey with us</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Ministry of Rural Development</h3>
              <p className="text-gray-300">
                Social Security and Community Empowerment
              </p>
              <p className="text-gray-400 mt-2">
                Dedicated to serving rural communities across Sri Lanka
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
              <p className="text-gray-300">Email: hr@ministry.gov.lk</p>
              <p className="text-gray-300">Phone: +94 11 234 5700</p>
              <p className="text-gray-300">Address: 123 Government Complex, Colombo, Sri Lanka</p>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Ministry of Rural Development, Social Security and Community Empowerment
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HiringPage;