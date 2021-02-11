import React from 'react'
import './MainCategories.css'
import { AiOutlineStar } from 'react-icons/ai'
import { RiPlayList2Line } from 'react-icons/ri'
import { SiMicrosoftoffice } from 'react-icons/si'
import { GiMusicalNotes } from 'react-icons/gi'
import { GiConsoleController } from 'react-icons/gi'
import { GiPencilBrush } from 'react-icons/gi'
import { GiLaptop } from 'react-icons/gi'
import { IoColorPalette } from 'react-icons/io5'


function MainCategories() {
    return (
        <>
            <div className="main-ctg">
                <div className="main-ctg-left">
                    <a href="#">
                        <div className="main-ctg-one main-ctg-block">
                            < AiOutlineStar className="star-icon ctg-icon" />
                            <h4>Top Apps</h4>
                            <p>Trending, most popular best selling &...</p>
                        </div>
                    </a>
                    <a href="#">
                        <div className="main-ctg-two main-ctg-block">
                            < RiPlayList2Line className="play-icon ctg-icon" />
                            <h4>Getting Started</h4>
                        </div>
                    </a>
                </div>
                <div className="main-ctg-right">
                    <div className="item-line"></div>
                    <a href="">
                        <div className="main-ctg-right-item">
                            < SiMicrosoftoffice id="ctg-icon-item" />
                            <h5 id="ctg-name-item">Office</h5>
                        </div>
                    </a>
                    <div className="item-line"></div>
                    <a href="">
                        <div className="main-ctg-right-item">
                            < GiMusicalNotes id="ctg-icon-item" />
                            <h5 id="ctg-name-item">Multimedia</h5>
                        </div>
                    </a>
                    <div className="item-line"></div>
                    <a href="">
                        <div className="main-ctg-right-item">
                            < GiConsoleController id="ctg-icon-item" />
                            <h5 id="ctg-name-item">Games</h5>
                        </div>
                    </a>
                    <div className="item-line"></div>
                    <a href="">
                        <div className="main-ctg-right-item">
                            < GiPencilBrush id="ctg-icon-item" />
                            <h5 id="ctg-name-item">Utility</h5>
                        </div>
                    </a>
                    <div className="item-line"></div>
                    <a href="">
                        <div className="main-ctg-right-item">
                            < GiLaptop id="ctg-icon-item" />
                            <h5 id="ctg-name-item">Developer</h5>
                        </div>
                    </a>
                    <div className="item-line"></div>
                    <a href="">
                        <div className="main-ctg-right-item">
                            < IoColorPalette id="ctg-icon-item" />
                            <h5 id="ctg-name-item">Design</h5>
                        </div>
                    </a>
                    <div className="item-line"></div>
                </div>
            </div>
            
        </>
    )
}

export default MainCategories
