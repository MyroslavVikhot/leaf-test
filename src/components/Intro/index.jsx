import React from 'react';
import Slider from "react-slick";

import './Intro.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cookie from '../Cookie';

const Intro = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        swipe: false,
        autoplay: true,
        autoplaySpeed: 5000
    };
    return (
        <div className="intro__inner">
            <Slider {...settings} >
                <div className="intro intro__1">
                        <div className="container">
                            <div className="intro__title intro__title-1">
                                Helping Wildlife
                                <br />
                                Thrive by Planting
                                <br />
                                Native Trees in panama
                            </div>
                            <div className="intro__info">
                                <div className="intro__info-inner">
                                    <div className="intro__info-cases">
                                        <div className="intro__info-case">
                                            <p>502</p>
                                            IN DANGERED
                                            <br />
                                            SPECIES
                                        </div>
                                        <div className="intro__info-case">
                                            <p>29M</p>
                                            LOST ACRES OF
                                            <br />
                                            TREES
                                        </div>
                                        <div className="intro__info-case">
                                            <p>120</p>
                                            EXTINCT
                                            <br />
                                            SPECIES
                                        </div>
                                    </div>
                                    <button className="intro__plant-btn">
                                        PLANT A NATIVE TREE
                                    </button>
                                </div>
                            </div>
                        </div>
                </div>
                <div className="intro intro__2">
                    <div className="container">
                        <div className="intro__2-inner">
                            <div className="intro__title intro__title-2">
                                FIGHT CLIMATE
                            <br />
                                CHANGE
                        </div>
                            <div className="intro__case-text intro__case-text-2">
                                Climate change is an existential threat.
                            <br />
                            As individuals, we can feel overwhelmed.
                            <br />
                            You can make a difference by planting trees.
                        </div>
                            <button className="intro__plant-btn intro__plant-btn-2">
                                PLANT A NATIVE TREE
                        </button>
                        </div>
                    </div>
                </div>
                <div className="intro intro__3">
                    <div className="container">
                        <div className="intro__3-inner">
                            <div className="intro__title intro__title-3">
                                TACKLING THE
                            <br />
                                NATURE CRISIS
                            </div>
                            <div className="intro__text-cases">
                                <div className="intro__case-text intro__case-text-3">
                                    By restoring precious habitats & planting
                                <br />
                                new native forest, we extend & create
                                <br />
                                wildlife havens.
                            </div>
                                <div className="intro__case-text intro__case-text-3">
                                    Boosting biodiversity is a pragmatics and
                                <br />
                                effective strategy to mitigate climate
                                <br />
                                change.
                            </div>
                            </div>
                            <div className="intro__plant-btn-inner">
                                <button className="intro__plant-btn intro__plant-btn-3">
                                    PLANT A NATIVE TREE
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default Intro;
