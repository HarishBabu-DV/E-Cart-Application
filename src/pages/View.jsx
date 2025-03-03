import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { Skeleton } from '../components/ui/skeleton'
const View = () => {

  // To get Routes
  const location=useLocation();
  const path=location.pathname.split('/')
  const {id}=useParams()
  // product details 
  const [productDetails,setProductDetails]=useState({})
// dollar to inr 
  const inr=productDetails.price *80
  const getProductData=async ()=>{
    try {
      const res=await fetch(`https://dummyjson.com/products/${id}`)
      const data=await res.json()
      console.log(data);
      setProductDetails(data)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    getProductData()
  },[])
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
      <div className='pl-20 flex items-center gap-x-8'>
        {
          productDetails.images ? 
          productDetails.images.map((individualImage,index)=>{
          return <div key={index} className="h-[150px] w-[250px] bg-[#fafafa] shadow-lg rounded-xl">
              <img src={individualImage} className='w-full h-full' />
            </div>
            }) :<div className="space-y-2">
              <Skeleton className="h-4 w-[300px]" />
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
          </div>
        }
      </div>  
      <div className='pl-20  flex items-center justify-between w-[60%] '>
        <div className='flex items-center gap-x-3'>
          <h3 className='font-medium text-3xl'>₹ {inr.toFixed()}</h3>   
          <span className="font-normal text-3xl text-green-500">
              {productDetails.discountPercentage}%
          </span>
        </div>
        <p className='text-2xl font-normal'>In stock : <span className='text-green-500'>{productDetails.stock}</span> </p>
      </div>
      <p className='pl-20 py-6 text-lg font-light'>{productDetails.description}</p>
      
      </section>


      
    </section>
  )
}

export default View