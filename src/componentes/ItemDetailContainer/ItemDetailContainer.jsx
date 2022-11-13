import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
  URL = `https://62ca4272d9ead251e8c5a07f.mockapi.io/babyBomData`
  const [productos, setProductos] = useState([])
  const { productoId } = useParams()

  useEffect(() => {
    if (productoId) {
      fetch(URL)
        .then(resp => resp.json())
        .then(data => setProductos(data.find(prod => prod.id === productoId)))
        .catch(err => console.log(err))

    } else {
      fetch(URL)
        .then(resp => resp.json())
        .then(data => setProductos(data))
        .catch(err => console.log(err))
    }
  }, [productoId])

  return (
    <>
      <ItemDetail productos={productos} key={productos.id} />
    </>
  )
}

export default ItemDetailContainer