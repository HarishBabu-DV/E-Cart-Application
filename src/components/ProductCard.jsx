import { Link } from "react-router-dom";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
// import Link from "next/link";

const ProductCard = ({item}) => {
  const inr=item.price*80
  return (
    <CardContainer className="inter-var pt-4 ">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[300px] max-sm:max-w-[300px] max-sm:w-full h-[100%] rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {item.title}
        </CardItem>
       
        <CardItem translateZ="100" className="w-3/4 mx-auto">
          <img
            src={item.thumbnail}
            
            className="h-52 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-0">
          <CardItem
            translateZ={20}
            // as={Link}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
          <p className="font-medium text-lg flex flex-wrap items-center gap-2 max-sm:text-sm">
             ₹ {inr.toFixed()} 
            <span className="text-green-500">
              {item.discountPercentage}%
            </span>
          </p>
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            <Link to={`/view/${item.id}`}>View</Link>
            
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  )
}

export default ProductCard