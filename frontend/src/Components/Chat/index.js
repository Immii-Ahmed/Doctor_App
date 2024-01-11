import React from 'react'
import './chat.css';
const Chat = () => {
  return (
    <div className="w-100 p-3">
    <div className="page-title">
        <div className="row gutters">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className='d-flex align-items-center'>
                    <i className="fa fa-arrow-left mx-3 cursor-pointer" style={{ fontSize: '20px' }}></i>
                    <h5 className="title" style={{ marginBottom: 0 }}>Chat App</h5>
                </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"> </div>
        </div>
    </div>
    <div className="content-wrapper">
        <div className="row gutters">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="">
                    <div className="row no-gutters">
                            <div className="">
                                <div className="selected-user">
                                    <span>To: <span className="name">Imran</span></span>
                                </div>
                                <div className="chat-container">
                                    <ul className="chat-list chat-box chatContainerScroll">
                                     
                                                    <li className="chat-right">
                                                        <div className="chat-avatar">
                                                            <img src="https://www.bootdey.com/img/Content/avatar/avatar3.png" alt="Retail Admin" />
                                                        </div>
                                                        <div>
                                                            <div className="chat-text text-align-right">
                                                            </div>
                                                            <small>
                                                                <div className="chat-hour">hello
                                                                </div>
                                                            </small>
                                                        </div>
                                                    </li>
                                    </ul>
                                    <form className="form-group mt-3 mb-0 d-flex">
                                        <input type='text' className="form-control" rows="2" placeholder="Type your message here..." />
                                        <input className='btn btn-outline-secondary rounded' type='submit' value={'Send'} />
                                    </form>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
  )
}

export default Chat
