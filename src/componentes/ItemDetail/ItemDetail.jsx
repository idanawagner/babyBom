import Count from "../Count/Count"

import './ItemDetail.css'

const ItemDetail = ({ product }) => {
    return (

        <div className="itemDetail">
            <div>
                <img className="itemDetail__img" src={product.photo} alt="" />
            </div>
            <div className='itemDetail__prod'>
                <div>{product.name}</div>
                <div>{product.description}</div>
                <div>${product.price}</div>
                <div>Cantidad: {product.stock} Disponibles</div>
                <div><Count props={product} /></div>
            </div>
        </div>
    )
}

export default ItemDetail