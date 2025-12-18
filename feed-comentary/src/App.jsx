import { useState } from "react";
import "./App.css";
import NewForm from "./Components/NewForm";
import Comment from "./Components/Comment"

function App() {
  // ==> Setando estado para armazenar o array
  const [comments, setComments] = useState([]); 

  // ==> Criando funcao para adicionar os comentarios
  const addComment = ({ email, comment }) => {
    const id = Math.floor(Math.random() * 1000000);
    const newComment = { id, email, comment };
    setComments([...comments, newComment]); 
  };

  return (
    <>
      <h1>Seção de Comentários</h1>
      <div className="InputComment">
        <NewForm addComment={addComment} />
      </div>
      <div className="comments">
        {comments.map((comment) => (
          <Comment
          key={comment.id}
          email={comment.email}
          comment={comment.comment}
          />
        ))}
      </div>
    </>
  );
}

export default App;
