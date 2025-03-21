import { BsX } from "react-icons/bs"
import { useMenusContext } from "../hooks/useMenusContext";

const ConfirmationBox = ({ menu }) => {
    const { dispatch } = useMenusContext()

    const handleDeleteClick = async () => {
        const response = await fetch('/admin/api/menu/' + menu._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if(response.ok){
            dispatch({type: 'DELETE_MENU', payload: json})
        }
    }
    
    return(
        <div className="confirmationBox">
            <div>
                <p>Are you sure you want to delete this menu?</p>
                <div className="adminButton">
                    <BsX/>
                </div>
            </div>
            <div className="confirmButton" onClick={handleDeleteClick}>
                <button>Confirm</button>
            </div>
        </div>
    )
}

export default ConfirmationBox