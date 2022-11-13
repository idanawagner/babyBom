import { BsCart3 } from "react-icons/bs";
import Button from 'react-bootstrap/Button';

import './CartWidget1.css'

const CartWidget = () => {

    return (
        <div>
            <Button >
                <BsCart3 className="fs-4" />
            </Button>
        </div>

    )
}

export default CartWidget