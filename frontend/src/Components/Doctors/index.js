import { Link } from "react-router-dom";
import Star from "./star.png";
import Comment from "./comments.png";
import { useAuthProvider } from "../../Providers";

const Doctors = ({ doctors }) => {
  const { cookies } = useAuthProvider();
  const isAuthenticated = !!cookies.get("auth");

  return (
    <>
      <section style={{ marginTop: "16rem" }}>
        <form className="search-form container">
          <div className="input-group">
            <span
              className="input-group-text"
              style={{ background: "rgb(233, 236, 239)" }}
            >
              <i className="fa fa-search"></i>
            </span>
            <input
              className="form-control"
              type="text"
              placeholder="Search Doctor..."
              style={{ textAlign: "left", borderStyle: "solid" }}
            />
            <button
              className="btn btn-light"
              type="button"
              style={{ background: "rgb(13,13,14)", color: "rgb(239,234,234)" }}
            >
              Search{" "}
            </button>
          </div>
        </form>
        <div className="container py-5">
          {doctors?.length > 0 ? (
            doctors?.map((doctor, index) => (
              <div className="row d-flex justify-content-center align-items-center h-100 my-4">
                <div className="col col-md-9 col-lg-7 col-xl-5 w-100">
                  <div
                    style={{
                      borderRadius: "15px",
                      border: "1px solid #ebeced",
                      boxShadow: "5px 10px #ebeced",
                    }}
                  >
                    <div className="card-body p-4 text-black" key={index}>
                      <div>
                        <h6 className="mb-4">Radiologist (FCPS)</h6>
                        <div className="d-flex align-items-center justify-content-between mb-3">
                          <p className="small mb-0">
                            <i className="far fa-clock me-2"></i>3 hrs
                          </p>
                          <p className="fw-bold mb-0">Rs 400</p>
                        </div>
                      </div>
                      <div className="d-flex align-items-center mb-4">
                        <div className="flex-shrink-0">
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-2.webp"
                            alt="Generic placeholder image"
                            className="img-fluid rounded-circle border border-dark border-3"
                            style={{ width: "70px" }}
                          />
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <div className="d-flex flex-row align-items-center mb-2">
                            <p className="mb-0 me-2">{doctor.displayName}</p>
                            <ul
                              className="mb-0 list-unstyled d-flex flex-row"
                              style={{ color: "#1B7B2C" }}
                            >
                              <li>
                                <img
                                  src={Star}
                                  alt="star logo"
                                  style={{ width: 20 }}
                                />
                              </li>
                              <li>
                                <img
                                  src={Star}
                                  alt="star logo"
                                  style={{ width: 20 }}
                                />
                              </li>
                              <li>
                                <img
                                  src={Star}
                                  alt="star logo"
                                  style={{ width: 20 }}
                                />
                              </li>
                              <li>
                                <img
                                  src={Star}
                                  alt="star logo"
                                  style={{ width: 20 }}
                                />
                              </li>
                              <li>
                                <img
                                  src={Star}
                                  alt="star logo"
                                  style={{ width: 20 }}
                                />
                              </li>
                            </ul>
                          </div>
                          <div>
                            <button
                              type="button"
                              className="btn btn-outline-dark btn-rounded btn-sm"
                              data-mdb-ripple-color="dark"
                            >
                              + Check Records
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-dark btn-rounded btn-sm mx-3"
                              data-mdb-ripple-color="dark"
                            >
                              See profile
                            </button>
                            <Link
                              type="button"
                              className="btn btn-outline-dark btn-floating btn-sm"
                              to={"/chat"}
                              data-mdb-ripple-color="dark"
                            >
                              <img
                                src={Comment}
                                alt="Comments"
                                style={{ width: 20 }}
                              />
                            </Link>
                          </div>
                        </div>
                      </div>
                      <hr />
                      <p className="my-4 pb-1">52 Patients</p>
                      {!isAuthenticated ? (
                        <small>Signup for appointment</small>
                      ) : (
                        <Link
                          type="button"
                          className="btn btn-dark btn-rounded btn-block btn-lg"
                          to={"/makeappointment"}
                        >
                          <i className="far fa-clock me-2"></i>Get a Apointment
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h1> No Doctors</h1>
          )}
        </div>
      </section>
    </>
  );
};

export default Doctors;
