import React, { useEffect, useState } from "react";
import DesempenhoAcademico from "./DesempenhoAcademico";

const DesempenhoController = () => {
const [dados, setDados] = useState([
  {
    codigo: "INF101",
    disciplina: "Algoritmos e Lógica de Programação",
    notaFinal: 8.7,
    frequencia: 95,
    status: "Aprovado"
  },
  {
    codigo: "MAT202",
    disciplina: "Cálculo Diferencial e Integral",
    notaFinal: 5.4,
    frequencia: 78,
    status: "Reprovado"
  },
  {
    codigo: "ENG303",
    disciplina: "Inglês Técnico",
    notaFinal: 9.2,
    frequencia: 88,
    status: "Aprovado"
  },
  {
    codigo: "SO204",
    disciplina: "Sistemas Operacionais",
    notaFinal: 6.3,
    frequencia: 82,
    status: "Aprovado"
  },
  {
    codigo: "BD301",
    disciplina: "Banco de Dados I",
    notaFinal: 4.8,
    frequencia: 65,
    status: "Reprovado"
  }
]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const buscarDesempenho = () => {
    setCarregando(false); };
    buscarDesempenho();
  }, []);

  if (carregando) {
    return <div className="loading">Carregando dados...</div>;
  }

  return <DesempenhoAcademico dados={dados} />;
};

export default DesempenhoController;
