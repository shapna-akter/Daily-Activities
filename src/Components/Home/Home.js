import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faBookOpenReader } from '@fortawesome/free-solid-svg-icons';
import './Home.css'
import AllCards from '../All-Cards/AllCards';
import MyInfo from '../MyInfo/MyInfo';

const Home = () => {
    const [cards, setCards] = useState([]);
    useEffect( ()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCards(data))
    }, [])
    return (
        <div>
            <div className="home-container">
                <div className="card-container">
                    <h1 className='heading'>
                        <FontAwesomeIcon className='icon' icon={faBookOpenReader}></FontAwesomeIcon>
                        Reading Books
                    </h1>
                    <AllCards cards={cards}></AllCards>
                </div>
                <div className="cards-info">
                    <div>
                        <MyInfo></MyInfo>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;