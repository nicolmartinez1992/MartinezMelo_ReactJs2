import React from "react"
import "./index.css"
import CartWidget from "../cart-widget"
// import Counter from "../counter"

const Navbar = () => {
    return (
        <div className="container">
            <ul className="list">
                <li className="brand">
                    <h1>TRACTO</h1>
                </li>
                <li className="listItem">
                    <a href="#" className="itemName">Inicio</a>
                </li>
                <li className="listItem">
                    <a href="#" className="itemName">Categorías</a>
                </li>
                <li className="listItem contact">
                    <a href="#" className="itemName">Contacto</a>
                </li>
                <li>
                    <h2>0</h2>
                </li>
                <li className=" cart">
                    <a href="#" className="itemName"><CartWidget /></a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar 
