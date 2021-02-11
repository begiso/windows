import React from 'react'
import './Main.css'
import { FaBell } from 'react-icons/fa'
import { AiFillInfoCircle } from 'react-icons/ai'
import { FaUser } from 'react-icons/fa'
import MainTop from './main-top/MainTop'
import MainCategories from './main-categories/MainCategories'
import ThirdBlock from '../ThirdBlock/ThirdBlock'
import Articles from './articles/Articles'
import { BsArrowRight } from 'react-icons/bs'

function Main() {
    return (
        <>
            <div className="main">
                <div className="main-first">
                    <div>
                        <input className="search-input" type="text" placeholder="Search..." />
                    </div>
                    <div className="main-first-icons">
                        <a href=""><FaBell className="main-first-icon" /></a>
                        <a href=""><AiFillInfoCircle className="main-first-icon" /></a>
                        <a href=""><FaUser className="main-first-icon" /></a>
                    </div>
                </div>
                < MainTop />
                < MainCategories />
                <div className="app-ctg-title">
                    <h2>App specials</h2>
                    <span><a href="">View all < BsArrowRight /></a></span>
                </div>
                < ThirdBlock />
                <div className="app-ctg-title">
                    <h2>Articles</h2>
                    <span><a href="">View all < BsArrowRight /></a></span>
                </div>
                < Articles />
            </div>
        </>
    )
}

export default Main
