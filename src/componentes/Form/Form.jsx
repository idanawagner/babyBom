import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useCartContext } from '../../Context/CartContext'

const Form = () => {
    const { cartList, totalPrice, deleteProductCart } = useCartContext()

    let form = { name: '', email: '', repeatEmail: '', phone: '' }

    const [dataForm, setDataForm] = useState(form)
    const [idOrder, setIdOrder] = useState('')

    //When the user types in the input field, the value of the input field is set to the value of the state.
    const handleOnChange = (evt) => {
        evt.target.name === ''|| evt.target.email !== evt.target.repeatEmail || evt.target.phone ===''?
        alert('Faltan datos')
        :

        setDataForm({
            ...dataForm,
            
            [evt.target.name]: evt.target.value
        })
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        let order = {}
        order.buyer = dataForm       // Setting the buyer property of the order object to the dataForm object.
        order.total = totalPrice()         // A function that is in the context of the cart.
        order.product = cartList.map(product => ({ id: product.id, name: product.name, price: product.price }))   // A function that is used to map the products that are in the cart.

        const db = getFirestore()
        const queryCollection = collection(db, 'orders')
        addDoc(queryCollection, order)
            .then(resp =>setIdOrder(resp.id))   // Setting the state of the idOrder.
            
            .finally(() => { 
                setDataForm( form )   // Resetting the form.
                deleteProductCart()   // A function that is in the context of the cart. It is used to delete the products from the cart.
            
        })
    }
    return (
        <>
            {idOrder ?
            <>
            <span>Muchas gracias por su compra, su código de orden es: {idOrder}</span>
            </>
            : 
                <form onSubmit={handleSubmit}>
                    <input type="text" name='name' placeholder='Ingrese nombre' value={dataForm.name} onChange={handleOnChange} />
                    <input type="text" name='email' placeholder='Ingrese email' value={dataForm.email} onChange={handleOnChange} />
                    <input type="text" name='repeatEmail' placeholder='Repetir email' onChange={handleOnChange} />
                    <input type="text" name='phone' placeholder='Ingrese teléfono' value={dataForm.phone} onChange={handleOnChange} />

                    <Button onClick={handleSubmit.bind()}>Enviar pedido</Button>
                </form>
            }
        </>
    )
}

export default Form