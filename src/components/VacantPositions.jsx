// components/VacantPositions.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Briefcase, Building, FileText, Calendar, Phone, Mail } from 'lucide-react';
import logo from '../assets/logo.png';

const VacantPositions = () => {
  // Sample vacant positions data
  const vacantPositions = [
    {
      id: "vacant-001",
      position: "Director - International Relations",
      department: "International Relations Division",
      grade: "SL-6",
      requirements: "Master's degree in International Relations, Political Science, or related field. Minimum 8 years of experience.",
      deadline: "2025-09-30",
    },
    {
      id: "vacant-002",
      position: "Deputy Director - Monitoring & Evaluation",
      department: "M&E Division",
      grade: "SL-7",
      requirements: "Bachelor's degree in Statistics, Economics, or related field. Minimum 5 years of experience in monitoring and evaluation.",
      deadline: "2025-10-15",
    },
    {
      id: "vacant-003",
      position: "Assistant Director - Rural Infrastructure",
      department: "Rural Development Division",
      grade: "SL-8",
      requirements: "Bachelor's degree in Civil Engineering or related field. Minimum 3 years of experience in infrastructure projects.",
      deadline: "2025-09-25",
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-lg z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <img
                  src={logo}
                  alt="Ministry Logo"
                  className="h-14 w-12"
                />
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900">
                  Ministry of Rural Development,
                </h1>
                <p className="text-sm text-gray-600 font-medium">
                  Social Security and Community Empowerment
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Organization Chart
          </Link>

          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Vacant Positions
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore career opportunities at the Ministry of Rural Development, Social Security and Community Empowerment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vacantPositions.map((position) => (
              <div key={position.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-l-4 border-orange-500">
                <div className="flex flex-col h-full">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-4">
                      <Briefcase className="w-5 h-5 text-orange-500" />
                      <span className="text-sm font-semibold text-orange-700 bg-orange-100 px-3 py-1 rounded-full">
                        Vacant Position
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{position.position}</h3>
                    
                    <div className="space-y-3 text-gray-700 mb-6">
                      <div className="flex items-center gap-2">
                        <Building className="w-4 h-4 text-gray-500" />
                        <span className="text-sm">{position.department}</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-gray-500" />
                        <span className="text-sm">Grade: {position.grade}</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gray-500" />
                        <span className="text-sm">Apply by: {new Date(position.deadline).toLocaleDateString()}</span>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-2">Requirements:</h4>
                      <p className="text-sm text-gray-600">{position.requirements}</p>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Information */}
          <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">How to Apply</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-gray-800 mb-4">Application Process</h3>
                <ol className="list-decimal list-inside space-y-3 text-gray-700">
                  <li>Download the application form from our website</li>
                  <li>Complete the application form with accurate information</li>
                  <li>Attach copies of all required documents</li>
                  <li>Submit your application before the deadline</li>
                  <li>Shortlisted candidates will be contacted for interviews</li>
                </ol>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-4">Contact Information</h3>
                <div className="space-y-4 text-gray-700">
                  <div className="flex items-start gap-3">
                    <Building className="w-5 h-5 text-blue-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Human Resources Division</p>
                      <p>Ministry of Rural Development, Social Security and Community Empowerment</p>
                      <p>123 Government Complex, Colombo, Sri Lanka</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-blue-500" />
                    <span>+94 11 234 5700</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-blue-500" />
                    <span>hr@ministry.gov.lk</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-300">
            © 2025 Ministry of Rural Development, Social Security and Community Empowerment
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Serving the rural communities of Sri Lanka
          </p>
        </div>
      </footer>
    </div>
  );
};

export default VacantPositions;