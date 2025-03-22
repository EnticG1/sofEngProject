import { useState } from "react"
import { useMenusContext } from "../hooks/useMenusContext"

const AdminForm = () => {
    const { dispatch } = useMenusContext()

    const[name, SetName] = useState('')
    const[desc, SetDesc] = useState('')
    const[price, SetPrice] = useState('')
    const[error, SetError] = useState(null)
    const[emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const menu = {name, desc, price}

        const response = await fetch('api/admin/menu', {
            method: 'POST',
            body: JSON.stringify(menu),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok){
            SetError(json.error)
            setEmptyFields(json.emptyFields)
        }
        if(response.ok){
            SetError(null)
            SetName('')
            SetDesc('')
            SetPrice('')
            setEmptyFields([])
            dispatch({type: 'CREATE_MENU', payload: json})
        }
    }

    return(
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add new menu item:</h3>

            <label>Name:</label>
            <input 
                type="text" 
                onChange={(e) => SetName(e.target.value)}
                value={name}
                className={emptyFields.includes('name') ? 'error' : ''}
            />

            <label>Description:</label>
            <input
                size="60"
                type="text" 
                onChange={(e) => SetDesc(e.target.value)}
                value={desc}
                className={emptyFields.includes('desc') ? 'error' : ''}
            />

            <label>Price:</label>
            <input
                type="number" 
                onChange={(e) => SetPrice(e.target.value)}
                value={price}
                className={emptyFields.includes('price') ? 'error' : ''}
            />
            {error && <div className="error">{error}</div>}
            <button>Add Menu</button>
        </form>
    )
}
export default AdminForm