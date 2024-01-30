import "./action_button.css"

function ActionButton(props) {
    return (
        <button className="actionButton" onClick={props.onClick}>
            {props.text}
        </button>
    )
}

export {ActionButton};