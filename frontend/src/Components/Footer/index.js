import React from 'react'

import image from "../Navbar/favicon.svg";

const Footer = () => {
  return (
    <footer id="myFooter" style={{background: 'rgb(13,13,14)'}}>
    <div className="container-fluid text-center" style={{background: '#0a0909'}}>
        <div className="row text-center text-center py-4">
            <div className="col-12 col-sm-5 col-md-5 col-xxl-3">
                <img src={image} alt='Website Logo'  className="img-fluid" style={{  maxWidth: '100px', height: 'auto'}}/>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-xxl-2 py-3">
                <h5 className='text-white'>Our Company</h5>
                <ul className="list-unstyled">
                    <li><a className="text-white text-decoration-none" href="#">Home</a></li>
                    <li><a className="text-white text-decoration-none" href="#">&nbsp;Services</a></li>
                    <li><a className="text-white text-decoration-none" href="#">Doctors</a></li>
                </ul>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-xxl-2 py-3">
                <ul className="list-unstyled" style={{marginTop: '35px'}}>
                    <li><a className="text-white text-decoration-none" href="#">Appointments</a></li>
                    <li><a className="text-white text-decoration-none" href="/login">Login</a></li>
                    <li><a className="text-white text-decoration-none" href="#">Signup</a></li>
                </ul>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-xxl-4 text-center social-networks py-3">
                      <div>
                      <a className="text-white text-decoration-none px-3" href="#"><i className="fa fa-facebook" style={{ color: 'rgb(255,255,255)' }}></i></a>
                      <a className="text-white text-decoration-none px-3" href="#"><i className="fa fa-twitter" style={{ color: 'rgb(255,255,255)' }}></i></a>
                      <a className="text-white text-decoration-none px-3" href="#"><i className="fa fa-google-plus" style={{ color: 'rgb(255,255,255)' }}></i></a>
                      <a className="text-white text-decoration-none px-3" href="#"><i className="fa fa-linkedin" style={{ color: 'rgb(255,255,255)' }}></i></a>
                      </div>
                      <button className="btn btn-primary btn-outline-none" style={{ marginTop: '20px', background: 'rgb(249,248,248)', color: 'rgb(7,7,7)' }} type="button">Contact us</button>
            </div>
        </div>
        <div className="row footer-copyright py-4">
            <div className="col py-4" style={{background: '#141313'}}>
                <p className='text-white'>© 2016 Copyright KHP Doctors ~ Designed By&nbsp;Imran Ahmed</p>
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer
