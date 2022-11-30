const Formulario = () => {
  return (
    <div className="md:w-1/2 lg:2/5">
      <h2 className="font-bold text-3xl text-center">
        Seguimiento Pacientes
      </h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade tus pacientes y {''}
        <span className="text-indigo-600 font-bold">
          Administralos
        </span>
      </p>
      <form className="bg-white shadow-md rounded-lg py-10 px-5">
        <div className="mb-5">
          <label htmlFor="mascota" className="block text-gray-700 font-bold">
            Nombre Mascota
          </label>
          <input 
            id="mascota"
            type="text"
            placeholder="Nombre de la mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
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
          />
        </div>
        
        <div className="container flex justify-center">
          <input
            type="submit"
            className="bg-indigo-600 text-white rounded-md py-2 font-bold w-4/5 hover:bg-indigo-800 cursor-pointer transition-all"
            value="Agregar Paciente"
          />
        </div>

      </form>
    </div>
  )
}

export default Formulario