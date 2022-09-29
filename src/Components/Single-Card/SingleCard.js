import React from 'react';
import './SingleCard.css'

const SingleCard = ({card, details, setDetails}) => {
    const {image, name, time} = card;

    const handleAddToList = (timeInfo) => {
        const newTime = [...details, timeInfo];
        setDetails(newTime)
    }
    return (
        <div className='single-card'>
            <img className='card-image' src={image} alt="" />
            <div className="card-info">
                <h5>Name : {name} </h5>
                <p>Time: {time} min </p>
                <button onClick={()=>handleAddToList(time)} className='added-btn'>Add To list</button>
            </div>
        </div>
    );
};

export default SingleCard;