import React from "react"
import "./index.css"
import CartWidget from "../cart-widget"

const Navbar = () => {
    return (
        <div className="container">
            <ul className="list">
                <li className="listItem">
                    <a href="#" className="itemName">Inicio</a>
                </li>
                <li className="listItem">
                    <a href="#" className="itemName">Categorías</a>
                </li>
                <li className="listItem contact">
                    <a href="#" className="itemName">Contacto</a>
                </li>
                <li className="listItem cart">
                    <a href="#" className="itemName"><CartWidget /></a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar 
