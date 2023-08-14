import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { consultaCrearUsuario } from "../helpers/queries";
import Swal from "sweetalert2";

const Registro = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (usuarioNuevo) => {
    console.log(usuarioNuevo);
    // realizar la peticion que agrega el usuario a la API
    consultaCrearUsuario(usuarioNuevo).then((respuesta) => {
      if (respuesta.status === 201) {
        Swal.fire(
          "Usuario Creado",
          `El usuario ${usuarioNuevo.nombreUsuario} fue creado`,
          "success"
        );
        reset();
      } else {
        Swal.fire(
          "Se produjo un error",
          `Intente realizar esta operacion mas tarde`,
          "error"
        );
      }
    });
  };

  return (
    <div className="mt-5 mainSection">
      <h3 className="text-center">Registro</h3>
      <div className="row justify-content-center">
        <div className="col-12 col-sm-8 col-md-6 col-xl-4">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-2">
              <Form.Control
                type="text"
                placeholder="Ingrese un nombre de usuario"
                {...register("nombreUsuario", {
                  required: "El nombre de usuario es obligatorio",
                  minLength: {
                    value: 2,
                    message: "La cantidad minima de caracteres es de 2 digitos",
                  },
                  maxLength: {
                    value: 100,
                    message: "La cantidad minima de caracteres es de 2 digitos",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.nombreUsuario?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Control
                placeholder="Ingrese un email"
                {...register("email", {
                  required: "El email es obligatorio",
                  pattern: {
                    value: /^[A-Za-z0-9+_.-]+@(.+)$/,
                    message: "Ingrese un email válido",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.email?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Control
                type="password"
                placeholder="Ingrese un password"
                {...register("password", {
                  required: "La contraseña es obligatoria",
                  minLength: {
                    value: 6,
                    message: "La contraseña debe tener al menos 6 caracteres",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.password?.message}
              </Form.Text>
            </Form.Group>
            <div className="row">
              <Button
                className="btn btn-dark btn-lg btn-block mb-2"
                type="submit"
              >
                Registrar
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Registro;
