
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useCartContext } from "../../Context/CartContext"


const Cart = () => {

  const { cartList, deleteCart, deleteProductCart, totalPrice } = useCartContext()

  return (
    <div className="container m-5">
      {cartList.length !== 0 ?
        <>
          <h2>Carrito</h2>
          <ul>
            {cartList.map((product) => <li key={product.id}>
              <img src={product.photo} className="w-25" />
              Nombre: {product.name} - Precio {product.price} - cantidad: {product.amount}

              <Button className="m-2" onClick={() => deleteProductCart(product.id)} >Eliminar del carrito</Button>
            </li>
            )}
          </ul>
          <label htmlFor="">{totalPrice() !== 0 && totalPrice()}</label>
          <Button onClick={deleteCart}>Vaciar carrito</Button>
          <Link to='/checkout'><Button>Finalizar compra</Button></Link>
        </>
        :

        <>
          <h2>Tu carrito está vacío </h2>
          <Link to="/">
            <Button> Ir al inicio </Button>
          </Link>

        </>
      }
    </div>
  )
}

export default Cart