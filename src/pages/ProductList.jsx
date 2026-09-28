import React from 'react'
import SearchFilter from '../components/SearchFilter'
import CategoryFilter from '../components/CategoryFilter'
import { useCart } from '../context/CartContext'
import ProductCard from '../components/ProductCard'

const ProductList = () => {
  // console.log("my product = ", useCart());

  const { products } = useCart();
  // console.log("my product = ", products);



  return (
    <>
      <div className='container mx-auto px-4 md:px-8 pt-8'>

        <SearchFilter />

        <CategoryFilter />

        <h2 className='text-2xl font-extrabold mx-auto px-4 md:px-4 pt-4'>Featured Gear ({products.length} items) </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center items-center">
        {products.map((product, index) => <ProductCard key={index} product={product} />)}
      </div>

    </>
  )
}

export default ProductList
