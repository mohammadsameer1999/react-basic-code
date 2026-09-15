import React from 'react'
import Product from './components/Product'
import Events from './components/Events'
import UseState from './components/UseState'
import Map from './components/Map'
import Filter from './components/Filter'
import UseEffects from './components/UseEffects'
import FetchData from './components/FetchData'

const App = () => {
  return (
   <>
   <Product name="Iphne 16" price = {120000} purchase="Online"/>
   <Events/>
   <UseState/>
   <Map/>
   <Filter/>
   <UseEffects/>
   <FetchData/>
   </>
  )
}

export default App
