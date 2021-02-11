import React from 'react'
import './MainTop.css'
import Eset from '../../../img/home/eset.png'
import Pubg from '../../../img/home/pubg.png'
import Carousel from 'react-bootstrap/Carousel'

function MainTop() {
    return (
        <div className="main-top">
            <div className="main-top-one">
                <a href="#">
                    <img className="eset-antivirus" src={Eset} alt="Eset" />
                    <a href="">Save up to 75%</a>
                </a>
            </div>
            <div className="main-top-two">
                <Carousel interval={null}>
                    <Carousel.Item>
                        <a href=""><img
                            className="pubg-game"
                            src={Pubg}
                            alt="First slide"
                        /></a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href=""><img
                            className="pubg-game"
                            src={Pubg}
                            alt="First slide"
                        /></a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href=""><img
                            className="pubg-game"
                            src={Pubg}
                            alt="First slide"
                        /></a>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}

export default MainTop
