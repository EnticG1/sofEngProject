import { useEffect } from "react"
import { useMenusContext } from "../hooks/useMenusContext"

// Components
import AdminDetails from "../components/adminDetails"
import AdminForm from "../components/adminForm"

const Admin = () => {
    const {menus, dispatch} = useMenusContext()

    useEffect(() => {
        const fetchMenu = async () => {
            const response = await fetch('admin/api/menu/')
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
            <div className="admin">
                <div className="adminForm">
                    <AdminForm/>
                </div>
                {/* Template for each item of the menu */}
                {menus && menus.map((menu) => (
                    // Later make
                    <AdminDetails key={menu._id} menu={menu}/>
                ))}
            </div>
        </div>
    )
}

export default Admin