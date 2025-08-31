// components/StaffDetail.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Phone, User, GraduationCap, Building, ArrowLeft, Mail, Clock } from 'lucide-react';

import logo from '../assets/logo.png';
import { findStaffByNameSlug } from '../data/staffData';

const StaffDetail = () => {
  const { staffName } = useParams();
  
  // Find the staff member by name slug
  const staffMember = findStaffByNameSlug(staffName);

  if (!staffMember) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Staff member not found</h2>
          <Link to="/" className="text-blue-600 hover:underline">
            Return to organization chart
          </Link>
        </div>
      </div>
    );
  }

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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Organization Chart
          </Link>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0 p-8 flex items-center justify-center">
                <div className="relative">
                  <img
                    src={staffMember.image}
                    alt={staffMember.name}
                    className="w-48 h-48 rounded-full object-cover border-4 border-blue-100 shadow-lg"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-blue-500 rounded-full p-2">
                    <User className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-8 flex-1">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">{staffMember.name}</h1>
                <p className="text-xl font-semibold text-blue-600 mb-6">{staffMember.position}</p>
                
                <div className="space-y-4 text-gray-700">
                  <div className="flex items-center gap-3">
                    <Building className="w-5 h-5 text-blue-500" />
                    <span className="text-lg">{staffMember.department}</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <GraduationCap className="w-5 h-5 text-blue-500" />
                    <span className="text-lg">{staffMember.education}</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-blue-500" />
                    <span className="text-lg">{staffMember.phone}</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-blue-500" />
                    <span className="text-lg">{staffMember.email}</span>
                  </div>
                   <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-blue-500" />
                    <span className="text-lg">{staffMember.joiningDate}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Information Section */}
          <div className="mt-8 bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">About {staffMember.name}</h2>
            <p className="text-gray-700 leading-relaxed">
              {staffMember.name} serves as the {staffMember.position} in the {staffMember.department} at the Ministry of Rural Development, Social Security and Community Empowerment. With a background in {staffMember.education}, {staffMember.name.split(' ')[0]} brings extensive experience and expertise to their role, contributing significantly to the ministry's mission of serving rural communities across Sri Lanka.
            </p>
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

export default StaffDetail;