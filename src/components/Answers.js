import React from "react";
import { formatDate } from "../utils/formatDate";

// import { Container } from './styles';

function Answers({ answers, handleOrderBy, handleRemoveItem }) {
  return (
    <div>
      {answers.length > 0 && (
        <>
          <h2>Respostas</h2>
          <p>
            ordernar:{" "}
            <button onClick={() => handleOrderBy("crescent")}>Crescente</button>{" "}
            <button onClick={() => handleOrderBy("descending")}>
              Decrescente
            </button>{" "}
            <button onClick={() => handleOrderBy("date")}>
              Data de inclusão
            </button>{" "}
          </p>
          <ul>
            {answers.map((answer) => (
              <li key={answer.id}>
                <p>{answer.answer}</p>
                <p>
                  <small>
                    {answer.name} {answer.lastname}, {answer.age} em{" "}
                    {formatDate(answer.createdAt)}
                  </small>{" "}
                  <button onClick={() => handleRemoveItem(answer.id)}>
                    Remover
                  </button>
                </p>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default Answers;
