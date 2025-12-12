import style from "./style.module.css"

function ProfileSection (props) {
    return (
        <div className={style.wrapper}>
            {props.children}
        </div>
    )
}

export default ProfileSection;