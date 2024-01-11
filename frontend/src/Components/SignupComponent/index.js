import React, {useCallback, useState } from 'react'
import PasswordInputField from '../PasswordField'
import useUsers from '../../Hooks/useUsers';
// import { useUsers } from '../../Hooks/useUsers';

function SignupComponent() {

  const [password, setPassword] = useState('');
  const [cpassword, setcpassword] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  var role= 'user'

  const { handleRegisterUser } = useUsers();

  const handleRoleChange = useCallback((event) => {
    role = event.target.value;
    setSelectedRole(role);
  }, []);

  const handleSubmitReg = useCallback(async (e) => {
    e.preventDefault();
    if (e.target[2].value === e.target[3].value) {
      const user = {
        displayName: e.target[0].value,
        email: e.target[1].value,
        password: e.target[2].value,
        role
      }
      console.log(user)
      await handleRegisterUser(user)
    } else {
      alert(`Passwords Doesn't Match!!`);
    }
  }, [handleRegisterUser])
  

  return (
    <form onSubmit={handleSubmitReg}>
    <div className="mb-3">
    <input type="text" className="form-control" id="exampleInputEmail1" placeholder='Enter Name...' aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Enter Email...' aria-describedby="emailHelp"/>
  </div>
      <PasswordInputField handlePasswordChange={setPassword} placeholder={'Password...' } />
      <PasswordInputField handlePasswordChange={setcpassword} placeholder={'Confirm Password...'} />
      <div className='my-4'>
      <label className='mx-3'>
        <input
          type="radio"
          value="user"
          checked={selectedRole === 'user'}
            onChange={handleRoleChange}
            className='mx-2'
        />
        User
      </label>
      <label>
        <input
          type="radio"
          value="doctor"
          checked={selectedRole === 'doctor'}
            onChange={handleRoleChange}
            className='mx-2'
        />
        Doctor
      </label>
    </div>
  <input type="submit" className="btn btn-dark" value="SIGNUP"/>
</form>
  )
}

export default SignupComponent