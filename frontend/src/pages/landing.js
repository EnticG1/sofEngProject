import { useEffect, useState } from "react"

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
                    <p key={menu._id}>{menu.name}</p>
                ))}
            </div>
        </div>
    )
}

export default Landing