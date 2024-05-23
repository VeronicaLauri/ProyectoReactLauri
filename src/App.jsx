import './App.css'
import './components/navbar/navbar.jsx'
import Navbar from './components/navbar/navbar'
import ItemListContainer from './containers/itemlistcontainer/itemListContainer'
function App() {

  return (
    <div>
      <Navbar />
      <ItemListContainer greeting='¡Hola, Swifties!'/>
    </div>
  )
}

export default App

