// A form used to create, update, and delete menu items from the database.

// Todo:
// Show all menu item
// Delete button for a menu item
// Edit button to update the menu item
// Input form to make a menu item

import { BsFillTrashFill, BsPencilFill } from "react-icons/bs";

const MenuAdmin = ({ menu }) => {
    return(
        <div className="admin-details">
            {/* Menu item and its functionality */}
            <div className="adminHeader">
                {/* Want to add image later */}

                {/* Menu header is the parent for title and price, i want to make the title and price be next to each other. */}    
                <h4>{menu.name}</h4>
                <p><strong>Price: </strong>{menu.price}.000</p>
                <p><strong>Description: </strong>{menu.desc}</p> 
            </div>
            <div className="adminAction">
                {/* delete button and edit button */}
                <div className="adminButton">
                    <BsFillTrashFill size="20px" color="red"/>
                </div>
                <div className="adminButton">
                    <BsPencilFill size="20px" color="black"/>
                </div>
            </div>
        </div>
    )
}

export default MenuAdmin