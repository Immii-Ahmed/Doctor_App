import React from "react";
import { HeroSection, Navbar } from "..";

const Apointment = () => {
  return (
    <Navbar>
      <div className="container d-flex justify-content-center py-4" style={{marginBottom:'4rem', marginTop:'25rem'}}>
      <table class="table table-hover" style={{ width: "80%" }}>
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Name Of Doctor</th>
            <th scope="col">Patient</th>
            <th scope="col">Date and Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Lt Col Mazhar</td>
            <td>Asfand</td>
            <td>12:36pm 01/02/2024</td>
          </tr>
        </tbody>
      </table>
      </div>
    </Navbar>
  );
};

export default Apointment;
