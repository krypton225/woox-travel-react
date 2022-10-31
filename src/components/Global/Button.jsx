import { Link } from "react-router-dom";

const Button = ({ urlValue, valueText, second, btnCard, thirdType }) => {
    return (
        <>
            <Link className={`btn-url ${second ? "second " : ""}${btnCard ? "btn-card" : ""}${thirdType ? "third" : ""}`}
                to={urlValue} href="#">{valueText}</Link>
        </>
    )
}

export default Button
