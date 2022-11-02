import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import DealsWeeklyBestOfferData from '../../data/DealsWeeklyBestOfferData'
import Button from '../Global/Button'

const CardOffer = () => {
    return (
        <>
            {
                DealsWeeklyBestOfferData.map((offer) => (
                    <div className="deals__offers__cards__container__card" key={offer.id}>
                        <div className="deals__offers__cards__container__card__img">
                            <img src={offer.offerCardImage} alt="Just A Card" />
                        </div>

                        <div className="deals__offers__cards__container__card__info">
                            {
                                <>
                                    <p className='deals__offers__cards__container__card__info__duration'>* {offer.offerDurationText}</p>

                                    <p className='deals__offers__cards__container__card__info__city'>{offer.cityName}</p>

                                    <hr />

                                    <div className="deals__offers__cards__container__card__info__inner">
                                        <div className="deals__offers__cards__container__card__info__inner__part">
                                            <span><FontAwesomeIcon icon={offer.durationInDays.icon} /></span>
                                            <span>{offer.durationInDays.text}</span>
                                        </div>

                                        <div className="deals__offers__cards__container__card__info__inner__part">
                                            <span><FontAwesomeIcon icon={offer.durationInPlaces.icon} /></span>
                                            <span>{offer.durationInPlaces.text}</span>
                                        </div>
                                    </div>

                                    <hr />

                                    <p className='deals__offers__cards__container__card__info__desc'>{offer.offerDescription}</p>

                                    <Button urlValue={"/about"} valueText="reserve" className="btn-url" second={false} btnCard={false} thirdType={false} fourthType={true} />
                                </>
                            }
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default CardOffer
