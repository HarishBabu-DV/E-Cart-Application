import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { Skeleton } from '../components/ui/skeleton'
const View = () => {

  // To get Routes
  const location=useLocation();
  const path=location.pathname.split('/')
  const {id}=useParams()
  const [productDetails,setProductDetails]=useState([])
  const getProductData=async ()=>{
    const res=await fetch(`https://dummyjson.com/products/${id}`)
    const data=await res.json()
    console.log(data);
    setProductDetails(data)
  }
  useEffect(()=>{
    getProductData()
  },[id])
  return (  
    <section className='pt-28'>
      {/* Breadcrumbs  */}
      <div className="breadcrumbs text-md font-medium flex justify-start pl-20">
        <ul>
          <li><Link to={"/"}>Home</Link></li>
          <li>{path[1]}</li>
          <li>{path[2]}</li>
        </ul>
      </div>
      <section className='flex flex-col gap-y-8'>
      {/* Product Title  */}
      <div>
      {
        productDetails ?
         <h1 className='font-semibold text-3xl pl-20 '> {productDetails.title} </h1> 
        : <div className="space-y-2">
            <Skeleton className="h-4 w-[300px]" />
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
        </div>
      }
      </div>

      {/* Product main Image  */}
      <div className='flex justify-start pl-20'>
        <div className='w-[60%] flex justify-center bg-[#f8f8f8] shadow-lg rounded-xl'>
          <div className='w-[400px] h-[400px]'>
            <img src={productDetails.thumbnail} alt="" className='w-full h-full' />
          </div>
        </div>
      </div>

      {/* Product additional images if any  */}
      <div className='pl-20'>
        {
        productDetails ? productDetails.images.map((individualImage,index)=>{
        return <div className="h-[150px] w-[250px] bg-[#fafafa] shadow-lg rounded-xl">
            <img src={individualImage} key={index} className='w-full h-full' />
          </div>
          }) :
        <div className="space-y-2">
            <Skeleton className="h-4 w-[300px]" />
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
        </div>
        }
      </div>  

      <p>{productDetails.description}</p>
      
      </section>


      
    </section>
  )
}

export default View