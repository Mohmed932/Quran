import React, { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Alsuwr from './pages/Alsuwr/Alsuwr'
import DatalesAlsuwr from './pages/DatalesAlsuwr/DatalesAlsuwr'
import NotFouand from './pages/NotFouand/NotFouand'
import Footer from './components/Footer/Footer'

const App = () => {
  const [search,setsearch] = useState('');
  return (
    <div className='App'>
       <Router>
          <Navbar setsearch={setsearch}/>
           <Routes>
              <Route path='*' element={<NotFouand/>}/>
              <Route path='/' element={<Alsuwr search={search}/>}/>
              <Route path='/datalies/:id' element={<DatalesAlsuwr/>}/>
           </Routes>
           <Footer/>
       </Router>
    </div>
  )
}

export default App