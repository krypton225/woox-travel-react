import DiscoverCardsData from "../../data/DiscoverCardsData";

const DiscoverCards = () => {
    return (
        <>
            {
                DiscoverCardsData.map((card) => (
                    <div className="about__discover__info__cards__one" key={card.id}>
                        <p className='about__discover__info__cards-number'>{card.discoverCardNum}</p>
                        <span>{card.discoverCardDesc}</span>
                    </div>
                ))
            }
        </>
    )
}

export default DiscoverCards
