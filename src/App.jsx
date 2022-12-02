import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {
  return (
    <div className="container mx-auto my-16">
      <Header />
      <div className="md:flex my-12">
        <Formulario />
        <ListadoPacientes />
      </div>
    </div>
  )
} 

export default App
