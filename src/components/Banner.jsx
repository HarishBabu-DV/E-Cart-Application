import React from 'react'
import Carousel from './ui/carousel';
const slideData = [
    {
      title: "Perform with Mouse",
      button: "Explore Mouse",
      src: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Listen anytime",
      button: "Explore treasure inside buds",
      src: "https://images.unsplash.com/photo-1606741965509-717b9fdd6549?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Explore Fashion",
      button: "Explore it",
      src: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Love yourself with fashion",
      button: "Explore to enjoy",
      src: "https://images.unsplash.com/photo-1554568218-0f1715e72254?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
const Banner = () => {
  return (
    <div className="relative overflow-hidden w-full h-full py-24">
    <Carousel slides={slideData}/>
    </div>
  )
}

export default Banner