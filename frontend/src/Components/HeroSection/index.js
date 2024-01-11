import React from "react";
import PictureImage from './heroSection.svg'
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
      <div className="container py-4 py-xl-5" style={{marginTop:'8rem'}}>
        <div className="row gy-4 gy-md-0">
          <div className="col-md-6 text-center text-md-start d-flex d-sm-flex d-md-flex justify-content-center align-items-center justify-content-md-start align-items-md-center justify-content-xl-center">
            <div style={{ maxWidth: "350px" }}>
              <h2
                className="text-uppercase fw-bold"
                style={{ fontFamily: "Abril Fatface serif" }}
              >
                KHP DOCTORS
              </h2>
              <p className="my-3">
                <span style={{ color: "rgb(55, 65, 81)" }}>
                  "Hospitals are places that should be associated with healing,
                  hope, and humanity."
                </span>
              </p>
              <Link
                className="btn btn-outline-dark btn-lg"
                role="button"
                to={'##'}
                style={{
                  borderColor: "rgb(38, 40, 42)",
                  borderTopColor:
                    "rgb(13,borderRightColor: 110,borderBottomColor: 253)",
                  borderLeftColor: "110,color: rgb(13, 13, 13)",
                }}
              >
                Blogs
              </Link>
              <Link
                className="btn btn-outline-dark btn-lg mx-3"
                role="button"
                to={'##'}
                style={{
                  borderColor: "rgb(38, 40, 42)",
                  borderTopColor:
                    "rgb(13,borderRightColor: 110,borderBottomColor: 253)",
                  borderLeftColor: "110,color: rgb(13, 13, 13)",
                }}
              >
                Health
              </Link>
            </div>
          </div>
          <div className="col-md-6" style={{marginTop:'5rem'}}>
            <div className="p-xl-5 m-xl-5 d-flex justify-content-center align-items-center">
              <img
                className="rounded img-fluid w-80 fit-cover"
                style={{
                  minHeight: "200px",
                  transform: "perspective(990px) translate(0px) scale(1.62)",
                }}
                src={PictureImage}
                width="250vw"
                height="250vh"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
