// A form used to create, update, and delete menu items from the database.

// Todo:
// Delete button for a menu item
// Edit button to update the menu item

import { BsFillTrashFill } from "react-icons/bs";
import { useMenusContext } from "../hooks/useMenusContext";

// Date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const MenuAdmin = ({ menu }) => {
    const { dispatch } = useMenusContext()

    const handleDeleteClick = async () => {
        const response = await fetch('api/admin/menu/' + menu._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if(response.ok){
            dispatch({type: 'DELETE_MENU', payload: json})
        }
    }

    return(
        <div className="admin-details">
            {/* Menu item and its functionality */}
            <div className="adminHeader">
                {/* Want to add image later */}

                {/* Menu header is the parent for title and price, i want to make the title and price be next to each other. */}    
                <div className="adminMenuItem">
                  <img src={menu.image}/>
                  <div>
                    <h4>{menu.name}</h4>
                    <p><strong>Price: </strong>{menu.price}.000</p>
                    <p><strong>Description: </strong>{menu.desc}</p><br />
                    <p><strong>Image name: </strong>{menu.image}</p>
                    <p><strong>ID: </strong>{menu._id}</p>
                    <p><strong>Last updated: </strong>{formatDistanceToNow(new Date(menu.updatedAt), {addSuffix: true})}</p>
                  </div>
                </div>
            </div>
            <div className="adminAction">
                {/* delete button and edit button */}
                <div className="adminButton" onClick={handleDeleteClick}>
                    <BsFillTrashFill size="20px" color="red"/>
                </div>
            </div>
        </div>
    )
}

export default MenuAdmin