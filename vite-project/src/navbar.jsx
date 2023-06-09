import { React, useState } from "react";

function Navbar({ setData, data, items, setShowCart, showCart, setItems }) {
  function handlecart() {
    setData({ ...data, total: items * data.price });
    setShowCart((prevcart) => !prevcart);
  }

  const [togglemenu, setToggleMenu] = useState(false);

  const img = [
    "image-product-1.jpg",
    "image-product-2.jpg",
    "image-product-3.jpg",
    "image-product-4.jpg",
  ];

  return (
    <nav className="navbar flex jcSb">
      <div className="flex atc nav-logo-cont">
        <div className="flex atc logo-container">
          <img
            src="icon-menu.png"
            alt='icon-menu.png'
            className="menu"
            onClick={() => {
              setToggleMenu(true);
            }}
          />
          <img src="logo.png" alt="logo.png"/>
        </div>

        <div
          className={`${togglemenu ? "ul-container" : "ul-container-active"}`}
        >
          <ul className="flex atc nav-ul">
            <img
              src="icon-close.png"
              alt="icon-close.png"
              className="hide-menu"
              onClick={() => {
                setToggleMenu(false);
              }}
            />
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>

      <div className="flex atc">
        <img src="icon-cart.png" onClick={handlecart} className="cart-icon" alt='icon-cart.png'/>
        <img src="image-avatar.png" className="nav-dp-img" alt="image-avatar.png"/>
      </div>
      {showCart && (
        <div className="hidden-cart">
          <p className="cart-text">Cart</p>
          {data.total ? (
            <div className="filled-cart">
              <div className="flex mini-cont atc">
                <img src={img[0]} className="cart-img" alt={img[0]}/>
                <div>
                  <p className="cart-product-name">{data.productName}</p>
                  <p>
                    ${data.price}.00 x {items}{" "}
                    <span className="total-price"> ${data.total}.00</span>
                  </p>
                </div>

                <img
                  className="pointer"
                  src="icon-delete.png"
                  alt='icon-delete.png'
                  onClick={() => {
                    setData({ ...data, total: false });
                    setItems(0);
                  }}
                />
              </div>

              <button className="checkout-btn">Checkout</button>
            </div>
          ) : (
            <div className="emptycart">Your cart is empty</div>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
