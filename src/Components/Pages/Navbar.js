import { NavLink } from "react-router-dom";
import '../Styles/Navbar.css'
import React from 'react'

function Navbar() {

    return (
        <nav>
            <div className="Headlogo">Expense Tracker</div>
            <div className="Links">
                <NavLink to={'/'} className="stylelist" style={{ textDecoration: 'none', color: "rgb(83, 77, 77)" }}> Home</NavLink>
                <NavLink to={'/expense'} className="stylelist"   style={{ textDecoration: 'none', color: "rgb(83, 77, 77)" }}>Expense</NavLink>
                <NavLink to={'/expenselist'} className="stylelist"  style={{ textDecoration: 'none', color: "rgb(83, 77, 77)" }}>Expense List</NavLink>
                <NavLink to={'/about'} className="stylelist"  style={{ textDecoration: 'none', color: "rgb(83, 77, 77)" }}>About</NavLink>
            </div>
        </nav>
    )
}

export default Navbar