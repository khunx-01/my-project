import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './card'
const Product = () => {
    let [data,setData]=useState([])
    let fetchdata = async()=>{
await axios.get('https://dummyjson.com/products').then((response)=>setData(response.data.products))
    }
    useEffect(()=>fetchdata)
  return (
    <div>
        {data.map((x)=><Card data={x}/>)}
    </div>
  )
}

export default Product
