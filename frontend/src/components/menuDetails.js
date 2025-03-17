const menuDetails =  ({ menu }) => {
    return(
        <div className="menu-details">
            {/* Want to add image later */}

            {/* Menu header is the parent for title and price, i want to make the title and price be next to each other. */}
            <div className="menuHeader">
                <div className="menuHeader-item">
                    <h4>{menu.name}</h4>
                </div>
                <div className="menuHeader-item">
                    <p><strong>{menu.price}</strong></p>
                </div>
            </div>
            <div className="menuDescription">
                <p>{menu.desc}</p> 
            </div>
        </div>
    )
}

export default menuDetails