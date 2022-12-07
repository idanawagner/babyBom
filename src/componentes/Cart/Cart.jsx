
import { Button } from "react-bootstrap"
import { useCartContext } from "../../Context/CartContext"


const Cart = () => {

  const { cartList, deleteCart, deleteProductCart} = useCartContext()

  return (
    <div>
      <h1>Carrito</h1>
      <ul>
        {cartList.map((product) => <li key={product.id}>
          <img src={product.photo} className="w-25" />
          Nombre: {product.name} - Precio {product.price} - cantidad: {product.amount}

          <Button className="m-2" onClick={deleteProductCart} >Eliminar del carrito</Button>
        </li>
        )}
      </ul>
      <Button onClick={deleteCart}>Vaciar carrito</Button>
    </div>
  )
}

export default Cart