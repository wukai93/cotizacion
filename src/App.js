import React, {useState} from "react";
import Header from "./componentes/Header";
import styled from "@emotion/styled";
import Formulario from "./componentes/Formulario";
import Resumen from "./componentes/Resumen";
import Resultado from "./componentes/Resultado";
const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;
const ContenedorFormulario = styled.div`
  background-color: #fff;
  padding: 3rem;
`;

function App() {
const [resumen, guardarResumen] = useState({});
const {datos} = resumen

  return (
    <Contenedor>
      <Header titulo="Cotizador de seguros" />
      <ContenedorFormulario>
        <Formulario 
        guardarResumen={guardarResumen}
        />
        {datos ? <Resumen
        datos={datos}
        /> : null}
        <Resultado
        cotizacion={resumen.cotizacion}
        />
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
