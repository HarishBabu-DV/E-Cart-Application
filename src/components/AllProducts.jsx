import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import { Skeleton } from "../components/ui/skeleton"

const AllProducts = () => {

    //Products store
    const [products,setProducts]=useState([])
    const [menu,setMenu]=useState('All')
    //Function to get all products
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
      <section className='my-5'>
        <h2 className='text-center text-4xl font-bold py-5'>Products</h2>
        <ul className='flex items-center justify-center gap-4 flex-wrap'>
            {
                productCategories.map((productCategory,index)=>{
                    return <li className='bg-black text-white hover:cursor-pointer px-3 py-2 rounded uppercase font-semibold' onClick={()=>setMenu(productCategory)} key={index}>
                        {productCategory}
                    </li>
                   
                })
            }
        </ul>
        {/* Card  */}
        <div className='grid grid-cols-3 justify-items-center max-lg:grid-cols-2 max-md:grid-cols-1 max-sm:grid-cols-1 gap-4 px-8'>

            {
                products.length >0 
                ? products.filter((item)=>item.category === menu || menu === "All").
                map((product,index)=>{
                    return  <ProductCard item={product} key={index} />
                }) : 
                Array.from({length:9}).map((skeleton,index)=>(
                     <div className="flex flex-col space-y-3">
                    <Skeleton className="h-[125px] w-[250px] rounded-xl" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-[250px]" />
                      <Skeleton className="h-4 w-[200px]" />
                    </div>
                    </div>
                    ))       
            }
        </div>
    </section>
    )
}
const productCategories=["All","beauty","fragrances","furniture","groceries"]
export default AllProducts