import { useState } from 'react'
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {

  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState([])
  
  return (
    <div className="container mx-auto my-16">
      <Header />
      <div className="md:flex my-12 gap-x-3">
        <Formulario 
          pacientes={ pacientes }
          setPacientes={ setPacientes }
        />
        <ListadoPacientes 
          pacientes={ pacientes }
          setPaciente={ setPaciente }
        />
      </div>
    </div>
  )
} 

export default App
