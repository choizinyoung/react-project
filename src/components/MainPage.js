import React, { useEffect } from "react";
import "./MainPage.css";
import axios from "axios";
const MainPage = () => {
  let [products, setProducts] = React.useState([]);
  useEffect(() => {
    axios
      .get(
        "https://467d8964-752c-48b1-8a7c-c466261b6878.mock.pstmn.io/products"
      )
      .then((res) => {
        console.log(res)
        products = res.data.products;
        setProducts(products);
      })
      .catch((err) => {
        return console.log(err);
      });
  }, []);
  return (
    <>
      <div id="header">
        <div id="header-area">
          <img src="image/logo.png" alt="logo" />
        </div>
      </div>
      <div id="body">
        <div id="banner">
          <img src="image/banner1.jpg" alt="banner" />
        </div>
        <h2>Products</h2>
        <div id="product-list">
          {products && products.map((product,idx)=>{
            return (
              <div className="product-card" key={idx}>
              <div>
                <img
                  className="product-img"
                  src={product.imageUrl}
                  alt={product.key}
                />
              </div>
              <div className="product-content">
                <div className="product-seller">
                  <span>{product.seller} |</span><span>All</span>
                </div>
                <span className="product-name">{product.name}</span>
                <span className="product-price">{product.price}원</span>
              </div>
            </div>  
            )
          })}
        </div>
      </div>
      <div id="footer">
        <a href="#">회사소개</a>
        <a href="#">이용약관</a>
        <a href="#">통신판매업:123-1234</a>
        <a href="#">사업자등록번호:456-4567</a>
        <a href="#">개인정보...</a>
      </div>
    </>
  );
};
export default MainPage;
