import { BsCart3 } from "react-icons/bs";
import Button from 'react-bootstrap/Button';

import './CartWidget1.css'
import { useCartContext } from "../../Context/CartContext";

const CartWidget = () => {
    const { totalQuantity } = useCartContext()
    // The totalQuantity function returns the total quantity of items in the cart.

    return (
        <div>
            <span className="position-absolute badge rounded-pill">{totalQuantity() !== 0 && totalQuantity()}</span>
            <Button >
                <BsCart3 className="fs-4" />
            </Button>
        </div>

    )
}

export default CartWidget