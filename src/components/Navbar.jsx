import React from 'react';
import '../styles/navbar.css';
import { FaShoppingCart } from "react-icons/fa";
const Navbar = ({size, setShow}) => {
  return (
    <nav>
        <div className="nav_box">
            
            <span className="my_shop" onClick={()=>setShow(true)}>
                My Shopping
            </span>
            <div className="cart" onClick={()=>setShow(false)}>
                <span>
                <FaShoppingCart color="white" fontSize="25px" />
                </span>
                <span>{size}</span>
            </div>
        </div>
    </nav>
  )
}

export default Navbar