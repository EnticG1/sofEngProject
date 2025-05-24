import { useEffect } from "react"
import { useMenusContext } from "../hooks/useMenusContext"
import { useAuthContext } from '../hooks/useAuthContext'

const Sidebar = () => {
  const { user } = useAuthContext()
  const {menus, dispatch} = useMenusContext()

  useEffect(() => {
    const fetchMenu = async () => {
      const response = await fetch('api/admin/menu/')
      const json = await response.json()

      // Check if response is ok
      if (response.ok){
        dispatch({type: 'SET_MENUS', payload: json})
      }
    }

    fetchMenu()
  }, [dispatch])

  return(
    <nav className='sidebar'>
      
    </nav>
  )
}

export default Sidebar