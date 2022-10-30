import { Link } from "react-router-dom";

const Button = ({ urlValue, valueText, second }) => {
    return (
        <>
            <Link className={`btn-url ${second ? "second" : ""}`} to={urlValue} href="#">{valueText}</Link>
        </>
    )
}

export default Button
