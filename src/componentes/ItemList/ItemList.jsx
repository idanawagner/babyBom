import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Item from "../Item/Item"

const ItemList = () => {
    const [productos, setProductos] = useState([])
    const { categoriaId } = useParams()
    URL = `https://62ca4272d9ead251e8c5a07f.mockapi.io/babyBomData`

    useEffect(() => {
        if (categoriaId) {
            fetch(URL)
                .then(resp => resp.json())
                .then(data => setProductos(data.filter(prod => prod.categoria === categoriaId)))
                .catch(err => console.log(err))

        } else {
            fetch(URL)
                .then(resp => resp.json())
                .then(data => setProductos(data))
                .catch(err => console.log(err))
        }

    }, [categoriaId])

    return (
        <>
            {productos.map(prod =>
                <Item product={prod} key={prod.id} />
            )}
        </>
    )
}

export default ItemList