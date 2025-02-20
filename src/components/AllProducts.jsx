import React, { useEffect, useState } from 'react'

const AllProducts = () => {

    const [products,setProducts]=useState([])

    const getAllProducts=async ()=>{
        const res=await fetch('https://dummyjson.com/products')
        const data =await res.json();
        setProducts(data.products)
    }
    console.log(products);
    useEffect(()=>{
        getAllProducts()
    },[])
    return (
      <div>AllProducts</div>
    )
}

export default AllProducts