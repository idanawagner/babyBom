import Count from "../Count/Count"

import './ItemDetail.css'

const ItemDetail = ({ productos }) => {
    return (

        <div className="itemDetail">
            <div>
                <img className="itemDetail__img" src={productos.photo} alt="" />
            </div>
            <div className='itemDetail__prod'>
                <div>{productos.name}</div>
                <div>{productos.description}</div>
                <div>${productos.price}</div>
                <div>Cantidad: {productos.stock} Disponibles</div>
                <div><Count props={productos} /></div>
            </div>
        </div>
    )
}

export default ItemDetail