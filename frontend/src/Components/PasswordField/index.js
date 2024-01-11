import React, { useState } from 'react';
import './style.css'

const PasswordInputField = (props) => {
    const { placeholder, handlePasswordChange } = props;

    const [showpassword, setShowPassword] = useState('password');

    const togglepasswordBtn=()=> {
        setShowPassword(showpassword === 'text' ? 'password' : 'text');
    }

  return (
    <div className="my-2 form-control d-flex justify-content-between align-items-center border border-rounded">
          <input onChange={(e) =>handlePasswordChange(e.target.value)} type={showpassword} className='w-100 shadow-none outline-none' placeholder={placeholder} id="exampleInputPassword1"/>
          <i class="fa fa-eye" onClick={togglepasswordBtn}></i>
    </div>
  )
}

export default PasswordInputField
