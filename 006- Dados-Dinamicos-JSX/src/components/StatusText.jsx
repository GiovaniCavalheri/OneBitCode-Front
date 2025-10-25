// eslint-disable-next-line react-refresh/only-export-components
export default () => {
  const booleanStatus = true;
  return <h2 style={{ color: booleanStatus ? "#00ff9f" : "#f64346"}}>Status Atual: {booleanStatus ? "ON" : "OF"} </h2>;
};
