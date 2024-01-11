import React, { useState } from "react";
import Image from './usman-yousaf-pTrhfmj2jDA-unsplash.jpg'
import { Link } from "react-router-dom";

const DocCard = () => {
  return (
    <>
      <div className="col" style={{marginBottom:'5rem'}}>
      <div className="card" style={{    width: '100%', padding: '0rem'}}>
        <img className="card-img-top w-100 d-block" src={Image} />
        <div className="card-body">
          <h4 className="card-title">Col: Mazhar Shafique</h4>
          <p className="card-text">
          treating injuries and diseases using medical imaging (radiology).
          </p>
          <Link className="btn btn-primary" type="button" style={{ background: "rgb(22,24,27)", borderColor: "rgb(16,15,15)", }} to='/doctors'>
            View About
          </Link>
        </div>
      </div>
      </div>
    </>
  );
};

export default DocCard;
