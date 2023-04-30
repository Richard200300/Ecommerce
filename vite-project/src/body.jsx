import { React, useState } from "react";
import Navbar from "./navbar";

function Body() {
  const [productImg, setProductImg] = useState(0);
  const img = [
    "image-product-1.jpg",
    "image-product-2.jpg",
    "image-product-3.jpg",
    "image-product-4.jpg",
  ];
  return (
    <div className="body-section">
      <Navbar />
      <section>
      <section className="image-container">
        <section>
          <img src={img[productImg]} className="product-img"/>
        </section>
        {/* <button
          onClick={() => {
            setProductImg(productImg + 1);
          }}
        >
          next
        </button> */}
        <section className="flex thumbnail-cont">
          <div
          
            onClick={() => {
              setProductImg(0);
            }}
          >
            <img
              src="image-product-1-thumbnail.jpg"
              alt="image-product-1-thumbnail"
              className={`${productImg === 0 ? "active-thumbnail" : "thumbnail-img"}`}

            />
          </div>

          <div
            onClick={() => {
              setProductImg(1);
            }}
          >
            <img
              src="image-product-2-thumbnail.jpg"
              alt="image-product-2-thumbnail"
              className={`${productImg === 1 ? "active-thumbnail" : "thumbnail-img"}`}
            

            />
          </div>

          <div
            onClick={() => {
              setProductImg(2);
            }}
          >
            <img
              src="image-product-3-thumbnail.jpg"
              alt="image-product-3-thumbnail"
              className={`${productImg === 2 ? "active-thumbnail" : "thumbnail-img"}`}
              

            />
          </div>
          <div
            onClick={() => {
              setProductImg(3);
            }}
          >
            <img
              src="image-product-4-thumbnail.jpg"
              alt="image-product-4-thumbnail"
              className={`${productImg === 3 ? "active-thumbnail" : "thumbnail-img"}`}
             
            />
          </div>
        </section>
      </section>

<section>
<h2>
  sneaker company
</h2>
<h1>Fall Limited Edition Sneakers</h1>

<p>These low-profile sneakers are you rperfect casual wear companion.Featuring a durable rubber outer Sole they'll withstand everything the weather can offer. </p>
</section>

      </section>
      
    </div>
  );
}

export default Body;
