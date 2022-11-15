function Button(props) {
    return <button className={props.className} onClick={props.onChangeContent}>{props.children}</button>
}

export default Button;