import { React, useState } from "react";
import Navbar from "./navbar";

function Body() {
  const [productImg, setProductImg] = useState(0);
  const [items, setItems] = useState(0);
  const [data, setData] = useState({
    price: 125.00,
    total: "",
    productName : "Fall Limited Edition Sneakers",
    productDescription: `  These low-profile sneakers are you rperfect casual wear
    companion.Featuring a durable rubber outer Sole they'll withstand
    everything the weather can offer.`
  });
  const img = [
    "image-product-1.jpg",
    "image-product-2.jpg",
    "image-product-3.jpg",
    "image-product-4.jpg",
  ];
function handlecart() {
  setData({...data,
     total :  items * data.price})
}

  return (
    <div className="body-section">
      <Navbar 
      data={data}
      setData={setData}items={items}
      />
      <section className="flex main-cont">
        <section className="image-container">
          <section>
            <img src={img[productImg]} className="product-img" />
          </section>
        
          <section className="flex thumbnail-cont">
            <div
              onClick={() => {
                setProductImg(0);
              }}
            >
              <img
                src="image-product-1-thumbnail.jpg"
                alt="image-product-1-thumbnail"
                className={`${
                  productImg === 0 ? "active-thumbnail" : "thumbnail-img"
                }`}
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
                className={`${
                  productImg === 1 ? "active-thumbnail" : "thumbnail-img"
                }`}
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
                className={`${
                  productImg === 2 ? "active-thumbnail" : "thumbnail-img"
                }`}
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
                className={`${
                  productImg === 3 ? "active-thumbnail" : "thumbnail-img"
                }`}
              />
            </div>
          </section>
        </section>

        <section className="description-section">
          <h2>sneaker company</h2>
          <h1>{data.productName}</h1>

          <p>
          {data.productDescription}
          </p>
          <div>
            <p>$125.00</p>
            <p>50%</p>
          </div>
          <p>$250</p>
          <div>
            {items === 0 ? (
              <button>-</button>
            ) : (
              <button
                onClick={() => {
                  setItems(items - 1);
                }}
              >
                -
              </button>
            )}
            <p>{items}</p>
            {items === img.length ? (
              <button>+</button>
            ) : (
              <button
                onClick={() => {
                  setItems(items + 1);
                }}
              >
                +
              </button>
            )}
          </div>
          <button onClick={handlecart}>Add to cart</button>
          {items} * {data.price}  =  {data.total}
        </section>
        
      </section>
    </div>
  );
}

export default Body;
