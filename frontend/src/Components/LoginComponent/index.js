import React, { useCallback, useState } from 'react'
import PasswordInputField from '../PasswordField'
import useUsers from '../../Hooks/useUsers';

function LoginComponent() {
  const [password, setPassword] = useState('password');
  const { loginUser } = useUsers();

  const handleLoginUser = useCallback((e) => {
    e.preventDefault();
    const user = {
      email: e.target[0].value,
      password: e.target[1].value
    }
    loginUser(user)
  }, [loginUser])
  return (
    <form action='' method='Post' onSubmit={handleLoginUser}>
    <div className="mb-3">
      <input type="email" className="form-control" id="exampleInputEmail1" placeholder='E-mail' aria-describedby="emailHelp"/>
    </div>
      <PasswordInputField placeholder={'Password..'} handlePasswordChange={setPassword} />
    <button type="submit" className="btn btn-dark my-3">LOGIN</button>
  </form>
  )
}

export default LoginComponent