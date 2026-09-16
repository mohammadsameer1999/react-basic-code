import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (

        <>
            <div  style={{backgroundColor: 'pink', padding : '10px'}}>
                <NavLink  style={ ({isActive}) => ({
                    color: isActive ? "white" : "blue",
                    backgroundColor: isActive ? "greeen" : "transparent",
                    padding : "5px 10px",
                    borderRadius : "5px",
                    textDecoration : "none"


               } )}  to={'/'}>Home</NavLink>

            <Link style={{margin:'10px'}}  to={'/about'}>About</Link>

            <Link style={{margin:'10px'}}  to={'/contact'}>Contact Us</Link>

            </div>

        </>
    )
}

export default Navbar
