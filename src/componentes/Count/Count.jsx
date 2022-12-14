import { BsFillPatchMinusFill, BsFillPatchPlusFill } from "react-icons/bs";
import Button from 'react-bootstrap/Button';
import { useState } from "react";

import './Count.css'

const Count = ({ props, onAdd }) => {
    const [amount, setAmount] = useState(1)

    //If the amount is less than the stock, then add one to the amount.
    const add = () => {
        amount < props.stock ? setAmount(amount + 1) : null
    }

    // If the amount is equal to 1, do nothing, otherwise, subtract 1 from the amount.
    const subtract = () => {
        amount == 1 ? null : setAmount(amount - 1)
    }

    //When the add button is clicked, the amount is added to the total.
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