import { Link } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'
import { BiRightArrowAlt, BiCopyright } from "react-icons/bi";

const Footer = () => {
  return(
    <footer className="footerContainer">
      <div className="footerContent">
        <div className='footerTitle'>
          <h1>B<u>readily</u></h1>
          <ul>
            <li><a href=""><BiRightArrowAlt/> About us</a></li>
            <li><a href=""><BiRightArrowAlt/> Our Services</a></li>
            <li><a href=""><BiRightArrowAlt/> Privacy Policy</a></li>
            <li><a href=""><BiRightArrowAlt/> Affiliate</a></li>
          </ul>
        </div>
        <div className='footerHelp'>
          <h1>Help</h1>
          <ul>
            <li><a href=""><BiRightArrowAlt/> FAQ</a></li>
            <li><a href=""><BiRightArrowAlt/> Order Status</a></li>
            <li><a href=""><BiRightArrowAlt/> Payment Options</a></li>
            <li><a href=""><BiRightArrowAlt/> Shipping options</a></li>
          </ul>
        </div>
        <div>
          <h1>Shop</h1>
          <ul>
            <li><a href=""><BiRightArrowAlt/> Cakes</a></li>
          </ul>
        </div>
        <div>
          <h1>Follow Us</h1>
          <ul>
            <li><a href=""><BiRightArrowAlt/> </a></li>
            <li><a href=""><BiRightArrowAlt/> </a></li>
            <li><a href=""><BiRightArrowAlt/> </a></li>
            <li><a href=""><BiRightArrowAlt/> </a></li>
          </ul>
        </div>
      </div>
      <div className="footerCopyright">
        <h3><BiCopyright/> Nicodemus Nathanael Singale 2025</h3>
      </div>
    </footer>
  )
}

export default Footer