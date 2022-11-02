import React from 'react'
import Button from '../Global/Button'
import EnterSection from '../Global/EnterSection'
import BestOffers from './BestOffers'

const Deals = () => {
    return (
        <section className='deals' id='deals'>
            <div className="container">
                <div className="row">
                    <EnterSection secName="deals" firstSentence="discover our weekly offers"
                        titleSec="amazing prices & more" btnURL="/about" valueTextBtn="discover more" />

                    {/* <p className="deals__text">discover our weekly offers</p>

                    <h3 className="deals__title">amazing prices & more</h3>

                    <Button urlValue={"/about"} valueText="discover more" second={false} btnCard={false} thirdType={false} fourthType={false} /> */}
                </div>
            </div>

            <BestOffers />
        </section>
    )
}

export default Deals
