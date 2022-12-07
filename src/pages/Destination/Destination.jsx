import { useState } from 'react';

import Button from '../../components/Button/Button';
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
        const target = e.target.textContent
        if (target === 'Moon') {
            setImage(moonImage)
            setName(destinations[0].name)
            setDesc(destinations[0].description)
            setDistance(destinations[0].distance)
            setTravel(destinations[0].travel)

        } else if (target === 'Mars') {
            setImage(marsImage)
            setName(destinations[1].name)
            setDesc(destinations[1].description)
            setDistance(destinations[1].distance)
            setTravel(destinations[1].travel)

        } else if (target === 'Europa') {
            setImage(europaImage)
            setName(destinations[2].name)
            setDesc(destinations[2].description)
            setDistance(destinations[2].distance)
            setTravel(destinations[2].travel)

        } else if (target === 'Titan') {
            setImage(titanImage)
            setName(destinations[3].name)
            setDesc(destinations[3].description)
            setDistance(destinations[3].distance)
            setTravel(destinations[3].travel)
        }
    }
    return (
        <div className={classes['destination-page']}>
            <Header />
            <main>
                <h2 className={classes['destination-page__heading']}><strong>01</strong>pick your destination</h2>
                <div className={classes['destination-page__image-container']}>
                    <img className={classes['destination-page__image']} src={image} alt={name} />
                </div>
                <Button onChangeContent={changeContentHandler}>Moon</Button>
                <Button onChangeContent={changeContentHandler}>Mars</Button>
                <Button onChangeContent={changeContentHandler}>Titan</Button>
                <Button onChangeContent={changeContentHandler}>Europa</Button>
                <h3 className={classes['destination-page__name']}>{name}</h3>
                <p className={classes['destination-page__description']}>{desc}</p>
                <span className={classes['destination-page__info']}>{distance}</span>
                <span className={classes['destination-page__info']}>{travel}</span>
            </main>
        </div>
    );
};

export default Destination;