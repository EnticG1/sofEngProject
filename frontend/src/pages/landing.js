import { useEffect } from "react"
import { useMenusContext } from "../hooks/useMenusContext"
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

// Components
import MenuDetails from "../components/menuDetails"
import MenuImages from "../components/menuImages"

const Landing = () => {
  const [scrolled, setScrolled] = useState(false)
  const {menus, dispatch} = useMenusContext()

  useEffect(() => {
    const fetchMenu = async () => {
      // Check if connection is okay
      const response = await fetch('/api/landing/menu/')
      // Get the json data
      const json = await response.json()

      // If connection is ok, send payload to menuContext as action
      if (response.ok){
        dispatch({type: 'SET_MENUS', payload: json})
      }
    }
    
    fetchMenu()
  }, [dispatch])

  return (
    <div className="home">
      <div>
        {/* Hero */}
        <div className="hero">
          <img src='images/hero.jpg'/>
          <div className="heroText">
            <h1>B<u>readily</u></h1>
            <div className="heroSubtext">
              <h2>Handcrafted Cakes,</h2>
              <h2>Baked with Love,</h2>
              <h2>Delivered with Joy.</h2>
            </div>
          </div>
        </div>

        {/* Menus */}
        <div>
          <div className="menusTitle">
            <h3>Our Recommendation</h3>
          </div>
          <div className="menus">
            {menus && menus.slice(0,3).map((menu) => (
                <MenuDetails key={menu._id} menu={menu}/>
            ))}
          </div>
        </div>

        {/* Gallery */}
        <div>
          <div className="menusTitle">
            <h3>Gallery</h3>
          </div>
          <div className="menusGallery">
            <div className="menusCol1">
                <div className="menusCol1Row1 img1x1">
                  {/* 1x1 */}
                  {menus && menus.slice(0,2).map((menu) => (
                  <MenuImages key={menu._id} menu={menu}/>
                  ))}
                </div>
                <div className="menusCol1Row2 img1x2">
                  {/* 1x2 */}
                  {menus && menus.slice(2,3).map((menu) => (
                    <MenuImages key={menu._id} menu={menu}/>
                  ))}
                </div>
            </div>
            <div className="menusCol2">
              {/* 1x1 */}
              <div className="menusCol2Row1 img1x1">
                  {menus && menus.slice(3,5).map((menu) => (
                    <MenuImages key={menu._id} menu={menu}/>
                  ))}
              </div>
              {/* 1x2 */}
              <div className="menusCol2Row2 img2x1">
                  {menus && menus.slice(5,6).map((menu) => (
                    <MenuImages key={menu._id} menu={menu}/>
                  ))}
              </div>
            </div>
          </div>
        </div>

        {/* Shop Now */}
        <div className="shopNow">
          <div className="shopNowImage">
            {menus && menus.slice(1,2).map((menu) => (
              <MenuImages key={menu._id} menu={menu}/>
            ))}
          </div>
          <div className="shopNowTextContainer">
              <div className="ShopNowText">
                <h1>Shop Now</h1>
                <h3>Quality ingredient in each bite.</h3>
                <Link to='/menu' className="discoverButton">Discover More</Link>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing