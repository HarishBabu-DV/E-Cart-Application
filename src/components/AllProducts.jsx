import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

const AllProducts = () => {

    //Products store
    const [products,setProducts]=useState([])

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
        <ul className='flex items-center justify-around'>
            {
                productCategories.map((productCategory)=>{
                    return <li className='bg-black text-white cursor:pointer px-3 py-2 rounded uppercase font-semibold' >{productCategory} Products</li>
                   
                })
            }
        </ul>
        {/* Card  */}
        <div className='grid grid-cols-3 justify-items-center max-lg:grid-cols-2 max-md:grid-cols-1 max-sm:grid-cols-1 gap-4 px-8'>

            {
                products.length >0 ?
                products.map((product,index)=>{
                    return  <ProductCard />
                }) : <p> No products found</p>
            }
           
            
        </div>
    </section>
    )
}
const productCategories=["All","beauty","fragrances","furniture","groceries"]
export default AllProducts