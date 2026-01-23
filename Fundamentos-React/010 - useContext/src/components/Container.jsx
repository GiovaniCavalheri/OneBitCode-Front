import UserInfo from "./UserInfo";


function Container({ childrem }) {
  return (
    <>
      <p>Container do App</p>
      <UserInfo />
      {childrem}
    </>
  );
}

export default Container;
