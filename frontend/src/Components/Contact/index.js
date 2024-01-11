import React from 'react'
import { Navbar } from '..'

const ContactUs = () => {
    return (
        
<Navbar>
    <section className="getintouch py-4" style={{marginTop:'16rem'}}>
        <div className="container modern-form">
                <div className="text-center py-2">
                    <h4 style={{color: '#212529',fontSize: '45px'}}>Contact Us</h4>
                </div>
            <hr className="modern-form__hr py-3"/>
            <div className="modern-form__form-container py-4">
                <form>
                    <div className="row">
                        <div className="col col-contact">
                            <div className="modern-form__form-group--padding-r form-group mb-3"><input className="form-control input input-tr" type="text" placeholder="Name" />
                                <div className="line-box">
                                    <div className="line"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col col-contact">
                            <div className="modern-form__form-group--padding-l form-group mb-3"><input className="form-control input input-tr" type="text" placeholder="Email"/>
                                <div className="line-box">
                                    <div className="line"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="modern-form__form-group--padding-t form-group mb-3"><textarea className="form-control input modern-form__form-control--textarea" style={{resize:'none'}} rows={'5'} placeholder="Message"></textarea>
                                <div className="line-box">
                                    <div className="line"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col text-center"><button className="btn btn-primary btn-outline-none submit-now" type="submit" style={{background: 'rgb(17,15,15)'}}>Submit Now</button></div>
                    </div>
                </form>
            </div>
        </div>
    </section>
      </Navbar>
  )
}

export default ContactUs
