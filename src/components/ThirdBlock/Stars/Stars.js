import React, {useState} from 'react'
import './style.css'
import { FaStar } from "react-icons/fa";


 const Stars = () => {
     const [stars, setStar] = useState(null);
     const [hover, setHover] = useState(null);
    return (
        <div className='stars-container'>
            {[...Array(5)].map((star, i) => {
                const starValue = i +1;
                return (
                <label>  
                    <input 
                    type='radio' 
                    name='stars'
                    value='starValue'
                    onClick={() => setStar(starValue)}
                     />
                    <FaStar 
                    className='star' 
                    color={starValue <= (hover || stars) ? " black" : "grey"} 
                    size={10}
                    onMouseEnter={() => setHover(starValue)}
                    onMouseLeave={() => setHover(null)}
                    /> 
                </label>
                );
            }) }
           
        </div>
    )
}
export default Stars