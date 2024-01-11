import React, { useCallback, useEffect, useState } from 'react'
import HeroSection from '../HeroSection';
import './style.css'
import { Navbar } from '..';
import axios from 'axios';
import useUsers from '../../Hooks/useUsers';
import { useAuthProvider } from '../../Providers';
import { useNavigate } from 'react-router-dom';

const MakeAppointments = () => {
  const [doctors, setDoctors] = useState([]);

  const navigate = useNavigate();

  const { handleAppointment } = useUsers();
  const { cookies } = useAuthProvider();
  useEffect(async () => {
    await axios.get('http://localhost:3184/getUsers').then((res) => {
      setDoctors(res.data);
    })
  
  }, [])

  const handleAppointments = useCallback(async(e) => {
    e.preventDefault();

    const appointment = {
      name: e.target[0].value,
      // email: { type: String, required: true, unique: true, match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
      email: e.target[1].value,
      phone: e.target[2].value,
      date: e.target[3].value,
      department: e.target[4].value,
      doctor: e.target[5].value,
      message: e.target[6].value,
      user: cookies.get('auth'),
    }
    // console.log(appointment)
    await handleAppointment(appointment);
    navigate('/apointments')
    
  },[handleAppointment,navigate])

  return (
    <div>
      <Navbar/>
       <HeroSection />
    <section id="appointment" className="appointment section-bg" style={{marginBottom:'4rem', marginTop: '4rem'}}>
      <div className="container">

        <div className="section-title">
          <h2>Make an Appointment</h2>
        </div>

        <form className="php-email-form" onSubmit={handleAppointments}>
          <div className="row">
            <div className="col-md-4 form-group">
              <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" required/>
              <div className="validate"></div>
            </div>
            <div className="col-md-4 form-group mt-3 mt-md-0">
              <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" required/>
              <div className="validate"></div>
            </div>
            <div className="col-md-4 form-group mt-3 mt-md-0">
              <input type="tel" className="form-control" name="phone" id="phone" placeholder="Your Phone" data-rule="minlen:4" data-msg="Please enter at least 4 chars" required/>
              <div className="validate"></div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 form-group mt-3">
              <input type="datetime-local" name="date" className="form-control input input-tr" id="date" placeholder="Appointment Date" data-rule="minlen:4" data-msg="Please enter at least 4 chars" required/>
              <div className="validate"></div>
            </div>
            <div className="col-md-4 form-group mt-3">
              <select name="department" id="department" className="form-select" required>
                <option value="">Select Department</option>
                <option value="Cardiology">Cardiology</option>
                <option value="Neurolog">Neurology</option>
                <option value="Hepatology">Hepatology</option>
                <option value="Pediatrics">Pediatrics</option>
                <option value="Eye Care">Eye Care</option>
                  
                  
              </select>
              <div className="validate"></div>
            </div>
            <div className="col-md-4 form-group mt-3">
              <select name="doctor" id="doctor" className="form-select" required>
                  <option value="">Select Doctor</option>
                  {
                    doctors?.length > 0 ?(  doctors.map((value, index) => {
                      return <option value={value.displayName} key={index}>{value.displayName}</option>
                    })):(
                      <h1> No Doctors</h1>
                    )
                  
                  }
              </select>
              <div className="validate"></div>
            </div>
          </div>

          <div className="form-group mt-3">
            <textarea className="form-control input modern-form__form-control--textarea" name="message" style={{resize:'none'}} rows={'5'} placeholder="Message (Optional)"></textarea>
            <div className="validate"></div>
          </div>
          <div className="mb-3">
            <div className="loading">Loading</div>
            <div className="error-message"></div>
            <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
          </div>
          <div className="text-center"><button type="submit">Make an Appointment</button></div>
        </form>

      </div>
    </section>

    </div>
  )
}

export default MakeAppointments
