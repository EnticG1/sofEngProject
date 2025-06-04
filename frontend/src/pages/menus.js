import { useEffect } from "react"
import { useMenusContext } from "../hooks/useMenusContext"

// Components
import MenuDetails from "../components/menuDetails"

const Menus = () => {
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
    <div className="home">
      <div className="menu-box">
        <h1>Our Menu</h1>
        <h3>Our extensive list of flavorful treats and delights</h3>
        <div className="menu-list">
          {menus && menus.map((menu) => (
            <MenuDetails key={menu._id} menu={menu}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Menus