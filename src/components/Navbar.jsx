import { useState } from "react";
import { Link } from "react-router-dom";
import NavItems from "../data/NavItems";

const Navbar = () => {

    const [toggler, setToggler] = useState(false);

    const changeToggle = () => {
        setToggler(!toggler);
    }

    return (
        <nav className="navbar" id="navbar">
            <div className="container">
                <div className="row">
                    <Link className="navbar__logo" to="/">
                        <img src="./assets/images/logo.png" alt="Woox Logo" />
                    </Link>

                    <ul className={`navbar__list ${toggler ? "active" : ""}`}>
                        {
                            NavItems.map((item) => (
                                <li key={item.id} className="navbar__list__item">
                                    <Link to={item.itemURL}>{item.itemName}</Link>
                                </li>
                            ))
                        }
                    </ul>

                    <div className={`navbar__toggler ${toggler ? "active" : ""}`} onClick={changeToggle}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
