const menuDetails =  ({ menu }) => {
    return(
        <div className="menu-details">
          <div>
            <img src={menu.image}/>
          </div>
          <div>
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
        </div>
    )
}

export default menuDetails