

import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'

import './App.css'

function App() {

    const saludo= 'Pagina en proceso'

    return (
        <div>
            
            <NavBar />
         
            <ItemListContainer greeting={saludo}/>
        </div>
    )
}
export default App





