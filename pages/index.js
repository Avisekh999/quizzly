import { useState } from 'react'
import homepageStyles from '../styles/homepageStyles.module.css'

const HomePage = () => {
    const [sliderState, setSliderState] = useState(1)
    return <div className="container">
        <div className={homepageStyles.sliderWrapper}>
            {(sliderState === 1) && <div className={homepageStyles.sliderItem}>
                <img className={homepageStyles.sliderImage} src="/register.svg" /> 
                <h2>Register</h2>
                <p>lorem ipsum dolor sit amet.</p>   
            </div>}
            {(sliderState === 2) && <div className={homepageStyles.sliderItem}>
                <img className={homepageStyles.sliderImage} src="/gaming.svg" /> 
                <h2>Play</h2>
                <p>lorem ipsum dolor sit amet.</p>   
            </div>}
            {(sliderState === 3) && <div className={homepageStyles.sliderItem}>
                <img className={homepageStyles.sliderImage} src="/money.svg" /> 
                <h2>Earn</h2>
                <p>lorem ipsum dolor sit amet.</p>   
            </div>}
        </div>
        <div className={homepageStyles.navigationButtons}>
            {(sliderState == 1) ? '' : <button
                className="btn btn-small btn-primary"
                onClick={() => setSliderState(sliderState - 1)}>
                    &larr; Previous
            </button>}
            <button 
                className={`btn btn-small btn-primary ${(sliderState == 1) ? '' : 'marginLeft-10'}`}
                onClick={() => setSliderState(sliderState + 1)}>
                    Next &rarr;
            </button>
        </div>
    </div>
}
export default HomePage