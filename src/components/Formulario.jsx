import { useState, useEffect } from 'react'
import ErrorFormulario from './ErrorFormulario'

const Formulario = ({ pacientes, setPacientes }) => {

  const [nombre, setNombre] = useState('')
  const [propietario, setPropietario] = useState('')
  const [email, setEmail] = useState('')
  const [fechaAlta, setFechaAlta] = useState('')
  const [sintomas, setSintomas] = useState('')

  const [isInvalid, setIsInvalid] = useState(false)

  const generarId = () => {
    const random = Math.random().toString(36).substring(2)
    const fecha = Date.now().toString(36)

    return random + fecha
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    /* Validación del formulario */

    if ([ nombre, propietario, email, fechaAlta, sintomas ].includes('')) {
      console.log("Hay al menos un campo vacío :(")
      setIsInvalid(true)
      return
    }
    console.log('Enviando Formulario...')
    setIsInvalid(false)

    /* Objeto de paciente */
    const pacienteObj = {
      nombre,
      propietario,
      email,
      fechaAlta,
      sintomas,
      id: generarId()
    }

    setPacientes([...pacientes, pacienteObj])

    // Reiniciar el formulario

    setNombre('')
    setPropietario('')
    setEmail('')
    setFechaAlta('')
    setSintomas('')

  }

  return (
    <div className="md:w-1/2 lg:2/5">
      <h2 className="font-bold text-3xl text-center">
        Seguimiento Pacientes
      </h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade tus pacientes y {''}
        <span className="text-[#156a6d] font-bold">
          Administralos
        </span>
      </p>
      <form 
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-8 px-5 h-[720px] flex flex-col justify-between"
      >
        { isInvalid && <ErrorFormulario><p className='font-bold text-white'>Todos los campos son obligatorios</p></ErrorFormulario> }
        <div>
          <div className="mb-5">
            <label htmlFor="mascota" className="block text-gray-700 font-bold">
              Nombre Mascota
            </label>
            <input 
              id="mascota"
              type="text"
              placeholder="Nombre de la mascota"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={nombre}
              onChange={(e)=>setNombre(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label htmlFor="propietario" className="block text-gray-700 font-bold">
              Nombre Propietario
            </label>
            <input 
              id="propietario"
              type="text"
              placeholder="Nombre del propietario"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={propietario}
              onChange={(e)=>setPropietario(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label htmlFor="emailPropietario" className="block text-gray-700 font-bold">
              Email Propietario
            </label>
            <input 
              id="emailPropietario"
              type="email"
              placeholder="Email del Propietario"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label htmlFor="fechaAlta" className="block text-gray-700 font-bold">
              Fecha Alta
            </label>
            <input 
              id="fechaAlta"
              type="date"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={fechaAlta}
              onChange={(e)=>setFechaAlta(e.target.value)}
            />
          </div>

          <div className="mb-5">
          <label htmlFor="sintomas" className="block text-gray-700 font-bold">
            Síntomas
          </label>
          <textarea 
            id="sintomas"
            rows="4"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los síntomas de tu mascota"
            value={sintomas}
            onChange={(e)=>setSintomas(e.target.value)}
          />
          </div>
        </div>
        
        <div className="container flex justify-center">
          <input
            type="submit"
            className="bg-[#156a6d] text-white rounded-md py-2 font-bold w-4/5 hover:bg-[#156a6d] cursor-pointer transition-all"
            value="Agregar Paciente"
          />
        </div>

      </form>
    </div>
  )
}

export default Formulario