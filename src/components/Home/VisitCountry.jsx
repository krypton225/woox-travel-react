import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import VisitDataCountry from '../../data/VisitDataCountry'
import Button from '../Global/Button'

const VisitCountry = () => {
    return (
        <>
            <div className="visit__countries__left">
                {
                    VisitDataCountry.map((country) => (
                        <div className='visit__countries__left__card' key={country.id}>
                            <div className='visit__countries__left__card__img'>
                                <img src={country.cardImage} alt='Country' />
                            </div>

                            <div className='visit__countries__left__card__info'>
                                <div className='visit__countries__left__card__info__top'>
                                    <div className='visit__countries__left__card__info__top__text'>
                                        <span className='visit__countries__left__card__info__top__text__region-1'>{country.firstRegion}</span>
                                        <span className='visit__countries__left__card__info__top__text__region-2'>{country.secondRegion}</span>
                                    </div>

                                    <Button urlValue={'/'} valueText={'explore more'} second={true} btnCard={true} />
                                </div>

                                <p className='visit__countries__left__card__info__desc'>{country.cardDesc}</p>

                                <div className='custom-line'></div>

                                <div className='visit__countries__left__card__info__extra'>
                                    <div className='visit__countries__left__card__info__extra__people'>
                                        <span className='visit__countries__left__card__info__extra__icon'>
                                            <FontAwesomeIcon icon={country.people.icon} />
                                        </span>
                                        <span className='visit__countries__left__card__info__extra__num'>{country.people.number} Mil</span>
                                    </div>

                                    <div className='visit__countries__left__card__info__extra__area'>
                                        <span className='visit__countries__left__card__info__extra__icon'>
                                            <FontAwesomeIcon icon={country.areaInKilo.icon} />
                                        </span>
                                        <span className='visit__countries__left__card__info__extra__num'>{country.areaInKilo.number} km2</span>
                                    </div>

                                    <div className='visit__countries__left__card__info__extra__home'>
                                        <span className='visit__countries__left__card__info__extra__icon'>
                                            <FontAwesomeIcon icon={country.home.icon} />
                                        </span>
                                        <span className='visit__countries__left__card__info__extra__num'>${country.home.number}</span>
                                    </div>
                                </div>

                                <div className='custom-line'></div>

                                {
                                    <p className='visit__countries__left__card__info__link'>
                                        <Link to={country.dirCard.link} className="visit__countries__left__card__info__link__anchor">
                                            {country.dirCard.text}
                                            <FontAwesomeIcon icon={country.dirCard.icon} />
                                        </Link>
                                    </p>
                                }
                            </div>

                            {
                                country.id % 2 === 0 ? <div className='custom-line'></div> : ''
                            }
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default VisitCountry
