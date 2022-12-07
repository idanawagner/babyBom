import { createContext, useState, useContext } from "react";


const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)


const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])
    const addToCart = (newProductCart) => {
        setCartList( [...cartList, newProductCart ]) 
    }
    const deleteCart = () => {
        setCartList([])
    }
    const deleteProductCart = ()  =>{
        setCartList([])
        console.log('eliminado')
    }
    const totalQuantity = () =>{
        return cartList.reduce((amount, product) => amount += product.amount ,0)
    }


    return(
        <CartContext.Provider value={{
            cartList,
            addToCart, 
            deleteCart,
            deleteProductCart,
            totalQuantity
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider