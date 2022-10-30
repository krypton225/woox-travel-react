import { Link } from "react-router-dom";

const Button = ({ urlValue, valueText, second, btnCard }) => {
    return (
        <>
            <Link className={`btn-url ${second ? "second " : ""} ${btnCard ? "btn-card" : ""}`} to={urlValue} href="#">{valueText}</Link>
        </>
    )
}

export default Button
