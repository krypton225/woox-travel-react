import { Carousel } from '@trendyol-js/react-carousel';

const CustomSlider = ({ DataArr }) => {
    return (
        <Carousel infinite={true} show={4} slide={1} transition={0.5} swipeOn={1} swiping={true} rightArrow={true} leftArrow={true} className="city-slider">
            {
                DataArr.map((data) => (
                    <div key={data.id}>
                        <img src={data.imageURL} alt={data.imageAltText} />
                    </div>
                ))
            }
        </Carousel>

    )
}

export default CustomSlider
