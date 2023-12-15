import React from "react";

function SurveyAnswers({ answers, handleRemoveItem }) {
  return (
    <div>
      {answers.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Como chegou</th>
              <th>Está satisfeito?</th>
              <th>Nota</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {answers.map((answer) => (
              <tr key={answer.id}>
                <td>{answer.comochegou}</td>
                <td>{answer.satisfaction}</td>
                <td>{answer.score}</td>
                <td>
                  <button onClick={() => handleRemoveItem(answer.id)}>
                    Remover
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default SurveyAnswers;
