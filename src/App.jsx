// App.jsx
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MinistryOrgChart from './components/MinistryOrgChart'
import StaffDetail from './components/StaffDetail'
import VacantPositions from './components/VacantPositions'
import HiringPage from './components/HiringPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MinistryOrgChart />} />
        <Route path="/staff/:staffName" element={<StaffDetail />} />
        <Route path="/vacant-positions" element={<VacantPositions />} />
        <Route path="/hiring" element={<HiringPage />} />
      </Routes>
    </Router>
  )
}

export default App