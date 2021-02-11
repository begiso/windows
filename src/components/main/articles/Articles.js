import React from 'react'
import './Articles.css'
import Card from '../../../img/articles-img.png'

function Articles() {
    return (
        <div className="articles">
            <a href="#" class="articles-card-link">
                <div className="articles-card">
                    <div className="articles-card-layout"></div>
                    <img src={Card} alt="Card" />
                    <div className="articles-card-date">July 9, 2020</div>
                    <div className="articles-card-title">Updated Google Chrome increases laptop uptime</div>
                </div>
            </a>
            <a href="#" class="articles-card-link">
                <div className="articles-card">
                    <div className="articles-card-layout"></div>
                    <img src={Card} alt="Card" />
                    <div className="articles-card-date">July 9, 2020</div>
                    <div className="articles-card-title">Updated Google Chrome increases laptop uptime</div>
                </div>
            </a>
            <a href="#" class="articles-card-link">
                <div className="articles-card">
                    <div className="articles-card-layout"></div>
                    <img src={Card} alt="Card" />
                    <div className="articles-card-date">July 9, 2020</div>
                    <div className="articles-card-title">Updated Google Chrome increases laptop uptime</div>
                </div>
            </a>
        </div>
    )
}

export default Articles
