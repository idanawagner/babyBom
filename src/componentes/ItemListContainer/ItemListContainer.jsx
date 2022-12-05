import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getFirestore, doc, getDoc, getDocs, collection, query, where } from 'firebase/firestore'
import ItemList from "../ItemList/ItemList"

import './ItemListContainer.css'

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const { categoriaId } = useParams()
    //    URL = `https://62ca4272d9ead251e8c5a07f.mockapi.io/babyBomData`

    useEffect(() => {
        const dbFirestore = getFirestore()
        const queryCollection = collection(dbFirestore, 'productos')
        if (categoriaId) {
            let queryFilter = query(queryCollection, where('categoria', '==', categoriaId))
            getDocs(queryFilter)
                .then((resp) => setProducts(resp.docs.map(doc => ({ id: doc.id, ...doc.data() }))))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
                //  .then((doc) => setProduct(   { id: doc.id, ...doc.data() }  ))

        } else {
            getDocs(queryCollection)
                .then((resp) => setProducts(resp.docs.map(doc => ({ id: doc.id, ...doc.data() }))))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        }

        }, [categoriaId])
        console.log(products)
        console.log(categoriaId)

    // useEffect(() => {
    //     if (categoriaId) {
    //         fetch(URL)
    //             .then(resp => resp.json())
    //             .then(data => setProductos(data.filter(prod => prod.categoria === categoriaId)))
    //             .catch(err => console.log(err))

    //     } else {
    //         fetch(URL)
    //             .then(resp => resp.json())
    //             .then(data => setProductos(data))
    //             .catch(err => console.log(err))
    //     }

    // }, [categoriaId])
    // console.log(products)
    return (
        loading
            ?
            <div className="d-flex justify-content-center mt-5">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
            :
            <div className="itemListContainer">
                <ItemList products={products} />
            </div>
    )
}

export default ItemListContainer