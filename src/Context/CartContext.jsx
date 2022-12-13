import { createContext, useState, useContext } from "react";


const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)


const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState([])

    //If the product is in the cart, return the index of the product in the cart, otherwise return -1.
    const isInCart = (id) => cartList.findIndex(product => product.id === id)

    //If the product is not in the cart, add it to the cart. If it is in the cart, increase the amount of the product in the cart.
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

    // When the deleteCart function is called, set the cartList array to an empty array.
    const deleteCart = () => {
        setCartList([])
    }

    //Delete the product from the cart list by removing the product from the cart list.
    const deleteProductCart = (id) => {
        cartList.splice(isInCart(id), 1)
        setCartList([...cartList])
    }

    //The totalQuantity function returns the sum of the amount property of each product in the cartList array.
    // @returns The total amount of products in the cart.
    const totalQuantity = () => {
        return cartList.reduce((amount, product) => amount += product.amount, 0)
    }

    //The totalPrice function returns the sum of the price of each product in the cartList multiplied by the amount of each product in the cartList. 
    // @returns The total price of all the products in the cart.
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