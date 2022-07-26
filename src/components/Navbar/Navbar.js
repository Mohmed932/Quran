import React from 'react'
import './Navbar.css'
import {NavLink} from 'react-router-dom'

const Navbar = ({setsearch}) => {
  return (
    <div className='Navbar'>
      <div className='Search'>
         <i class="fa-solid fa-magnifying-glass"></i>
         <input dir='rtl' type='text' placeholder='ماذا تريد أن تقرأ؟' onChange={(e)=>setsearch(e.target.value)}/>
      </div>
      <div className='items'>
         <NavLink className='itemsaa' to='/'>السور</NavLink>
      </div>
    </div>
  )
}

export default Navbar