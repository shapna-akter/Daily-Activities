import React from 'react';
import './SingleCard.css';
import Swal from 'sweetalert2'

const SingleCard = ({card, details, setDetails}) => {
    const {image, name, time} = card;

    const handleAddToList = (timeInfo) => {
        const newTime = [...details, timeInfo];
        setDetails(newTime);
        Swal.fire(
            'Good job!',
            'Added to list!',
            'success'
          )    
    }
    return (
        <div className='single-card' data-aos="zoom-in">
            <img className='card-image' src={image} alt="" />
            <div className="card-info">
                <h4>{name} </h4>
                <p>Time: {time} min </p>
                <button onClick={()=>handleAddToList(time)} className='added-btn'>Add To list</button>
            </div>
        </div>
    );
};

export default SingleCard;