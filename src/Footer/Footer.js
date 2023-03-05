import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './footer.css';
import { SocialIcon } from 'react-social-icons';
// import img from '../images/wave.png'
import img1 from '../images/logo.png'
import { BiAtom } from "react-icons/bi";
import { AiOutlineEnvironment } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillGoogleCircle } from "react-icons/ai";

export const Footer = () => {
 
    return (

        <div id='contact'>
          
          <section id='social-media'>
          <div className='container text-center'>
          <p>FIND US ON SOCIAL MEDIA</p>
          <div className='social-icons row'>
          <SocialIcon url='https://instagram.com'></SocialIcon>
          <SocialIcon url='https://facebook.com'></SocialIcon>
          <SocialIcon url='https://github.com'></SocialIcon>
          <SocialIcon url='https://reddit.com'></SocialIcon>
          <SocialIcon url='https://whatsapp.com'></SocialIcon>
          <SocialIcon url='https://twitter.com'></SocialIcon>
        
          </div>

          </div>

          </section>

          <section id='footer'>
            <div className='row' style={{marginRight:'0px'}}>
            {/* <img src={img} className='footer-img'/> */}
            <div className='col-md-4 footer-box offset-1' style={{width: '323px',position: 'relative',
    bottom: '48px'}}>
            <img src={img1} style={{width:'194px'}}/>
                <p>Give us a chance to serve you and we will try our best to meet your expectations. We build the future!</p>
                

            </div>
            <div className='col-md-4 footer-max' style={{marginLeft: '143px',
    width: '211px'}}>
            <p>Contact Us</p>
            
            <AiOutlineEnvironment></AiOutlineEnvironment><span style={{margin: '10px' }}>Mumbai, India</span><br></br>
            <BsFillTelephoneFill></BsFillTelephoneFill><span style={{margin: '10px'}}>8745135887</span><br></br>
            <AiFillGoogleCircle></AiFillGoogleCircle><span style={{margin: '10px'}}>bsinfo@gmail.com</span>
            </div>
            <div className='col-md-4 footer-box' style={{marginLeft: '215px',
    marginTop: '14px'}} >
            <p>Want to know more?</p>
            <input type={'email'} className='form-control' placeholder='Email'></input>
            <button className='btn btn-primary' style={{marginTop: '16px'}}>Submit</button>

            </div>

            <hr/>
            <p className='copyright text-center'>Website designed by Bhuvan Suryawanshi</p>

           
            </div>
        

          </section>

          </div>
        
      );
  
}
