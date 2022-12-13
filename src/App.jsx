/* Importing the react-router-dom library and the bootstrap library. */
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

/* Importing the components from the components folder. */
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import Cart from './componentes/Cart/Cart';
import NotFound404 from './componentes/NotFound404/NotFound404';
import CartContextProvider from './Context/CartContext';
import Form from './componentes/Form/Form';

/* Importing the css file. */
import './App.css'

function App() {
    return (
        <HashRouter>
            <CartContextProvider>
                <NavBar />
                <Routes>
                    <Route path='/' element={<ItemListContainer />} />
                    <Route path='/category/:categoryId' element={<ItemListContainer />} />
                    <Route path='/detail/:productId' element={<ItemDetailContainer />} />
                    <Route path='/Cart' element={<Cart />} />
                    <Route path='/checkout' element={<Form />} />

                    <Route path='/404NotFound' element={<NotFound404 />} />
                    <Route path='*' element={<Navigate to='/404NotFound' />} />
                </Routes>
            </CartContextProvider>
        </HashRouter>
    )
}
export default App





