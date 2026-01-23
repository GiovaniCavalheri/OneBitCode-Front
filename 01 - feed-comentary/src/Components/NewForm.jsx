import { useState } from "react";
import TextInput from "./TextInput";
import PropTypes from "prop-types";

NewForm.PropTypes = {
  addComment: PropTypes.func,
};

function NewForm({ addComment }) {
  // ==> criando States
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");


  // ==> Submissao do form
  const handleSubmit = (ev) => {
    ev.preventDefault();
    addComment({ email, comment});
    setEmail("");
    setComment("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput label="Email: " value={email} setValue={setEmail} />
      <div>
        <TextInput label="Comment: " value={comment} setValue={setComment} />
      </div>
      <button type="submit">Enviar Comentário</button>
    </form>
  );
}

export default NewForm;
