import { BsCart3 } from "react-icons/bs";
import Button from 'react-bootstrap/Button';
import { useState } from "react";

import './CartWidget1.css'

const CartWidget = () => {
    const [contador, setContador] = useState(0)
    const sumar = () => {
        setContador(contador + 1)
    }
    return (
        <div>
            {contador}
            <Button onClick={sumar} >
                <BsCart3 className="fs-4" />
            </Button>

        </div>

    )
}

export default CartWidget