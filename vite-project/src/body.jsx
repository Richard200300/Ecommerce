import { React, useState } from "react";
import Navbar from "./navbar";

function Body() {
  const [productImg, setProductImg] = useState(0);
  const [items, setItems] = useState(0);
  const [data, setData] = useState({
    price: 125.0,
    total: "",
    productName: "Fall Limited Edition Sneakers",
    productDescription: `  These low-profile sneakers are you rperfect casual wear
    companion.Featuring a durable rubber outer Sole they'll withstand
    everything the weather can offer.`,
  });
  const img = [
    "image-product-1.jpg",
    "image-product-2.jpg",
    "image-product-3.jpg",
    "image-product-4.jpg",
  ];
  function handlecart() {
    setData({ ...data, total: items * data.price });
  }

  return (
    <div className="body-section">
      <Navbar data={data} setData={setData} items={items} />
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
          <h1 className="productName">{data.productName}</h1>

          <p>{data.productDescription}</p>
          <div>
            <p>$125.00</p>
            <p>50%</p>
          </div>
          <p>$250</p>
          <div className="flex atc">
          <div className=" item-cont">
            <div
              className="add-btn"
              onClick={() => {
                items === 0 ? setItems(items) : setItems(items - 1);
              }}
            >
              <img src="icon-minus.png" alt="icon-plus.png" />
            </div>

            <p className="item-num">{items}</p>
            <div
              className="sub-btn"
              onClick={() => {
                items === img.length ? setItems(items) : setItems(items + 1);
              }}
            >
              <img src="icon-plus.png" alt="icon-plus.png" />
            </div>
          </div>
          <button onClick={handlecart} className="checkout-btn ">Add to cart</button>
          </div>
          
        </section>
      </section>
    </div>
  );
}

export default Body;
