import { memo } from "react"

import Item from "../Item/Item"


const ItemList = memo(({ products }) => {
    return (
        <>
            {products.map(product =>
                <Item product={product} key={product.id} />
            )}
        </>
    )
})

export default ItemList