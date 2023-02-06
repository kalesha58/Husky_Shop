import React, { Fragment } from 'react'
import {CgMouse} from "react-icons/all"
import "./Home.css"
import ProductCard from './ProductCard'
import MetaData from "../layout/MetaData"
const product=
{
  name:"Blue",
  price:"$200",
  _id:"kanna",
  images:[{url:"https://cdn.shopify.com/s/files/1/0266/6276/4597/products/100001_300887153_060_1_1024x1024.jpg?v=1672824094"}]
}
const Home = () => {
  return (
    <Fragment>
      <MetaData title="Husky-shop"/>
      <div className='banner' >
      <p>Welcome to Husky Shop</p>
      <h1>Find Amazing proudtcs Below </h1>
     <a href="#container">
      <button>Scroll<CgMouse /></button>
     </a>
      </div>
      <h2 className='homeHeading' >Featured product</h2>
      <div className="container" id="container">
            {/* {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))} */}
              <ProductCard product={product} />
              <ProductCard product={product} />
              <ProductCard product={product} />
              <ProductCard product={product} />
              <ProductCard product={product} />
              <ProductCard product={product} />
              <ProductCard product={product} />
              <ProductCard product={product} />
          </div>
    </Fragment>
  )
}

export default Home
