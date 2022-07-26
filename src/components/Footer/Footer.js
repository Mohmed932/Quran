import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div className='Footer'>
       <div>
         <h1>هذا العمل صدقه علي المسلمين</h1>
       </div>
       <div className='Footer-content'>
          <div className='socil'>
             <Link to='https://www.facebook.com/Anamohmed135'><i class="fa fa-brands fa-facebook-square"></i></Link>
             <Link to='https://www.linkedin.com/in/mohmedmahmoudfouad'><i class="fa fa-brands fa-linkedin"></i></Link>
             <Link to='https://twitter.com/Anamohmed00?t=4Rd2VX0oJqd3EKIfPlCKsA&s=08'><i class="fa fa-brands fa-twitter"></i></Link>
             <Link to='http://wa.me/+201157068530'><i class="fa fa-brands fa-whatsapp-square"></i></Link>
             <Link to='https://www.facebook.c'><i class="fa fa-solid fa-envelope"></i></Link>
          </div>
       </div>
    </div>
  )
}

export default Footer