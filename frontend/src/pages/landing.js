import { useEffect } from "react"
import { useMenusContext } from "../hooks/useMenusContext"

// Components
import MenuDetails from "../components/menuDetails"

const Landing = () => {
    const {menus, dispatch} = useMenusContext()

    useEffect(() => {
        const fetchMenu = async () => {
            // Check if connection is okay
            const response = await fetch('/api/landing/menu/')
            // Get the json data
            const json = await response.json()

            // If connection is ok, send payload to menuContext as action
            if (response.ok){
                dispatch({type: 'SET_MENUS', payload: json})
            }
        }
        
        fetchMenu()
    }, [dispatch])

    return (
        <div className="home">
            <div className="menus">
                {/* Template for each item of the menu */}
                {menus && menus.slice(0,3).map((menu) => (
                    // Later make
                    <MenuDetails key={menu._id} menu={menu}/>
                ))}
            </div>
        </div>
    )
}

export default Landing