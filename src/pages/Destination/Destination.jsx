import { useState } from 'react';

import Header from '../../components/Header/Header';

import { destinations } from '../../data/data';

import moonImage from '../../assets/destination/image-moon.webp';
import marsImage from '../../assets/destination/image-mars.webp';
import titanImage from '../../assets/destination/image-titan.webp';
import europaImage from '../../assets/destination/image-europa.webp';

import classes from './Destination.module.css';

function Destination() {
    const [image, setImage] = useState(moonImage);
    const [name, setName] = useState(destinations[0].name);
    const [desc, setDesc] = useState(destinations[0].description);
    const [distance, setDistance] = useState(destinations[0].distance);
    const [travel, setTravel] = useState(destinations[0].travel);

    function changeContentHandler(e) {
        const target = e.target
        if (target.textContent === 'Moon') {
            setImage(moonImage)
            setName(destinations[0].name)
            setDesc(destinations[0].description)
            setDistance(destinations[0].distance)
            setTravel(destinations[0].travel)
        } else if (target.textContent === 'Mars') {
            setImage(marsImage)
            setName(destinations[1].name)
            setDesc(destinations[1].description)
            setDistance(destinations[1].distance)
            setTravel(destinations[1].travel)
        } else if (target.textContent === 'Europa') {
            setImage(europaImage)
            setName(destinations[2].name)
            setDesc(destinations[2].description)
            setDistance(destinations[2].distance)
            setTravel(destinations[2].travel)
        } else if (target.textContent === 'Titan') {
            setImage(titanImage)
            setName(destinations[3].name)
            setDesc(destinations[3].description)
            setDistance(destinations[3].distance)
            setTravel(destinations[3].travel)
        }
    }
    // const moon = destinations.findIndex(destination => destination.name.toLowerCase() === 'moon');
    return (
        <div className={classes['destination-page']}>
            <Header />
            <main>
                <button onClick={changeContentHandler}>Moon</button>
                <button onClick={changeContentHandler}>Mars</button>
                <button onClick={changeContentHandler}>Titan</button>
                <button onClick={changeContentHandler}>Europa</button>
                <img src={image} alt={name} />
                <span>{name}</span>
                <p>{desc}</p>
                <span>{distance}</span>
                <span>{travel}</span>
            </main>
        </div>
    );
};

export default Destination;