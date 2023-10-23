import classes from './Slider.module.scss'
import ArrowRight from './chevron-right-solid.svg'
import ArrowLeft from './chevron-left-solid.svg'
import { useState } from 'react'

export default function Slider({imageSlider}) {

    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlide = () => {
        setCurrentIndex(currentIndex + 1)
        if(currentIndex === imageSlider.length - 1)
            setCurrentIndex(0)
    }

    const prevSlide = () => {
        setCurrentIndex(currentIndex - 1)
        if(currentIndex === 0)
            setCurrentIndex(imageSlider.length - 1)
    }

    return (
        <section style={{backgroundImage : `url(${imageSlider[currentIndex]})`}} className={classes.carousel}>
            {imageSlider.length > 1 && 
                <>
                    <img 
                        className={classes.carousel_arrow_right}
                        src={ArrowRight} 
                        alt="show next slider" 
                        onClick={nextSlide}
                    />
                    <img 
                        className={classes.carousel_arrow_left} 
                        src={ArrowLeft} 
                        alt="show previous slider" 
                        onClick={prevSlide}
                    />
                    <p className={classes.slideCount}>{currentIndex + 1} / {imageSlider.length}</p>
                </>
            } 
        </section>
    )
}