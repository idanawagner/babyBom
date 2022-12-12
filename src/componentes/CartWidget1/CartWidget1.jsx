import { BsCart3 } from "react-icons/bs";
import Button from 'react-bootstrap/Button';

import './CartWidget1.css'
import { useCartContext } from "../../Context/CartContext";

const CartWidget = () => {
    const { totalQuantity } = useCartContext()

    return (
        <div>
            <span className="m-3 ">{totalQuantity() !== 0 && totalQuantity()}</span>
            
            <Button >
                <BsCart3 className="fs-4" />
            </Button>
        </div>

    )
}

export default CartWidget