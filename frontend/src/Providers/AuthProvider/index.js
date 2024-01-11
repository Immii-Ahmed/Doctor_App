import React, { useState } from 'react'
import { ContextApi } from './context';
import Cookies from 'universal-cookie';

const ContextProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const cookies = new Cookies(null, { path: '/' });

  return (
      <ContextApi.Provider value={{user, setUser, cookies}}>
          {children}
    </ContextApi.Provider>
  )
}

export default ContextProvider
