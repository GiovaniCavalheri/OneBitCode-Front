import style from "./style.module.css"

function ProfileSection (props) {
    return (
        <div
        {...props} // aceita varios args, argumentos. 
        className={`${style.wrapper} ${props.className}`}>
            {props.children}
        </div>
    )
}

export default ProfileSection;