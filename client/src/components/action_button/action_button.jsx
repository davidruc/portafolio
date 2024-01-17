import "./action_button.css"

function ActionButton(props) {
    return (
        <button className="actionButton">
            {props.text}
        </button>
    )
}

export {ActionButton};