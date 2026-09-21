import React from 'react'
import { Link, Outlet } from 'react-router-dom';
// import Nav from './Nav'

const Layout = () => {
    return (
        <>
            <div>

                <header>

                    <h1>My Shop</h1>

                    <nav>

                    <Link to='/'>Home</Link>

                    <Link to='/product'>Product</Link>

                    <Link to='/about'>About</Link>


                    <Link to='/profile'>Profile</Link>

                    </nav>

                </header>

                <main>

                    <Outlet />

                </main>

                <footer>

                    <p>@ 2026 my shop</p>

                </footer>

            </div>
        </>
    )
}

export default Layout
