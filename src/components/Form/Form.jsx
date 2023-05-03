import React, { useState } from "react";
import { validation } from "./validation";

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
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">CORREO ELECTRÓNICO</label>
        <input
          type="email"
          placeholder="Ingrese el correo electrónico"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
        <br />
        {errors.email ? <span>{errors.email}</span> : null}
        <br />
        <label htmlFor="">CONTRASEÑA</label>
        <input
          type="password"
          placeholder="Ingrese el password"
          name="password"
          value={userData.password}
          onChange={handleChange}
        />
        <br />
        {errors.password ? <span>{errors.password}</span> : null}
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Form;
