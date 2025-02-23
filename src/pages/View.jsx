import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { Skeleton } from '../components/ui/skeleton'
const View = () => {
  const location=useLocation();
  const path=location.pathname.split('/')
  const {id}=useParams()
  console.log(id);
  const [product,setProduct]=useState([])
  const getProductData=async ()=>{
    const res=await fetch(`https://dummyjson.com/products/${id}`)
    const data=await res.json()
    console.log(data);
    setProduct(data)
  }
  useEffect(()=>{
    getProductData()
  },[])
  return (  
    <section>
      {/* Breadcrumbs  */}
      <div className="breadcrumbs text-sm">
        <ul>
          <li><Link to={"/"}>Home</Link></li>
          <li>{path[1]}</li>
          <li>{path[2]}</li>
        </ul>
      </div>
      

    
      {/* Product Title  */}
      <div>
      {
        product ?
         <h1 className='font-semibold text-4xl '> {product.title} </h1> 
        : <div className="space-y-2">
            <Skeleton className="h-4 w-[300px]" />
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
        </div>
      }
      </div>
    </section>
  )
}

export default View