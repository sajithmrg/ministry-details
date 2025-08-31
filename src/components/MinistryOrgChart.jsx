// components/MinistryOrgChart.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Phone, User, GraduationCap, Building,Clock, Mail } from 'lucide-react';

import logo from '../assets/logo.png';
import { staffData, getAllStaff } from '../data/staffData';

const MinistryOrgChart = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Get all staff for search
  const allStaff = getAllStaff();

  // Filter staff based on search
  const filteredStaff = allStaff.filter(person =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    person.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
    person.position.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleStaffClick = (person) => {
    // Convert name to URL-friendly format
    const nameSlug = person.name.toLowerCase().replace(/\s+/g, '-');
    navigate(`/staff/${nameSlug}`);
  };

  const StaffCard = ({ person, isSecretary = false }) => (
    <div 
      className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-l-4 cursor-pointer ${
        isSecretary ? 'border-blue-600 bg-gradient-to-br from-blue-50 to-white' : 'border-green-500'
      }`}
      onClick={() => handleStaffClick(person)}
    >
      <div className="flex flex-col items-center text-center">
        <div className="relative mb-4">
          <img
            src={person.image}
            alt={person.name}
            className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
          />
          <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-2">
            <User className="w-4 h-4 text-white" />
          </div>
        </div>
        <h3 className="text-lg font-bold text-gray-800 mb-2">{person.name}</h3>
        <p className={`text-sm font-semibold mb-2 px-3 py-1 rounded-full ${
          isSecretary ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
        }`}>
          {person.position}
        </p>
        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-center justify-center gap-2">
            <Building className="w-4 h-4" />
            <span>{person.department}</span>
          </div>
          {/* <div className="flex items-center justify-center gap-2">
            <GraduationCap className="w-4 h-4" />
            <span>{person.education}</span>
          </div> */}
          <div className="flex items-center justify-center gap-2">
            <Phone className="w-4 h-4" />
            <span>{person.phone}</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Mail className="w-4 h-4" />
            <span>{person.email}</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{person.joiningDate}</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Responsive Navigation Bar */}
      <nav className="fixed top-0 w-full bg-white shadow-lg z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo and Ministry Info */}
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

            {/* Mobile menu button */}
            <div className="flex md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                aria-controls="mobile-menu"
                aria-expanded={mobileMenuOpen}
                onClick={() => setMobileMenuOpen((open) => !open)}
              >
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>

            {/* Contact and Search (Desktop) */}
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center text-gray-700">
                <Phone className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">+94 112 887 349</span>
              </div>
              {/* Search Bar */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search by name or department..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm w-64"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden" id="mobile-menu">
            <div className="px-4 pt-4 pb-3 space-y-4 bg-white border-t border-gray-200 shadow-lg">
              <div className="flex items-center text-gray-700">
                <Phone className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">+94 112 887 349</span>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search by name or department..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm w-full"
                />
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {searchTerm ? (
            // Search Results
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Search Results for "{searchTerm}"
              </h2>
              {filteredStaff.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredStaff.map((person, index) => (
                    <StaffCard key={index} person={person} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">No results found for your search.</p>
                </div>
              )}
            </div>
          ) : (
            // Organizational Chart
            <div className="space-y-12">
              {/* Ministry Title */}
              <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  Organizational Chart
                </h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Ministry of Rural Development, Social Security and Community Empowerment
                </p>
              </div>

              {/* Secretary - Top Level */}
              <div className="flex justify-center">
                <div className="w-80">
                  <StaffCard person={staffData.secretary} isSecretary={true} />
                </div>
              </div>

              {/* Second Level - Additional Secretaries */}
              <div>
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
                  Additional Secretaries
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                  {staffData.additionalSecretaries.map((secretary, index) => (
                    <StaffCard key={index} person={secretary} />
                  ))}
                </div>
              </div>
              {/* Fourth Level - Director Generals */}
              <div>
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
                  Director General
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  {staffData.directorGenerals.map((dg, index) => (
                    <StaffCard key={index} person={dg} />
                  ))}
                </div>
              </div>

              {/* Third Level - CFO */}
              {/* <div>
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
                  Chief Financial Officer (CFO)
                </h2>
                <div className="flex justify-center">
                  <div className="w-80">
                    <StaffCard person={staffData.cfo} />
                  </div>
                </div>
              </div> */}

              {/* Directors */}
              <div>
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
                  Directors
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
                  {staffData.directors.map((director, index) => (
                    <StaffCard key={index} person={director} />
                  ))}
                </div>
              </div>

              {/* Chief Accountant */}
              <div>
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
                  Chief Accountant
                </h2>
                <div className="flex justify-center">
                  <div className="w-80">
                    <StaffCard person={staffData.chiefAccountant} />
                  </div>
                </div>
              </div>

              {/* Chief Internal Auditor */}
              <div>
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
                  Chief Internal Auditor
                </h2>
                <div className="flex justify-center">
                  <div className="w-80">
                    <StaffCard person={staffData.chiefInternalAuditor} />
                  </div>
                </div>
              </div>

              {/* Deputy Directors / Additional Directors */}
              <div>
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
                  Deputy Directors / Assistant Directors
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
                  {staffData.deputyDirectors.map((deputy, index) => (
                    <StaffCard key={index} person={deputy} />
                  ))}
                </div>
              </div>

              {/* Accountants */}
              <div>
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
                  Accountants
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  {staffData.accountants.map((accountant, index) => (
                    <StaffCard key={index} person={accountant} />
                  ))}
                </div>
              </div>
            </div>
          )}
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

export default MinistryOrgChart;