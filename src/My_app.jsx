import React from 'react'

import Home from './Components/Home'

import About from './Components/About'

import Product from './Components/Product'

import Profile from './Components/profile'

import { createBrowserRouter, RouterProvider, Link, Outlet } from 'react-router-dom'
import Layout from './Components/Layout'

const My_app = () => {

    async function  githubProfilLoader() {

        const res  =  await fetch("https://api.github.com/users/mohammadsameer1999");

        console.log("response data is here---<><><>", res);
        
        
        if (!res.ok) throw new Error("Failed to fetch profile data");
        
        return res.json();
        
        
    }

    const router = createBrowserRouter([
        {
            path: "/",

            element: <Layout />,

            children: [
                {
                    index: true, element: <Home />
                },

                { path: "about", element: <About /> },

                { path: "product", element: <Product /> },


                { path: "profile", element: <Profile />, loader: githubProfilLoader },


            ]

        },

    ])
    return <RouterProvider router={router} />
}

export default My_app
