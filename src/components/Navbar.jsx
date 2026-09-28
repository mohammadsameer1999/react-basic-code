import React from 'react'
import {Link} from 'react-router-dom'
import { House } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';


const Navbar = () => {
  return (
    <>
    <header className='sticky top-0 bg-gray-950/95 backdrop-blur-md text-white shadow-2xl
     drop-shadow-gray-950/70 border-b border-orange-900'>

      <div className="container mx-auto px-4 py-4 flex justify-between items-center">

          <Link to={'/'}>

          <div className='flex items-center space-x-3 cursor-pointer'>
        
          <House className='w-8 h-8 text-orange-500'/>

          <h1 className='text-4xl font-extrabold tracking-widest uppercase'>SAM <span className='text-orange-500'>Mart</span>

          </h1>


        </div>

         </Link>

        <nav className='flex items-center space-x-6'>
         
         <Link to={'/cart'} className='realative p-3 bg-orange-500/10 rounded-xl
          hover:bg-orange-500/20 transition-durartion-200 border-orange-450/50 shadow-lg cursor-pointer'>
                   <ShoppingCart className=
                    ' w-6 h-6 text-orange-500 flex'/>

         </Link>

        </nav>
      </div>

    </header>
    </>
  )
}

export default Navbar
