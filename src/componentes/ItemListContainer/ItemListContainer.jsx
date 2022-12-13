import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getFirestore, getDocs, collection, query, where } from 'firebase/firestore'

import ItemList from "../ItemList/ItemList"
import Loading from "../Loading/Loading"

import './ItemListContainer.css'

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    // A hook that is called when the component is mounted and when the categoryId changes.
    useEffect(() => {
        const dbFirestore = getFirestore()
        const queryCollection = collection(dbFirestore, 'productos')

        let queryFilter = categoryId ?
            query(queryCollection, where('category', '==', categoryId))
            :
            queryCollection
        getDocs(queryFilter)
            .then((resp) => setProducts(resp.docs.map(doc => ({ id: doc.id, ...doc.data() }))))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))

    }, [categoryId])


    return (
        loading
            ?
            <Loading />
            :
            <div className="itemListContainer">
                <ItemList products={products} />
            </div>
    )
}

export default ItemListContainer