import { useState } from "react";
import { useAuthContext } from './useAuthContext'

export const useSignup = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const {dispatch} = useAuthContext()

  const signup = async (email, password) => {
    setIsLoading(true)
    setError(null)

    const response = await fetch('/api/user/signup', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email, password})
    })
    const json = await response.json()

    // Error checking
    if(!response.ok){
      setIsLoading(false)
      setError(json.error)
    }
    if(response.ok){
      // Save user JWT to local storage for persistent user auth
      localStorage.setItem('user', JSON.stringify(json))

      // Update auth context to automatically login when signing up
      dispatch({type: 'LOGIN', payload: json})

      setIsLoading(false)
    }
  }

  return {signup, isLoading, error}
}
