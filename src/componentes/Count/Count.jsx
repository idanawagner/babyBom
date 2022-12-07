import { BsFillPatchMinusFill, BsFillPatchPlusFill } from "react-icons/bs";
import Button from 'react-bootstrap/Button';
import { useState } from "react";

import './Count.css'

const Count = ({ props , onAdd }) => {
    const [amount, setAmount] = useState(1)

    const add = () => {
        amount < props.stock ? setAmount(amount + 1) : null
    }
    const subtract = () => {
        amount == 1 ? null : setAmount(amount - 1)
    }
    const addAmount = () => {
        onAdd(amount)
    }
    
    return (
        <div>
            <div>
                <Button className="m-2" onClick={subtract}>
                    <BsFillPatchMinusFill className="fs-3" />
                </Button>
                {amount}
                <Button className="m-2" onClick={add} >
                    <BsFillPatchPlusFill className="fs-3" />
                </Button>
            </div>
            <div>
                <Button className="m-2" onClick={addAmount} >Añadir al carrito</Button>
            </div>
        </div>
    )
}

export default Count