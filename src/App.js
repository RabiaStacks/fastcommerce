
import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import HomePage from './pages/home/HomePage';
import Blogs from './pages/blogs/Blogs';
import Footer from './components/footer/Footer';
import Contacts from './pages/contacts/Contacts';
import EventsPage from './pages/eventpage/EventsPage';


function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/events' element={<EventsPage/>} />
        
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/contact' element={<Contacts />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App

