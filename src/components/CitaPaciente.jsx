import EditIcon from "./EditIcon";
import DeleteIcon from "./DeleteIcon";

const CitaPaciente = ({ paciente }) => {
  const { nombre, propietario, email, fechaAlta, sintomas } = paciente;

  return (
    <div className="md:mx-3 bg-white shadow-md px-6 py-6 rounded-md flex flex-row gap-x-16">
      <div>
        <p className="font-bold mb-3 text-gray-700">
          Nombre: {""}
          <span className="font-normal normal-case">{nombre}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700">
          Propietario: {""}
          <span className="font-normal normal-case">{propietario}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700">
          Email: {""}
          <span className="font-normal normal-case">{email}</span>
        </p>
      </div>
      <div>
        <p className="font-bold mb-3 text-gray-700">
          Fecha Alta: {""}
          <span className="font-normal normal-case">{fechaAlta}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700">
          Síntomas: {""}
          <span className="font-normal normal-case">{sintomas}</span>
        </p>
      </div>
      <div>
        <button className="text-white bg-[#156a6d] hover:bg-[#125a5c] p-2 rounded-xl mr-1">
            <EditIcon/>
        </button>
        <button className="text-white bg-red-600 hover:bg-red-700 p-2 rounded-xl ml-1">
            <DeleteIcon/>
        </button>
      </div>
    </div>
  );
};

export default CitaPaciente;
