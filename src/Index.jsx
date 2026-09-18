import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './Components/Layout'
import Home from './Pages/Home'
import About from './Pages/About'
import Product from './Pages/Product'
import Phones from './Pages/Phones'
import Laptops from './Pages/Laptops'
import Camera from './Pages/Camera'

const Index = () => {
    return (
        <>
            <Router>

                <Routes>

                    <Route path="/" element={<Layout />} >

                        <Route index element={<Home />} />

                        <Route path='about' element={<About />} />


                        <Route path='product' element={<Product />}>


                            <Route path='phone' element={<Phones />} />

                            <Route path='laptops' element={<Laptops />} />

                            <Route path='camera' element={<Camera />} />

                        </Route>

                        </Route>

                        {/* <Route path='/about' element={<About />} />

                        <Route path='/contact' element={<Contact />} />

                        <Route path='/user' element={<User />} />

                        <Route path='/user/:slug' element={<Dynamic_User />} /> */}



                </Routes>

            </Router>
        </>
    )
}

export default Index
