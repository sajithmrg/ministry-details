import React, { useState } from 'react';
import { Search, Phone, User, GraduationCap, Building } from 'lucide-react';
import secImg from './assets/sampath.jpeg';
import logo from './assets/logo.png';
import nalika from './assets/nalika.png';
import radha from './assets/radha.png';

const MinistryOrgChart = () => {
  // Sample data - you can replace with actual data
  const [staffData] = useState({
    secretary: {
      name: "Sampath Mantrinayake",
      position: "Secretary",
      department: "Ministry Office",
      education: "Msc Law",
      phone: "+94 11 234 5670",
      image: secImg
    },
    additionalSecretaries: [
      {
        name: "Mrs. Radha Nanayakkara",
        position: "Additional Secretary",
        department: "Admin",
        education: "MA Sociology",
        phone: "+94 11 234 5671",
        image: radha
      },
      {
        name: "Mrs. Nalika Piyasena",
        position: "Additional Secretary",
        department: "Rural Development Division",
        education: "Master of Arts",
        phone: "+94 11 234 5681",
        image: nalika
      },
      {
        name: "Mrs. Hema Perera",
        position: "Additional Secretary",
        department: "Social Security Division",
        education: "MA in Social Policy",
        phone: "+94 11 234 5682",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
      },
      {
        name: "Mr. Gamini",
        position: "Additional Secretary",
        department: "Community Empowerment Division",
        education: "MSc in Community Development",
        phone: "+94 11 234 5683",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
      }
    ],
    cfo: {
      name: "Mrs. Lakmini",
      position: "Chief Financial Officer",
      department: "Finance Division",
      education: "MBA Finance, ACCA",
      phone: "+94 11 234 5672",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    directorGenerals: [
      {
        name: "Mr. Sisira Kumara",
        position: "Director General - Operations",
        department: "Operations Division",
        education: "MSc in Management",
        phone: "+94 11 234 5673",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
      },
      {
        name: "Mr. Planning",
        position: "Director General - Administration",
        department: "Administration Division",
        education: "MBA in Public Administration",
        phone: "+94 11 234 5684",
        image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=150&h=150&fit=crop&crop=face"
      }
    ],
    directors: [
      {
        name: "Ms. Kavitha Jayawardena",
        position: "Director - Rural Development",
        department: "Rural Development",
        education: "MSc in Rural Development",
        phone: "+94 11 234 5674",
        image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face"
      },
      {
        name: "Mr. Pradeep Kumara",
        position: "Director - Social Security",
        department: "Social Security",
        education: "MA in Social Work",
        phone: "+94 11 234 5675",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
      },
      {
        name: "Ms. Chamari De Silva",
        position: "Director - Accounts",
        department: "Accounts Division",
        education: "ACCA, BSc Accounting",
        phone: "+94 11 234 5676",
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face"
      },
      {
        name: "Mr. Ruwan Perera",
        position: "Director - Planning",
        department: "Planning Division",
        education: "MSc in Development Planning",
        phone: "+94 11 234 5685",
        image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=150&h=150&fit=crop&crop=face"
      },
      {
        name: "Ms. Dilani Weerasinghe",
        position: "Director - Community Empowerment",
        department: "Community Empowerment",
        education: "MSc in Community Development",
        phone: "+94 11 234 5686",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
      },
      {
        name: "Mr. Sampath Fernando",
        position: "Director - Human Resources",
        department: "Human Resources",
        education: "MSc in Human Resource Management",
        phone: "+94 11 234 5687",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
      },
      {
        name: "Ms. Nimesha Rathnayake",
        position: "Director - Information Technology",
        department: "IT Division",
        education: "MSc in Information Technology",
        phone: "+94 11 234 5688",
        image: "https://images.unsplash.com/photo-1494790108755-2616c6d4e0fa?w=150&h=150&fit=crop&crop=face"
      },
      {
        name: "Mr. Buddhika Silva",
        position: "Director - Legal Affairs",
        department: "Legal Division",
        education: "LLB, Attorney-at-Law",
        phone: "+94 11 234 5689",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
      },
      {
        name: "Ms. Sachini Mendis",
        position: "Director - Monitoring & Evaluation",
        department: "M&E Division",
        education: "MSc in Statistics",
        phone: "+94 11 234 5690",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
      },
      {
        name: "Mr. Lasantha Wickramasinghe",
        position: "Director - Internal Audit",
        department: "Internal Audit",
        education: "MSc in Auditing, ACCA",
        phone: "+94 11 234 5691",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face"
      },
      {
        name: "Ms. Chandrika Bandara",
        position: "Director - Public Relations",
        department: "Public Relations",
        education: "MA in Mass Communication",
        phone: "+94 11 234 5692",
        image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=150&h=150&fit=crop&crop=face"
      },
      {
        name: "Mr. Gayan Jayasuriya",
        position: "Director - Procurement",
        department: "Procurement Division",
        education: "MSc in Supply Chain Management",
        phone: "+94 11 234 5693",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face"
      }
    ],
    
    chiefAccountant: {
      name: "Ms. Malini Jayawardena",
      position: "Chief Accountant",
      department: "Finance Division",
      education: "ACCA, MSc in Finance",
      phone: "+94 11 234 5694",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face"
    },
    chiefInternalAuditor: {
      name: "Mr. Roshan Fernando",
      position: "Chief Internal Auditor",
      department: "Internal Audit Division",
      education: "ACCA, MSc in Auditing",
      phone: "+94 11 234 5695",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    deputyDirectors: [
      {
        name: "Mr. Nuwan Rathnayake",
        position: "Deputy Director - Community Programs",
        department: "Community Empowerment",
        education: "MSc in Community Development",
        phone: "+94 11 234 5677",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face"
      },
      {
        name: "Ms. Sandya Wickramasinghe",
        position: "Deputy Director - Planning",
        department: "Planning Division",
        education: "MSc in Development Planning",
        phone: "+94 11 234 5678",
        image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=150&h=150&fit=crop&crop=face"
      },
      {
        name: "Mr. Upul Rathnayake",
        position: "Additional Director - Rural Infrastructure",
        department: "Rural Development",
        education: "BSc in Civil Engineering",
        phone: "+94 11 234 5696",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
      },
      {
        name: "Ms. Kumudini Silva",
        position: "Deputy Director - Social Welfare",
        department: "Social Security",
        education: "MA in Social Work",
        phone: "+94 11 234 5697",
        image: "https://images.unsplash.com/photo-1494790108755-2616c6d4e0fa?w=150&h=150&fit=crop&crop=face"
      },
      {
        name: "Mr. Janaka Perera",
        position: "Additional Director - Financial Management",
        department: "Finance Division",
        education: "MBA Finance",
        phone: "+94 11 234 5698",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
      },
      {
        name: "Ms. Sujani Bandara",
        position: "Deputy Director - Human Resources",
        department: "Human Resources",
        education: "MSc in HRM",
        phone: "+94 11 234 5699",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
      },
      {
        name: "Mr. Chathura Jayasuriya",
        position: "Additional Director - IT Operations",
        department: "IT Division",
        education: "BSc in Computer Science",
        phone: "+94 11 234 5700",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face"
      },
      {
        name: "Ms. Amali Wickremasinghe",
        position: "Deputy Director - Legal Services",
        department: "Legal Division",
        education: "LLB, Attorney-at-Law",
        phone: "+94 11 234 5701",
        image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face"
      },
      {
        name: "Mr. Sisira Fernando",
        position: "Additional Director - Project Management",
        department: "Planning Division",
        education: "MSc in Project Management",
        phone: "+94 11 234 5702",
        image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=150&h=150&fit=crop&crop=face"
      },
      {
        name: "Ms. Ruwani Dias",
        position: "Deputy Director - Public Relations",
        department: "Public Relations",
        education: "MA in Communication",
        phone: "+94 11 234 5703",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
      }
    ],
    // assistantDirectors: [
    //   {
    //     name: "Mr. Thilina Bandara",
    //     position: "Assistant Director - Field Operations",
    //     department: "Field Operations",
    //     education: "BSc in Management",
    //     phone: "+94 11 234 5679",
    //     image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face"
    //   },
    //   {
    //     name: "Ms. Ishara Mendis",
    //     position: "Assistant Director - Monitoring",
    //     department: "Monitoring & Evaluation",
    //     education: "BSc in Statistics",
    //     phone: "+94 11 234 5680",
    //     image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
    //   }
    // ],
    accountants: [
      {
        name: "Mr. Dinesh Jayasuriya",
        position: "Senior Accountant",
        department: "Accounts Division",
        education: "BSc in Accounting, AAT",
        phone: "+94 11 234 5681",
        image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=150&h=150&fit=crop&crop=face"
      },
      {
        name: "Ms. Priyanka Wijesinghe",
        position: "Accountant",
        department: "Accounts Division",
        education: "BSc in Accounting, CIMA",
        phone: "+94 11 234 5704",
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face"
      }
    ]
  });

  const [searchTerm, setSearchTerm] = useState('');

  // Flatten all staff for search
  const allStaff = [
    staffData.secretary,
    ...staffData.additionalSecretaries,
    staffData.cfo,
    ...staffData.directorGenerals,
    ...staffData.directors,
    staffData.chiefAccountant,
    staffData.chiefInternalAuditor,
    ...staffData.deputyDirectors,
    // ...staffData.assistantDirectors,
    ...staffData.accountants
  ];

  // Filter staff based on search
  const filteredStaff = allStaff.filter(person =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    person.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
    person.position.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const StaffCard = ({ person, isSecretary = false }) => (
    <div className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-l-4 ${
      isSecretary ? 'border-blue-600 bg-gradient-to-br from-blue-50 to-white' : 'border-green-500'
    }`}>
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
          <div className="flex items-center justify-center gap-2">
            <GraduationCap className="w-4 h-4" />
            <span>{person.education}</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Phone className="w-4 h-4" />
            <span>{person.phone}</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Fixed Navigation Bar */}
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

            {/* Contact and Search */}
            <div className="flex items-center space-x-6">
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

              {/* Third Level - CFO */}
              <div>
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
                  Chief Financial Officer (CFO)
                </h2>
                <div className="flex justify-center">
                  <div className="w-80">
                    <StaffCard person={staffData.cfo} />
                  </div>
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
                  Deputy Directors / Additional Directors
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
                  {staffData.deputyDirectors.map((deputy, index) => (
                    <StaffCard key={index} person={deputy} />
                  ))}
                </div>
              </div>

              {/* Assistant Directors */}
              {/* <div>
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
                  Assistant Directors
                </h2>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  {staffData.assistantDirectors.map((assistant, index) => (
                    <StaffCard key={index} person={assistant} />
                  ))}
                </div> 
              </div> */}

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