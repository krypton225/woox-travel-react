import { useState } from "react";
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
                    <a className="navbar__logo" href="/">
                        <img src="./assets/images/logo.png" alt="Woox Logo" />
                    </a>

                    <ul className={`navbar__list ${toggler ? "active" : ""}`}>
                        {
                            NavItems.map((item) => (
                                <li key={item.id} className="navbar__list__item">
                                    <a href="/">
                                        {item.itemName}
                                    </a>
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
