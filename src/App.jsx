import React from 'react'
import Layout from './components/Layout'

import Landingscreen from './screen/Landingscreen'
import Product from './components/Product'
import { Route, Routes } from 'react-router-dom'


const App = () => {
  return (
   
    <Layout>

    <Routes>
      <Route path="/" element={<Landingscreen />} />
      <Route path="/product" element={<Product />} />
    </Routes>
  </Layout>
  
  )
}

export default App
