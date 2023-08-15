import React from "react";
import { useEffect, useState } from "react";
import { obtenerUsuario } from "../helpers/queries";
import { useParams } from "react-router-dom";

const Perfil = () => {

  return (
    <div className="m-5">
      <h1 className="m-5">Hola</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
        consequuntur ipsa perferendis delectus a facilis. Magnam facilis,
        sapiente neque voluptatum explicabo impedit distinctio unde, dolore
        voluptate repellat, labore eveniet nobis?
      </p>
    </div>
  );
};

export default Perfil;
