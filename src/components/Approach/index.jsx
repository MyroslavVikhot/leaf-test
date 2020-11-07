import React from 'react';
import Slider from 'react-slick';

import './Approach.scss';

import animal_1 from '../../assets/img/animalSlaider/Tucan.png';
import animal_2 from '../../assets/img/animalSlaider/Tiger.png';
import animal_3 from '../../assets/img/animalSlaider/Iguana.png';
import animal_4 from '../../assets/img/animalSlaider/Paca.png';
import animal_5 from '../../assets/img/animalSlaider/Sloth.png';
const sliderAnimals = [
    {animal: animal_1},
    {animal: animal_2},
    {animal: animal_3},
    {animal: animal_4},
    {animal: animal_5}
]

const Approach = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        swipe: false,
        autoplay: true,
        autoplaySpeed: 5000
    };
    return (
        <div className="approach">
            <div className="container">
                <div className="approach__box">
                    <div className="approach__item">
                        <div className="approach__item-title">
                            OUR NEW APPROACH
                        </div>
                        <div className="approach__item-contents">
                            <div className="approach__item-content">
                                We are appealing to the human love of animals by helping contributors pick a tree to support their preferred jungle animals and our communities.
                            </div>
                            <div className="approach__item-content">
                                We will be selling native trees starting as low as $16. Each contribution will help plant a tree that will benefit a specific set of animals, enrich the rainforest, and boost biodiversity.
                            </div>
                        </div>
                        <button className="approach__item-btn">
                            VIEW ALL ANIMALS
                        </button>
                    </div>
                    <div className="approach__gallery">
                        <Slider {...settings} >
                            {
                                sliderAnimals &&
                                sliderAnimals.map((item, index) => (
                                        <div className="approach__gallery-item"
                                        key={index}
                                    >
                                        <img 
                                            src={item.animal} 
                                            alt="slider" 
                                        />
                                    </div>
                                ))
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Approach;
