import React from 'react'
import Homepage from './components/Homepage'
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AttorneyHome from './components/AttorneyHome';

export default function App() {
  return (
    <div className='container'>
      <Router>
        <Routes>
          <Route exact path='/' element={<Homepage />} />
          <Route exact path='/attorney' element={<AttorneyHome />} />
        </Routes>
      </Router>
    </div>
  )
}
