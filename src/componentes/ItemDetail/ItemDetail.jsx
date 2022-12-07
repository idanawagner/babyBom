import { useState } from "react"
import { Link } from "react-router-dom"
import { useCartContext } from "../../Context/CartContext"
import Count from "../Count/Count"

import './ItemDetail.css'

const ItemDetail = ({ product }) => {
    const [isCounter, setIsCounter] = useState(true)
    const {cartList, addToCart} = useCartContext()

    const onAdd = (amount) => {
        addToCart( { ...product, amount } )
        setIsCounter(false)
      }


    return (

        <div className="itemDetail">
            <div>
                <img className="itemDetail__img" src={product.photo} alt="" />
            </div>
            <div className='itemDetail__prod'>
                <div>{product.name}</div>
                <div>{product.description}</div>
                <div>${product.price}</div>
                <div>Cantidad: {product.stock} Disponibles</div>
                <div>
                    {
                        isCounter ?
                        <Count props={product} onAdd={onAdd} />
                        :
                        <div className="container mt-5">
                        <Link to='/cart' className="btn ">Ir al carrito</Link>
                        <Link to='/' className="btn ">Seguir Comprando </Link>
                    </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default ItemDetail