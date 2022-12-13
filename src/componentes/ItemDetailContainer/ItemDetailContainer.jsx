import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getFirestore, doc, getDoc } from 'firebase/firestore'

import ItemDetail from "../ItemDetail/ItemDetail"
import Loading from "../Loading/Loading"

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true)
  const { productId } = useParams()

  // A function that is called when the component is mounted and when the productId changes.
  useEffect(() => {
    const db = getFirestore()
    const queryDoc = doc(db, 'productos', productId)
    getDoc(queryDoc)
      .then(doc => setProduct({ id: doc.id, ...doc.data() }))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
  }, [productId])


  return (
    loading
      ?
      <Loading />
      :
      <ItemDetail product={product} />

  )
}

export default ItemDetailContainer