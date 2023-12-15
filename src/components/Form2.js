import React from "react";
import useForm from "../hooks/useForm";
import SurveyAnswers from "./SurveyAnswers";

function Form2() {
  const {
    label,
    answers,
    onSubmit,
    handleChangeInput,
    onInvalid,
    success,
    errorMessage,
    handleRemoveItem,
  } = useForm("Questionário");

  return (
    <div className="formContainer">
      <form onSubmit={onSubmit} onInvalid={onInvalid}>
        <h2>{label}</h2>
        <label for="comochegou">Como chegou até aqui?</label>
        <select
          type="text"
          id="comochegou"
          required
          onChange={(e) => handleChangeInput("comochegou", e.target.value)}
        >
          <option value={null} selected defaultChecked></option>
          <option value="ebac">Curso da EBAC</option>
          <option value="instagram">Instagram</option>
          <option value="amigo">Indicação de um amigo</option>
        </select>

        <label for="satisfaction">Está satisfeito?</label>
        <select
          type="text"
          id="satisfaction"
          required
          onChange={(e) => handleChangeInput("satisfaction", e.target.value)}
        >
          <option value={null} selected defaultChecked></option>
          <option value="Sim">Sim</option>
          <option value="Não">Não</option>
        </select>

        <label for="score">Qual nota daria para nosso serviço?</label>
        <input
          type="number"
          name="score"
          id="score"
          min={0}
          max={5}
          required
          onChange={(e) => handleChangeInput("score", e.target.value)}
        />
        <button type="submit">Enviar</button>
        <p className="error">{errorMessage}</p>
        {success && <p className="success">Resposta enviada com sucesso!</p>}
      </form>
      <SurveyAnswers answers={answers} handleRemoveItem={handleRemoveItem} />
    </div>
  );
}

export default Form2;
