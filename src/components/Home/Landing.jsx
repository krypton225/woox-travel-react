import Button from '../Global/Button'

const Landing = () => {
    return (
        <div className='landing' id='landing'>
            <div className="container">
                <div className="row">
                    <p className='landing__text'>Take a Glimpse Into The Beautiful Country Of:</p>
                    <h3 className='landing__title'>Switzerland</h3>
                    <Button urlValue="/about" valueText="go there" />
                </div>
            </div>
        </div>
    )
}

export default Landing
