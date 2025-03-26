import React, { useEffect, useState } from "react";
const PAGE_SIZE = 15;
const Product = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const fetchProducts = async () => {
    try {
      const productRes = await fetch(
        "https://dummyjson.com/products?limit=100"
      );
      const productData = await productRes.json();
      console.log(productData.products);
      setProducts(productData.products);
    } catch (error) {
      console.log(error);
      setProducts([]);
    }
  };
  const productLength = products.length;
  const maxPage = Math.ceil(productLength / PAGE_SIZE);
  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  useEffect(() => {
    fetchProducts();
  }, []);
  const onPrevClick = () => {
    setCurrentPage((prev) => prev - 1);
  };
  const onNextClick = () => {
    setCurrentPage((prev) => prev + 1);
  };
  return (
    <div>
      {products.length > 0 ? (
        <>
          <div className="paginationDiv">
            <button
              disabled={currentPage == 0}
              onClick={onPrevClick}
              className={`pageNo ${currentPage == 0 ? "disabled" : ""}`}
            >
              {"<"}
            </button>
            {Array(maxPage)
              .keys()
              .map((mp, index) => {
                return (
                  <button
                    onClick={() => {
                      setCurrentPage(index);
                    }}
                    className={`pageNo ${index == currentPage ? "active" : ""}`}
                  >
                    {index + 1}
                  </button>
                );
              })}
            <button
              disabled={currentPage == maxPage - 1}
              onClick={onNextClick}
              className={`pageNo ${
                currentPage == maxPage - 1 ? "disabled" : ""
              }`}
            >
              {">"}
            </button>
          </div>
          <div className="productList">
            {products.slice(start, end).map((p, index) => {
              return (
                <div key={index} className="productItem">
                  <img src={p.thumbnail}></img>
                  <br />
                  {p.title}
                </div>
              );
            })}
          </div>
        </>
      ) : (
        "No Product Found"
      )}
    </div>
  );
};

export default Product;
