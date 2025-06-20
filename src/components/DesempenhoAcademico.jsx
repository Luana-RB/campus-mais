import React from "react";
import "./DesempenhoAcademico.css";

const DesempenhoAcademico = ({ dados }) => {
  return (
    <div className="container">
      <header className="header">
        <div className="logo">
          <div className="logo-icon">🎓</div>
          <h1>Campus+</h1>
        </div>
        <h2>Desempenho Acadêmico</h2>
      </header>

      <div className="card">
        <h3>Minhas Disciplinas</h3>
        <div className="disciplinas">
          {dados.map((item) => (
            <div key={item.codigo} className="disciplina-card">
              <div className="disciplina-info">
                <h4>
                  {item.disciplina} ({item.codigo})
                </h4>
                <p>Carga Horária: 60h</p>
              </div>
              <div className="desempenho-info">
                <div>
                  <p className="label">Nota</p>
                  <p className="valor">{item.notaFinal}</p>
                </div>
                <div>
                  <p className="label">Frequência</p>
                  <p className="valor">{item.frequencia}%</p>
                </div>
                <div>
                  <p className="label">Status</p>
                  <p className={item.status}>{item.status}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DesempenhoAcademico;
