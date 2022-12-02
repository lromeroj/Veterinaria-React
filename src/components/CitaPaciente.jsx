const CitaPaciente = () => {
  return (
    <div className="md:mx-3 bg-white shadow-md px-6 py-6 rounded-md">
        <p className="font-bold mb-3 text-gray-700 uppercase">
            Nombre: {''}
            <span className="font-normal normal-case">
                Hachi
            </span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
            Propietario: {''}
            <span className="font-normal normal-case">
                Marcela
            </span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
            Email: {''}
            <span className="font-normal normal-case">
                marcela@gmail.com
            </span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
            Fecha Alta: {''}
            <span className="font-normal normal-case">
                02 Diciembre de 2022
            </span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
            Síntomas: {''}
            <span className="font-normal normal-case">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </span>
        </p>
    </div>
  )
}

export default CitaPaciente