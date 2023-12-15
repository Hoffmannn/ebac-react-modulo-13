import { useCallback, useState } from "react";

const useForm = (label) => {
  const [formData, setFormData] = useState({});
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const [answers, setAnswers] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccess(true);
    console.log(formData);
    setAnswers((prev) => [
      ...prev,
      { ...formData, id: Date.now(), createdAt: new Date() },
    ]);

    e.target.reset();
  };

  const onInvalid = () => {
    setErrorMessage(`Preencha os campos necessários.`);
  };

  const handleChangeInput = (input, value) => {
    setFormData({ ...formData, [input]: value });
    console.log(input, value);
    setSuccess(false);
  };

  const handleOrderBy = useCallback(
    (value) => {
      if (value === "crescent") {
        setAnswers(answers.sort((a, b) => a.name.localeCompare(b.name)));
      } else if (value === "descending") {
        setAnswers(answers.sort((a, b) => b.name.localeCompare(a.name)));
      } else {
        setAnswers(answers.sort((a, b) => a.createdAt - b.createdAt));
      }
    },
    [answers]
  );

  const handleRemoveItem = useCallback(
    (id) => {
      setAnswers(answers.filter((answer) => answer.id !== id));
    },
    [answers]
  );

  return {
    label,
    formData,
    setFormData,
    onSubmit,
    handleChangeInput,
    onInvalid,
    success,
    errorMessage,
    answers,
    handleOrderBy,
    handleRemoveItem,
  };
};

export default useForm;
