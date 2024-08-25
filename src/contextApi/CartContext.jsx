import { createContext, useReducer } from "react";

export const CartContext = createContext();

const CartContextProvider = (props) => {

    const initialCartState = {
        cartItems: [],
        cartItemCount: 0,
        totalPrice: 0,
    };

   const [cart, dispatch] = useReducer((state, action) => {

    switch (action.type) {
        case "AddItem":

        const existingProductIndex = state.cartItems.findIndex(item => item.id === action.payload.id);

        let updatedCartItems;
        if (existingProductIndex >= 0) {
          // Product exists in cart, increase the count
          updatedCartItems = [...state.cartItems];
        updatedCartItems[existingProductIndex] = {
          ...updatedCartItems[existingProductIndex],
          count: updatedCartItems[existingProductIndex].count + 1,
        }
        } else {
          // Product does not exist in cart, add it with count 1
          updatedCartItems = [...state.cartItems, { ...action.payload, count: 1 }];
        }

        return{
            ...state,
          cartItems: updatedCartItems,
          cartItemCount: state.cartItemCount + 1, 
          totalPrice: state.totalPrice + action.payload.price,
        }

        default:
            return state;
      }

      
   }, initialCartState);

//   const [itemCount, setItemCount] = useState(0);
//   const [cartItems, setCartItems] = useState([]);
//   const [totalPrice, setTotalPrice] = useState(0);

  const addItem = (newItem) => { 

    dispatch({
        type: "AddItem",
        payload: newItem
    })
    // setItemCount((prev) => prev + 1);

    //   setCartItems((items) => [...items, newItem]);
   
    // setTotalPrice((prev) => prev + newItem.price);
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
