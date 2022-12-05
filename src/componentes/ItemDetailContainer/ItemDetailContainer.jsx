import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getFirestore, doc, getDoc } from 'firebase/firestore'

import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
  // URL = `https://62ca4272d9ead251e8c5a07f.mockapi.io/babyBomData`
  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(true)
  const { productId } = useParams()


  console.log(productId)
  useEffect(() => {
    const db = getFirestore()
    const queryDoc = doc(db, 'productos', productId)
    getDoc(queryDoc)
    .then((doc) => setProduct( { id: doc.id, ...doc.data() } ))
    .catch(err => console.log(err))
    .finally(() => setLoading(false))
    console.log(id)
  }, [productId])
  console.log(product)
  console.log(productId)



  // useEffect(() => {
  //   const dbFirestore = getFirestore()
  //   const queryCollection = collection(dbFirestore, 'productos')
  //   if (productId) {
  //       let queryFilter = query(queryCollection, where('categoria', '==', productId))
  //       getDoc(queryFilter)
  //           .then((resp) => setProducts(resp.docs.map(doc => ({ id: doc.id, ...doc.data() }))))
  //           .catch(err => console.log(err))
  //           .finally(() => setLoading(false))
  //       //      .then((doc) => setProduct(   { id: doc.id, ...doc.data() }  ))

  //   } else {
  //       getDoc(queryCollection)
  //           .then((resp) => setProduct(resp.docs.map(doc => ({ id: doc.id, ...doc.data() }))))
  //           .catch(err => console.log(err))
  //           .finally(() => setLoading(false))
  //   }

  //   }, [productId])
  // useEffect(() => {
  //   if (productoId) {
  //     fetch(URL)
  //       .then(resp => resp.json())
  //       .then(data => setProductos(data.find(prod => prod.id === productoId)))
  //       .catch(err => console.log(err))

  //   } else {
  //     fetch(URL)
  //       .then(resp => resp.json())
  //       .then(data => setProductos(data))
  //       .catch(err => console.log(err))
  //   }
  // }, [productoId])

  return (
    loading
      ?
      <div className="d-flex justify-content-center mt-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
      :
      <ItemDetail product={product} key={product.id}/>

  )
}

export default ItemDetailContainer