import PropTypes from "prop-types"

Comment.PropTypes = {
    email: PropTypes.string,
    comment: PropTypes. string
}

function Comment({ email, comment }) {
  return (
    <div>
      <h2>{email}</h2>
      <p>{comment}</p>
    </div>
  );
}

export default Comment