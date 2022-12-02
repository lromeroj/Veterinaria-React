import CitaPaciente from "./CitaPaciente"

const ListadoPacientes = ({ pacientes, setPaciente }) => {
  return (
    <div className="md:w-1/2 lg:3/5">

      { pacientes && pacientes.length ? (
        <>
          <h2 className="font-bold text-3xl text-center">
            Listado Pacientes
          </h2>
          <p className="text-lg mt-5 text-center mb-10">
            Administra tus {''}
            <span className="text-[#156a6d] font-bold">
              Pacientes y Citas
            </span>
          </p>
          <div className="md:overflow-y-scroll md:h-[720px] flex flex-col gap-y-5">

            { pacientes.map( paciente => (
                <CitaPaciente 
                  key={ paciente.id }
                  paciente={ paciente }
                  setPaciente={ setPaciente }
                />
              ))
            }

          </div>
        </>
      ):(
        <>
          <h2 className="font-bold text-3xl text-center">
            Actualmente no hay pacientes
          </h2>
          <p className="text-lg mt-5 text-center mb-10">
            Comienza a registrarlos {''}
            <span className="text-[#156a6d] font-bold">
              para llevar su control
            </span>
          </p>
        </>
      )
      }

    </div>
  )
}

export default ListadoPacientes