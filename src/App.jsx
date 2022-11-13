import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import Cart from './componentes/Cart/Cart';
import NotFound404 from './componentes/NotFound404/NotFound404';

import './App.css'

function App() {
    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
                <Route path='/detail/:productoId' element={<ItemDetailContainer/>} />
                <Route path='/Cart' element = {<Cart/>}/>

                <Route path='/404NotFound' element={<NotFound404/>} />
                <Route path='*' element={<Navigate to='/404NotFound' />} />
            </Routes>
        </BrowserRouter>
    )
}
export default App





