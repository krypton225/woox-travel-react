import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Button from '../Global/Button'
import LandingExplore from '../../data/LandingExplore'
import Visit from './Visit'
import FirstFooter from '../Global/FirstFooter'
import SecondFooter from '../Global/SecondFooter'

const Landing = () => {
    return (
        <>
            <div className='landing' id='landing'>
                <div className="container">
                    <div className="row">
                        <p className='landing__text'>Take a Glimpse Into The Beautiful Country Of:</p>

                        <h3 className='landing__title'>Switzerland</h3>

                        <Button urlValue={"/about"} valueText="go there" second={false} btnCard={false} thirdType={false} fourthType={false} />

                        <div className="landing__explore">

                            {
                                LandingExplore.map((ex) => (
                                    <div className="landing__explore__item" key={ex.id}>
                                        <FontAwesomeIcon icon={ex.iconName} />
                                        <div className="landing__explore__item__info">
                                            <span className="landing__explore__item__title">{ex.itemTitle}</span>
                                            <span className="landing__explore__item__number">{ex.itemNumber}</span>
                                        </div>
                                    </div>
                                ))
                            }

                            <Button urlValue={"/about"} valueText="explore more" className="btn-url" second={true} btnCard={false} thirdType={false} fourthType={false} />
                        </div>
                    </div>
                </div>
            </div>

            <Visit />

            <FirstFooter />

            <SecondFooter />
        </>
    )
}

export default Landing
