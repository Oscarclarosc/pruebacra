import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from "../pages";
import Ingresar from "../pages/ingresar";
import Prueba from "../pages/prueba";
import Registro from "../pages/registro";
import SiaInicio from "../pages/siaInicio";
import Tablero from "../pages/tablero";

interface rutasProps {}

const Rutas: React.FC<rutasProps> = ({ children }) => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Index></Index>
          </Route>
          <Route path="/ingresar">
            <Ingresar />
          </Route>
          <Route path="/tablero">
            <Tablero />
          </Route>
          <Route path="/prueba">
            <Prueba />
          </Route>
          <Route path="/registro">
            <Registro />
          </Route>
          <Route path="/siaInicio">
            <SiaInicio />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Rutas;
