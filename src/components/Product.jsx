import UseProduct from "../customHooks/UseProduct";
import ProductList from "./ProductList";

const Product = () => {

    const {product} = UseProduct();

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 my-3">
    {
        product.map((prod) => {
            return <ProductList key={prod.id} item={prod}/>
        })
    }
    </div>
   
  );
};

export default Product;
