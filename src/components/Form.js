import React from "react";
import useForm from "../hooks/useForm";
import Answers from "./Answers";

function Form() {
  const {
    label,
    answers,
    handleOrderBy,
    onSubmit,
    handleChangeInput,
    onInvalid,
    success,
    errorMessage,
    handleRemoveItem,
  } = useForm("Dados pessoais");
  return (
    <div className="formContainer">
      <form onSubmit={onSubmit} onInvalid={onInvalid}>
        <h2>{label}</h2>
        <label for="name">Nome:</label>
        <input
          type="text"
          placeholder="Insira seu nome"
          id="name"
          name="Nome"
          required
          onChange={(e) => handleChangeInput("name", e.target.value)}
        />

        <label for="name">Sobrenome:</label>
        <input
          type="text"
          placeholder="Insira seu sobrenome"
          id="lastname"
          name="Sobrenome"
          onChange={(e) => handleChangeInput("lastname", e.target.value)}
        />

        <label for="name">Idade:</label>
        <input
          type="number"
          name="Idade"
          id="age"
          required
          onChange={(e) => handleChangeInput("age", e.target.value)}
        />
        <button type="submit">Enviar</button>

        <p className="error">{errorMessage}</p>
        {success && <p className="success">Resposta enviada com sucesso!</p>}
      </form>
      <Answers
        answers={answers}
        handleOrderBy={handleOrderBy}
        handleRemoveItem={handleRemoveItem}
      />
    </div>
  );
}

export default Form;
