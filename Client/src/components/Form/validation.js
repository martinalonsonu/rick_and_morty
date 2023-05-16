export const validation = (data) => {
  const emailRegex = new RegExp(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/);
  const passwordRegex = new RegExp(/.*\d.*/)
  let errors = {};

  if (!emailRegex.test(data.email)) {
    errors.email = "Debe ser un correo"
  } if (!data.email) {
    errors.email = "Este campo no puede estar vacío"
  } if (data.email.length > 35) {
    errors.email = "No se puede ingresar más de 35 caracteres"
  }

  if (!passwordRegex.test(data.password)) {
    errors.password = "El password debe contener por lo menos un número"
  } else if (data.password < 6 || data.password > 10) {
    errors.password = "La contraseña debe tener entre 6 y 10 caracteres"
  }
  return errors
}