import React, { useState } from "react";
import { validation } from "./validation";

import "./Form.css"; // importar archivo de estilos

function Form({ login }) {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });

    setErrors(
      validation({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  const [errors, setErrors] = useState({});

  return (
    <>
      <form action="" onSubmit={handleSubmit} className="form-container">
        <label htmlFor="email" className="form-label">
          CORREO ELECTRÓNICO
        </label>
        <input
          type="email"
          placeholder="Ingrese el correo electrónico"
          name="email"
          value={userData.email}
          onChange={handleChange}
          className={`form-input ${errors.email && "form-input-error"}`} // añadir clase de error si es necesario
        />
        {errors.email && <span className="form-error">{errors.email}</span>}{" "}
        {/* mostrar mensaje de error si es necesario */}
        <label htmlFor="password" className="form-label">
          CONTRASEÑA
        </label>
        <input
          type="password"
          placeholder="Ingrese el password"
          name="password"
          value={userData.password}
          onChange={handleChange}
          className={`form-input ${errors.password && "form-input-error"}`} // añadir clase de error si es necesario
        />
        {errors.password && (
          <span className="form-error">{errors.password}</span>
        )}{" "}
        {/* mostrar mensaje de error si es necesario */}
        <button type="submit" className="form-button">
          Submit
        </button>
      </form>
    </>
  );
}

export default Form;
