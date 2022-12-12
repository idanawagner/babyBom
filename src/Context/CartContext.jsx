import { addDoc, collection, getFirestore } from "firebase/firestore";
import { createContext, useState, useContext } from "react";


const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)


const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState([])

    const isInCart = (id) => cartList.findIndex(product => product.id === id)

    const addToCart = (newProductInCart) => {
        let index = isInCart(newProductInCart.id)
        if (index == -1) {
            setCartList([...cartList, newProductInCart])
        }
        else {
            cartList[index].amount += newProductInCart.amount
            setCartList([...cartList])
        }
    }
    const deleteCart = () => {
        setCartList([])
    }

    const deleteProductCart = (id) => {
        cartList.splice(isInCart(id), 1)
        setCartList([...cartList])
    }

    const totalQuantity = () => {
        return cartList.reduce((amount, product) => amount += product.amount, 0)
    }
    const totalPrice = () => {
        return cartList.reduce((totalPrice, product) => totalPrice += (product.price * product.amount), 0)
    }


    return (
        <CartContext.Provider value={{
            cartList,
            addToCart,
            deleteCart,
            deleteProductCart,
            totalQuantity,
            totalPrice
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider