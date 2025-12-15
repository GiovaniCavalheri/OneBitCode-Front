import PropTypes from "prop-types";

Input.propTypes = {
  passwordSize: PropTypes.number.isRequired,
  setPasswordSize: PropTypes.func,
};

function Input(props) {
  return (
    <>
      <label htmlFor="passwordSize">Tamanho: </label>
      <input
        type="number"
        id="passwordSize"
        min={1}
        value={props.passwordSize}
        onChange={(ev) => props.setPasswordSize(+ev.target.value)}
      />
    </>
  );
}

export default Input;
