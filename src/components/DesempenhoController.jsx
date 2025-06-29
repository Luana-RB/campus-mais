import React, { useEffect, useState } from "react";
import DesempenhoAcademico from "./DesempenhoAcademico";
import axios from "axios";

const DesempenhoController = () => {
  const [dados, setDados] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const buscarDesempenho = () => {
      setTimeout(() => {
        axios.get("https://api.exemplo.com/desempenho").then((res) => {
          setDados(res.data);
          setCarregando(false);
        });
      });
    };
    buscarDesempenho();
  }, []);

  if (carregando) {
    return <div className="loading">Carregando dados...</div>;
  }

  return <DesempenhoAcademico dados={dados} />;
};

export default DesempenhoController;
