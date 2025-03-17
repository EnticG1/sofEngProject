import { useEffect, useState } from "react"

// Components
import MenuDetails from "../components/menuDetails"

const Landing = () => {
    const [menus, setMenus] = useState(null)

    useEffect(() => {
        const fetchMenu = async () => {
            const response = await fetch('http://localhost:4000/api/menu/')
            const json = await response.json()

            // Check if response is ok
            if (response.ok){
                setMenus(json)
            }
        }

        fetchMenu()
    }, [])

    return (
        <div className="home">
            <div className="menus">
                {/* Template for each item of the menu */}
                {menus && menus.map((menu) => (
                    // Later make
                    <MenuDetails key={menu._id} menu={menu}/>
                ))}
            </div>
        </div>
    )
}

export default Landing