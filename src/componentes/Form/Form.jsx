import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useCartContext } from '../../Context/CartContext'

const Form = () => {
    const {cartList, totalPrice, deleteProductCart} = useCartContext()

    let form = {name: '', email:'', repeatEmail: '', phone:''}

    const [dataForm, setDataForm] = useState(form)
    const [idOrder, setIdOrder] = useState('')

    const handleOnChange = (evt) =>{
        setDataForm({
            ...dataForm,
            [evt.target.name]:evt.target.value
        })
    }
    const handleSubmit = (evt) => {
        evt.preventDefault()
        let order = {}
        order.buyer = dataForm
        order.total = totalPrice()
        order.product = cartList.map(product => ({id: product.id, name: product.name, price: product.price}))
        
        const db = getFirestore()
        const queryCollection = collection(db, 'orders')
        addDoc(queryCollection, order)
        .then(resp => setIdOrder(resp))
        console.log(idOrder)
        
        .finally(() => {
            setDataForm( form )
            deleteProductCart()
            
        })

    }
  return (
    <form onSubmit={handleSubmit}>
        <input type="text" name='name' placeholder='Ingrese nombre' value={dataForm.name} onChange={handleOnChange}/>
        <input type="text" name='email' placeholder='Ingrese email' value={dataForm.email} onChange={handleOnChange}/>
        <input type="text" name='repeatEmail' placeholder='Repetir email' onChange={handleOnChange}/>
        <input type="text" name='phone' placeholder='Ingrese teléfono' value={dataForm.phone} onChange={handleOnChange}/>

        <Button onClick={handleSubmit.bind()}>Enviar pedido</Button>
        <span>{idOrder}</span>
            
    </form>
  )
}

export default Form