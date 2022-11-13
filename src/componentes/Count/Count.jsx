import { BsFillPatchMinusFill, BsFillPatchPlusFill } from "react-icons/bs";
import Button from 'react-bootstrap/Button';
import { useState } from "react";

import './Count.css'

const Count = ({ props }) => {
    const [count, setCount] = useState(1)

    const sumar = () => {
        count < props.stock ? setCount(count + 1) : null
    }
    const restar = () => {
        count == 1 ? null : setCount(count - 1)
    }
    
    return (
        <div>
            <div>
                <Button className="m-2" onClick={restar}>
                    <BsFillPatchMinusFill className="fs-3" />
                </Button>
                {count}
                <Button className="m-2" onClick={sumar} >
                    <BsFillPatchPlusFill className="fs-3" />
                </Button>
            </div>
            <div>
                <Button className="m-2">Añadir al carrito</Button>
            </div>
        </div>
    )
}

export default Count