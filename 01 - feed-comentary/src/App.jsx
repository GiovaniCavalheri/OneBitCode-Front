import { useState } from "react";
import "./App.css";
import NewForm from "./Components/NewForm";
import Comment from "./Components/Comment";

function App() {
  // ==> Setando estado para armazenar o array
  const [comments, setComments] = useState([]);

  // ==> Criando funcao para adicionar os comentarios
  const addComment = ({ email, comment}) => {
    const id = Math.floor(Math.random() * 1000000);
    const date = new Date().toLocaleTimeString();
    const newComment = { id, email, comment, date};
    setComments([...comments, newComment]);

  };

  return (
    <>
      <h1>Seção de Comentários</h1>
      <div className="InputComment">
        <NewForm addComment={addComment} />
      </div>
      <div className="comments">
        {comments.length === 0 ? (
          <p>Seja o Primeiro a Comentar!</p>
        ) : (
          comments.slice().reverse().map((comment) => (
            <Comment
              key={comment.id}
              email={comment.email}
              comment={comment.comment}
              date={comment.date}
            />
          ))
        )}
      </div>
    </>
  );
}

export default App;
