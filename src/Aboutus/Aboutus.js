import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import about from '../images/about1.png'
import './about.css';
export const Aboutus = () => {
  return (
    
    <div className='container' id='About-us'>
    <h1 className='about-title text-center'>Why Choose Us?</h1>
    <div className='row'>
    <div className='col-md-6'>
        <ul style={{marginTop: '45px'}}>
            <li>Understanding of clients</li>
            <li>Business with honesty</li>
            <li>Experts of high caliber</li>
            <li>We deliver on time</li>
            <li>We protect your online reputation</li>
            <li>Building of secure sites/apps</li>
            <li>We care for our clients</li>
           
        </ul>
    </div>
    <div className='col-md-6'>
        <img src={about} className='image-fluid' style={{height:'343px'}}/>
    </div>
    </div>

    </div>
  )
}
