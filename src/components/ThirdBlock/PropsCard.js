import React from 'react'
import './card.css'
import Stars from './Stars/Stars'


const PropsCard = (props) => {
    return (
        <>
            <div className='row_nets'>
                <div className='img_nets'>
                    <img src={props.img}></img>
                </div>
                <a href=""><h5 className='text_nets'>{props.title}</h5></a>
                <Stars />
                <h5 className='text_nets'>{props.middleTitle}</h5>
            </div>
        </>
    )
}
export default PropsCard