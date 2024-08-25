import { useContext } from "react";
import { CartContext } from "../contextApi/CartContext";

const ProductList = ({item}) => {

  const {addItem} = useContext(CartContext);

    return ( 
        <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img
          src={item.img}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <div className="flex justify-between items-center">
          <h2 className="card-title">{item.name}!</h2>
          <span className="price-tag">${item.price}</span>
        </div>
        <p>{item.description}</p>
        <div className="card-actions justify-end">
          <button onClick={() => addItem(item)} className="btn btn-primary">Add To Cart</button>
        </div>
      </div>
    </div>
     );
}
 
export default ProductList;