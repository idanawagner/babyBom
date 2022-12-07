import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getFirestore, doc, getDoc, getDocs, collection, query, where } from 'firebase/firestore'
import ItemList from "../ItemList/ItemList"

import './ItemListContainer.css'
import Loading from "../Loading/Loading"

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    // const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()
    // const { productId } = useParams()
    
    useEffect(() => {
        const dbFirestore = getFirestore()
        const queryCollection = collection(dbFirestore, 'productos')
        if (categoryId) {
            let queryFilter = query(queryCollection, where('category', '==', categoryId))
            getDocs(queryFilter)
                .then((resp) => setProducts(resp.docs.map(doc => ({ id: doc.id, ...doc.data() }))))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
                // .then((doc) => setProduct(   { id: doc.id, ...doc.data() }  ))

        } else {
            getDocs(queryCollection)
                .then((resp) => setProducts(resp.docs.map(doc => ({ id: doc.id, ...doc.data() }))))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        }

        }, [categoryId])


    return (
        loading
            ?
            <Loading/>
            :
            <div className="itemListContainer">
                <ItemList products={products} />
            </div>
    )
}

export default ItemListContainer