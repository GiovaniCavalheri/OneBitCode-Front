import PropTypes from "prop-types"

Comment.PropTypes = {
    email: PropTypes.string,
    comment: PropTypes. string,
    date: PropTypes.string
}

function Comment({ email, comment, date}) {
  return (
    <div>
      <h2>{email}</h2>
      <p>{date}</p>
      <p>{comment}</p>
    </div>
  );
}

export default Comment