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
        setDataForm({
            ...dataForm,
            [evt.target.name]: evt.target.value
        })
    }
    const handleSubmit = (evt) => {
        evt.preventDefault()
        let order = {}
        if (dataForm.name == '' || dataForm.email == '' || dataForm.repeatEmail == '' || dataForm.phone == '') {
            alert('Faltan cargar datos')
        } else {
            if (dataForm.email !== dataForm.repeatEmail) {
                alert('Error de validación: email ingresado incorrecto')
            } else {
                order.buyer = dataForm       // Setting the buyer property of the order object to the dataForm object.
                order.total = totalPrice()         // A function that is in the context of the cart.
                order.product = cartList.map(product => ({ id: product.id, name: product.name, price: product.price }))   // A function that is used to map the products that are in the cart.

                const db = getFirestore()
                const queryCollection = collection(db, 'orders')
                addDoc(queryCollection, order)
                    .then(resp => setIdOrder(resp.id))   // Setting the state of the idOrder.
                    .finally(() => {
                        setDataForm(form)   // Resetting the form.
                        deleteProductCart()   // A function that is in the context of the cart. It is used to delete the products from the cart.
                    })
            }
        }
    }
    return (
        <>
            {idOrder ?
                <div className='m-5'>

                    <span>Muchas gracias por su compra</span>
                    <div>Su código de orden es: {idOrder}</div>
                </div>
                :
                <form className='m-1' onSubmit={handleSubmit}>
                    <div className="row m-4">
                        <div className='col-md-12'>
                            <label className="col-sm-3 col-form-label">Nombre: </label>
                            <div className="col-sm-10">

                                <input type="text" className="form-control" name='name' placeholder='Ingrese nombre' value={dataForm.name} onChange={handleOnChange} />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <label className="col-sm-3 col-form-label">Telefono:</label>
                            <div className="col-sm-10">

                                <input type="text" className="form-control" name='phone' placeholder='Ingrese teléfono' value={dataForm.phone} onChange={handleOnChange} />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <label for="inputEmail3" className="col-sm-3 col-form-label"> Email:</label>
                            <div className="col-sm-10">
                                <input type="email" name='email' className="form-control" placeholder='Ingrese email' value={dataForm.email} onChange={handleOnChange} />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <label for="inputEmail3" className="col-sm-3 col-form-label">Repetir Email:</label>
                            <div className="col-sm-10">
                                <input type="email" className="form-control" name='repeatEmail' placeholder='Repetir email' onChange={handleOnChange} />
                            </div>
                        </div>
                    </div>
                    <Button className='ms-5' onClick={handleSubmit.bind()}>Enviar pedido</Button>
                </form>
            }
        </>
    )
}

export default Form