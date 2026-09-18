import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const Product = () => {
    return (
        <>
        <h1>Welcome to product Components</h1>
            <h2>Product Pages</h2>

            <nav>
                <Link to='/phones'>Phones</Link>

            <Link to='/camera'>Camera</Link>

            <Link to='/laptops'>Laptops</Link>
            </nav>

            <Outlet/>


            
        </>
    )
}

export default Product

