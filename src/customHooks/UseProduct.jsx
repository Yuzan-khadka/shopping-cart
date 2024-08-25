import { useState, useEffect } from "react";

const UseProduct = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("./product.json")
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, []);
  return { product };
};

export default UseProduct;
