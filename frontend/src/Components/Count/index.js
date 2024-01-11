import React from 'react';
import './style.css';
import Doctors from './medical-team.png';
import Department from './corporate.png';
import Research from './flask.png';
import Awards from './medal.png'

const Count = () => {
  return (
    <section id="counts" className="counts">
      <div className="container">

        <div className="row">

          <div className="col-lg-3 col-md-6">
            <div className="count-box">
              <img src={Doctors} alt="Doctor's Logo"/>
              <span data-purecounter-start="0" data-purecounter-end="85" data-purecounter-duration="1" className="purecounter bg-light">80</span>
              <p>Doctors</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
            <div className="count-box">
            <img src={Department} alt="Departments Logo"/>
              <span data-purecounter-start="0" data-purecounter-end="18" data-purecounter-duration="1" className="purecounter">10</span>
              <p>Departments</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
            <div className="count-box">
            <img src={Research} alt="Research Logo"/>
              <span data-purecounter-start="0" data-purecounter-end="12" data-purecounter-duration="1" className="purecounter">150</span>
              <p>Research Labs</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
            <div className="count-box">
            <img src={Awards} alt="Awards Logo"/>
              <span data-purecounter-start="0" data-purecounter-end="150" data-purecounter-duration="1" className="purecounter">50</span>
              <p>Awards</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Count
