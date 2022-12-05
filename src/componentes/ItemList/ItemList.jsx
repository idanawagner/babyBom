import { memo } from "react"

import Item from "../Item/Item"


const ItemList = memo(({products}) => {
    // console.log('hola')
    return (
        <>
            {products.map(product =>
                <Item product={product} key={product.id}/>
             )}
        </>
    )
})

export default ItemList