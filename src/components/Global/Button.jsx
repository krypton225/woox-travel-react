import { Link } from "react-router-dom";

const Button = ({ urlValue, valueText }) => {
    return (
        <>
            <Link className="btn-url" to={urlValue} href="#">{valueText}</Link>
        </>
    )
}

export default Button
