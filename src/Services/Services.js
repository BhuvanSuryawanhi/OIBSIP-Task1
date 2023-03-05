import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import webdesign from '../images/webdesign.png'
import appdesign from '../images/appdesign.png'
import marketing from '../images/marketing.png'
import './services.css';
export const Services = () => {
  return (
    <section id='services'>
    <div className='container text-center'>
    <h1 className='title'>What we serve?</h1>
    <div className='row text-center'>
    <div className='col-md-4 services'>
    <img src={webdesign} className='service-img' style={{height: '280px'}}/>
    <h2>Web Development</h2>
    <p>Designing of frontend and backend for development of fully responsive webite.</p>
    </div>

    <div className='col-md-4 services'>
    <img src={appdesign} className='service-img'  style={{width: '344px'}}/>
    <h2>App Development</h2>
    <p>Development of user-friendly mobile app using new technology for frontend and backend.</p>
    </div>

    <div className='col-md-4 services'>
    <img src={marketing} className='service-img' style={{height: '280px'}}/>
    <h2> Marketing</h2>
    <p>Marketing is the key to success for business. We are providing some best strategies to grow and rule at top in competitive world.</p>
    </div>
    </div>
    <button className='btn btn-primary'>All Services</button>
    </div>
    </section>
  )
}
