import { useContext } from "react"
import UserContext from "../contexts/UserContexts"

function UserInfo() {
    const user = useContext(UserContext)
    return (
        <>
            <h2>Infomações do usuário: </h2>
            <p>Nome: {user.name}</p>
            <p>Email: {user.email}</p>
        </>
    )
}



export default UserInfo