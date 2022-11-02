import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Button from '../Global/Button'
import LandingExplore from '../../data/LandingExplore'
import Visit from './Visit'
import FirstFooter from '../Global/FirstFooter'
import SecondFooter from '../Global/SecondFooter'
import EnterSection from '../Global/EnterSection'

const Landing = () => {
    return (
        <>
            <div className='landing' id='landing'>
                <div className="container">
                    <div className="row">
                        <EnterSection secName="landing" firstSentence="Take a Glimpse Into The Beautiful Country Of:"
                            titleSec="Switzerland" btnURL="/about" valueTextBtn="go there" />

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
