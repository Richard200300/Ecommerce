import { React, useState } from "react";
import Navbar from "./navbar";

function Body() {
  const [productImg, setProductImg] = useState(0);
  const [items, setItems] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const [imgPop, setImgPop] = useState(false);


  function handleimgPop() {
    setImgPop(true);
  }

  const [data, setData] = useState({
    price: 125.0,
    total: "",
    percentOff: 50,
    formerPrice: 250,
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
    setShowCart(true);
  }

  return (
    <section className="body-section">
      <Navbar
        data={data}
        setData={setData}
        items={items}
        setItems={setItems}
        showCart={showCart}
        setShowCart={setShowCart}
   
      />
      <div className={`${imgPop ? "pop-up-container" : "active-pop-up"}`}>
        <section className="popup-container">
          <section className="image-container">
            <section className="popimg-cont">
              <img src={img[productImg]} className="popup-img" alt={img[productImg]}/>
              <div
                className="pointer"
                onClick={() => {
                  productImg === 0
                    ? setProductImg(0)
                    : setProductImg(productImg - 1);
                }}
              >
                <img
                  src="icon-previous.png"
                  alt="icon-previous"
                  className="prev-popup"
                />
              </div>
              <div
                className="pointer"
                onClick={() => {
                  productImg === img.length - 1
                    ? setProductImg(productImg)
                    : setProductImg(productImg + 1);
                }}
              >
                <img
                  src="icon-next.png"
                  alt="icon-previous"
                  className="next-popup"
                />
              </div>
              <div
                onClick={() => {
                  setImgPop(false);
                }}
                className="pointer"
              >
           
                <div className="cancel-popup">&times;</div>
              </div>

              <section className="flex thumbnail-cont1">
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
          </section>
        </section>
      </div>
      
      <section className="flex main-cont">
        <section className="image-container">
          <section>
            <img
              src={img[productImg]}
              alt={img[productImg]}
              className="product-img"
              onClick={handleimgPop}
            />
          </section>
          <section className="mobile-img-cont">
            <img
              src={img[productImg]}
              alt={img[productImg]}
              className="product-img1"
            />
               <div
                className="pointer"
                onClick={() => {
                  productImg === 0
                    ? setProductImg(0)
                    : setProductImg(productImg - 1);
                }}
              >
                <img
                  src="icon-previous.png"
                  alt="icon-previous"
                  className="mobile-prev"
                />
              </div>
              <div
                className="pointer"
                onClick={() => {
                  productImg === img.length - 1
                    ? setProductImg(productImg)
                    : setProductImg(productImg + 1);
                }}
              >
                <img
                  src="icon-next.png"
                  alt="icon-previous"
                  className="mobile-next"
                />
              </div>
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

          <p className="productDescription">{data.productDescription}</p>
          <div className="all-price-cont">
          <div className="flex atc price-cont">
            <p className="current-price">${data.price}.00</p>
            <p className="percent-off">{data.percentOff}%</p>
          </div>
          <p className="former-price">${data.formerPrice}</p>
          </div>
          <div className="flex atc item-flex-cont">
            <div className="flex item-cont">
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
            <button onClick={handlecart} className="checkout-btn ">
              Add to cart
            </button>
          </div>
        </section>
      </section>
    </section>
  );
}

export default Body;
