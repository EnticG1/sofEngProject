import { useEffect, useState } from "react"

// Components
import AdminForm from "../components/adminForm"

const Admin = () => {
    const[name, SetName] = useState('')
    const[desc, SetDesc] = useState('')
    const[price, SetPrice] = useState('')
    const[error, SetError] = useState(null)
    const [menus, setMenus] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const menu = {name, desc, price}

        const response = await fetch('/api/menu/', {
            method: 'POST',
            body: JSON.stringify(menu),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok){
            SetError(json.error)
        }
        if(response.ok){
            SetName('')
            SetDesc('')
            SetPrice('')
            SetError(null)
            console.log("New menu added", json)
        }
    }

    useEffect(() => {
        const fetchMenu = async () => {
            const response = await fetch('/api/menu/')
            const json = await response.json()

            // Check if response is ok
            if (response.ok){
                setMenus(json)
            }
        }

        fetchMenu()
    }, [])

    return(
        <div className="home">
            <div className="admin">

                {/* Input Form */}
                <div className="adminForm">
                    <form className="create" onSubmit={handleSubmit}>
                        <h3>Add new menu item:</h3>

                        <label>Name:</label>
                        <input 
                            type="text" 
                            onChange={(e) => SetName(e.target.value)}
                            value={name}
                        />
                        <label>Description:</label>
                        <input
                            size="60"
                            type="text" 
                            onChange={(e) => SetDesc(e.target.value)}
                            value={desc}
                        />
                        <label>Price:</label>
                        <input
                            type="number" 
                            onChange={(e) => SetPrice(e.target.value)}
                            value={price}
                        />

                        <button>Add Menu</button>
                        {error && <div className="error">{error}</div>}
                    </form>
                </div>

                {/* Template for each item of the menu */}
                {menus && menus.map((menu) => (
                    // Later make
                    <AdminForm key={menu._id} menu={menu}/>
                ))}
            </div>
        </div>
    )
}

export default Admin