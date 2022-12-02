import CitaPaciente from "./CitaPaciente"

const ListadoPacientes = () => {
  return (
    <div className="md:w-1/2 lg:3/5">
      <h2 className="font-bold text-3xl text-center">
        Listado Pacientes
      </h2>
      <p className="text-lg mt-5 text-center mb-10">
        Administra tus {''}
        <span className="text-[#156a6d] font-bold">
          Pacientes y Citas
        </span>
      </p>
      <div className="md:overflow-y-scroll md:h-[680px] flex flex-col gap-y-2">
        <CitaPaciente/>
        <CitaPaciente/>
        <CitaPaciente/>
        <CitaPaciente/>
        <CitaPaciente/>
        <CitaPaciente/>
        <CitaPaciente/>
      </div>
    </div>
  )
}

export default ListadoPacientes