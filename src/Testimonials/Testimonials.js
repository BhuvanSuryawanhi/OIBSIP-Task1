import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import c1 from '../images/c1.jpg'
import c2 from '../images/c2.jpg'
import c3 from '../images/c3.jpg'
import './testi.css';
export const Testimonials = () => {
  return (
    <section id='testimonials'>
    <div className='container'>
    <h1 className='title text-center'>What Clients Say?</h1>
    <div className='row offset-2'>
        <div className='col-md-5 testimonials'>
            <p>Love the honesty and sincerity of this company. It was the best decision to collab with GC Infotech.</p>
            <img src={c1}/>
            <p className='user-details'><b>Mohit Mishra</b><p>Co-founder at BSInfotech</p></p>
        </div>

        <div className='col-md-5 testimonials'>
            <p>Love the honesty and sincerity of this company. It was the best decision to collab with GC Infotech.</p>
            <img src={c2}/>
            <p className='user-details'><b>Arjun Roy</b><p>Co-founder at BSInfotech</p></p>
        </div>
    </div>
    
    

    </div>

    </section>
  )
}
