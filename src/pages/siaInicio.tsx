import React from "react";
import NavBarSiaInicio from "../components/siaInicio/navBar.siaInicio";

interface siaInicio {}

const SiaInicio: React.FC<siaInicio> = () => {
  return (
    <div>
      <NavBarSiaInicio></NavBarSiaInicio>
      <h1>Sia Inicio</h1>
    </div>
  );
};

export default SiaInicio;
