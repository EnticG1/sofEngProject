import { useAuthContext } from './useAuthContext'

export const useLogout = () => {
  const{dispatch} = useAuthContext()
  
  const logout = () =>{
    // Delete user from localStorage
    localStorage.removeItem('user')

    // Dispatch logout action using globalstate
    dispatch({type:'LOGOUT'})
  }

  return {logout}
}
