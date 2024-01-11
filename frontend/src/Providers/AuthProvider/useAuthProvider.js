import { useContext } from 'react'
import { ContextApi } from './context';

export const useAuthProvider = () => {
    const {user, setUser, cookies} = useContext(ContextApi);
    return {
        user, setUser, cookies
  }
}
