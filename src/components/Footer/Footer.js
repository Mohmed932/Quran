import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='Footer'>
       <div>
         <h1>هذا العمل صدقه علي المسلمين</h1>
       </div>
       <div className='Footer-content'>
          <div className='socil'>
             <a href='https://www.facebook.com/Anamohmed135'><i class="fa fa-brands fa-facebook-square"></i></a>
             <a href='https://www.linkedin.com/in/mohmedmahmoudfouad'><i class="fa fa-brands fa-linkedin"></i></a>
             <a href='https://twitter.com/Anamohmed00?t=4Rd2VX0oJqd3EKIfPlCKsA&s=08'><i class="fa fa-brands fa-twitter"></i></a>
             <a href='http://wa.me/+201157068530'><i class="fa fa-brands fa-whatsapp-square"></i></a>
          </div>
       </div>
    </div>
  )
}

export default Footer