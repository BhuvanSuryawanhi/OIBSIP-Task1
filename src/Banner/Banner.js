import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './banner.css';
import bannerimg from '../images/bannerimg.png'
import wave from '../images/wave.png'
export const Banner = () => {
  return (
    <section id='banner'>
        <div className='container'>
        <div className='row'>
        <div className='col-md-6'>
        <p className='cmtitle'>Best IT Service Company</p>
        <p>BS Infotech is a graceful and lean product development and IT service provider. We develop as well as co-develop mobile applications, web portals and analytics solutions. We have built many successful products for more than 50 Companies, as well as for new startups.</p>
        </div>
        <div className='col-md-6 text-center'>
        <img src={bannerimg} className='img-fluid'></img>

        </div>
        </div>
        </div>
        <img src={wave} className='img-bottom' id='wave'/>

    </section>
  )
}
