import { useState } from 'react'
import reactLogo from './assets/react.svg'

import NavBar from './componentes/NavBar/NavBar'
import Titulo from './componentes/Titulo/Titulo'

import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'


import './App.css'

function App() {

    const saludo= 'Pagina en proceso'

    return (
        <div>
            <Titulo titulo='Baby Bom' subtitulo='Tienda de producto'/>
            <NavBar />
         
            <ItemListContainer greeting={saludo}/>
        </div>
    )
}
export default App





