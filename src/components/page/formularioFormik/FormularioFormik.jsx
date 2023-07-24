import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const FormularioFormik = () => {
  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      repetPassword: "",
    },
    onSubmit: (data) => {
      console.log(data);
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Este campo es obligatorio").min(5).max(15),
      email: Yup.string()
        .email("Debe de ser un email válido")
        .required("Este campo es obligatorio"),
      password: Yup.string()
        .required("Este campo es obligatorio")
        .min(6, "La contraseña debe ser mínimo de 6 caracteres")
        .matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,15}$/, {
          message:
            "La contraseña debe tener por lo menos un número, una letra mayuscula, una minuscula y un caracter especial",
        }),
      repetPassword: Yup.string()
        .required("Este campo es obligatorio")
        .oneOf([Yup.ref("password")], "Las contrasenias no coinciden"),
    }),
    validateOnChange: false,
    validateOnBlur: true, //si no le especifico, se hace en el onSubmit cuando el onChange esta en false, Nota: no esta funcionando el onBlur, investigar por que
  });

  console.log(errors);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nombre"
          variant="outlined"
          name="name"
          error={errors.name ? true : false}
          helperText={errors.name}
          onChange={handleChange}
        />
        <TextField
          label="Email"
          variant="outlined"
          name="email"
          error={errors.email ? true : false}
          helperText={errors.email}
          onChange={handleChange}
        />
        <TextField
          label="Pass"
          variant="outlined"
          name="password"
          error={errors.password ? true : false}
          helperText={errors.password}
          onChange={handleChange}
        />
        <TextField
          label="Repet"
          variant="outlined"
          name="repetPassword"
          error={errors.repetPassword ? true : false}
          helperText={errors.repetPassword}
          onChange={handleChange}
        />
        <Button type="submit" variant="contained">
          Enviar
        </Button>
      </form>
    </div>
  );
};

export default FormularioFormik;
