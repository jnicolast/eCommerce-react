import './App.css'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'

function App() {
 const message = 'No se encontraron los productos';
  return (
    <>
     <NavBar/> 
     <ItemListContainer message={message}/>    
    </>
  )
}

export default App
