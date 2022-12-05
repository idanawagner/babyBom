import { BsFillPatchMinusFill, BsFillPatchPlusFill } from "react-icons/bs";
import Button from 'react-bootstrap/Button';
import { useState } from "react";

import './Count.css'

const Count = ({ props }) => {
    const [count, setCount] = useState(1)

    const add = () => {
        count < props.stock ? setCount(count + 1) : null
    }
    const subtract = () => {
        count == 1 ? null : setCount(count - 1)
    }
    const addAmount = () => {
        add
    }

    
    return (
        <div>
            <div>
                <Button className="m-2" onClick={subtract}>
                    <BsFillPatchMinusFill className="fs-3" />
                </Button>
                {count}
                <Button className="m-2" onClick={add} >
                    <BsFillPatchPlusFill className="fs-3" />
                </Button>
            </div>
            <div>
                <Button className="m-2" onClick={addAmount}>Añadir al carrito</Button>
            </div>
        </div>
    )
}

export default Count