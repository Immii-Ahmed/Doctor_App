import React from "react";
import Navbar from "../Navbar";
import HeroSection from "../HeroSection";
import DocCardPage from "../../Pages/DocCardPage";
import Count from "../Count";
import Cardio from './cardiology.png';
import Eye from './eye.png';
import neuro from './neurology.png';
import hepato from './hepatology.png';
import pediatric from './pediatrics.png'
const Home = () => {
  return (
    <Navbar>
      <HeroSection />
      <Count />
    <section id="departments" className="departments" style={{margin: '5rem 0rem'}}>
      <div className="container">

        <div className="section-title">
          <h2  style={{margin:'2rem 0rem'}}>Departments</h2>
          <p>Our Hospital Department is committed to providing exceptional and compassionate healthcare services to meet the diverse needs of our community. With a team of highly skilled and dedicated healthcare professionals, we strive to deliver the highest quality care in a safe and welcoming environmen</p>
        </div>

        <div className="row gy-4 my-4">
          <div className="col-lg-3">
            <ul className="nav nav-tabs flex-column">
              <li className="nav-item">
                <a className="nav-link active show" data-bs-toggle="tab" href="#tab-1">Cardiology</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#tab-2">Neurology</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#tab-3">Hepatology</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#tab-4">Pediatrics</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#tab-5">Eye Care</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-9">
            <div className="tab-content">
              <div className="tab-pane active show" id="tab-1">
                <div className="row gy-4">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>Cardiology</h3>
                    <p className="fst-italic">Cardiology is the study of the heart. Cardiology is a branch of medicine that deals with disorders of the heart and the cardiovascular system. The field includes medical diagnosis and treatment of congenital heart defects, coronary artery disease, heart failure, valvular heart disease, and electrophysiology.</p>
                  </div>
                  <div className="col-lg-4 text-center order-1 order-lg-2">
                    <img src={Cardio} alt="" className="img-fluid" style={{width: 200}}/>
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="tab-2">
                <div className="row gy-4">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>Neurology</h3>
                    <p className="fst-italic">Neurology is the branch of medicine dealing with the diagnosis and treatment of all categories of conditions and disease involving the nervous system,</p>
                    <p>which comprises the brain, the spinal cord and the peripheral nerves.</p>
                  </div>
                  <div className="col-lg-4 text-center order-1 order-lg-2">
                    <img src={neuro} alt="neuro" className="img-fluid" style={{width: 200}}/>
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="tab-3">
                <div className="row gy-4">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>Hepatology</h3>
                    <p className="fst-italic">Hepatology is a branch of medicine concerned with the study, prevention, diagnosis, and management of diseases that affect the liver, gallbladder, biliary tree, and pancreas.</p>
                    <p> The term hepatology is derived from the Greek words “hepatikos” and “logia,” which mean liver and study, respectively.</p>
                  </div>
                  <div className="col-lg-4 text-center order-1 order-lg-2">
                    <img src={hepato} alt="hepato" className="img-fluid"  style={{width: 200}}/>
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="tab-4">
                <div className="row gy-4">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>Pediatrics</h3>
                    <p className="fst-italic">Pediatrics is the branch of medicine that deals with the health and well-being of children from birth to adolescence.</p>
                    <p> Pediatricians are doctors who have received specialized training in caring for children and are experts in diagnosing and treating childhood illnesses and injuries.</p>
                  </div>
                  <div className="col-lg-4 text-center order-1 order-lg-2">
                    <img src={pediatric} alt="pediatric" className="img-fluid" style={{width: 200}} />
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="tab-5">
                <div className="row gy-4">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>Eye care</h3>
                    <p className="fst-italic">Eye care refers to the protection, maintenance, and treatment of the eyes and the visual system as a whole.</p>
                    <p> It encompasses a wide range of practices and procedures aimed at preserving good vision, preventing eye diseases and injuries, and addressing existing eye conditions.</p>
                  </div>
                  <div className="col-lg-4 text-center order-1 order-lg-2">
                    <img src={Eye} alt="Eye" className="img-fluid" style={{width: 200}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
      <DocCardPage />
    </Navbar>
  );
};

export default Home;
