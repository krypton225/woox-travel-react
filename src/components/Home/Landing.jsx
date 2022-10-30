import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faGlobe, faHouse } from '@fortawesome/free-solid-svg-icons'

import Button from '../Global/Button'

const Landing = () => {
    return (
        <div className='landing' id='landing'>
            <div className="container">
                <div className="row">
                    <p className='landing__text'>Take a Glimpse Into The Beautiful Country Of:</p>

                    <h3 className='landing__title'>Switzerland</h3>

                    <Button urlValue="/about" valueText="go there" second={false} />

                    <div className="landing__explore">
                        <div className="landing__explore__item">
                            <FontAwesomeIcon icon={faUser} />
                            <div className="landing__explore__item__info">
                                <span className="landing__explore__item__title">population</span>
                                <span className="landing__explore__item__number">8.66 m</span>
                            </div>
                        </div>

                        <div className="landing__explore__item">
                            <FontAwesomeIcon icon={faGlobe} />
                            <div className="landing__explore__item__info">
                                <span className="landing__explore__item__title">territory</span>
                                <span className="landing__explore__item__number">513.120 km2</span>
                            </div>
                        </div>

                        <div className="landing__explore__item">
                            <FontAwesomeIcon icon={faHouse} />
                            <div className="landing__explore__item__info">
                                <span className="landing__explore__item__title">AVG price</span>
                                <span className="landing__explore__item__number">$946.000</span>
                            </div>
                        </div>

                        <Button urlValue={"/about"} valueText="explore more" className="btn-url" second={true} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing
