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
    const [isActive, setIsActive] = useState({
        activeObject: destinations[0],
        objects: destinations,
        images: [moonImage, marsImage, titanImage, europaImage]
    })

    function changeContentHandler(index) {
        setImage(isActive.images[index])
        setName(isActive.objects[index].name)
        setDesc(isActive.objects[index].description)
        setDistance(isActive.objects[index].distance)
        setTravel(isActive.objects[index].travel)
    }

    function toggleActiveHandler(index) {
        setIsActive({ ...isActive, activeObject: isActive.objects[index] })
    }

    function toggleClassHandler(index) {
        if (isActive.objects[index] === isActive.activeObject) {
            return `${[classes['destination-page__btn'], classes['destination-page__btn--active']].join(' ')}`
        } else {
            return `${classes['destination-page__btn']}`
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
                <div className={classes['destination-page__btn-container']}>
                    {isActive.objects.map((el, index) => (
                        <button key={el.name} className={toggleClassHandler(index)} onClick={() => { changeContentHandler(index); toggleActiveHandler(index) }}>{el.name}</button>
                    ))}
                </div>
                <h3 className={classes['destination-page__name']}>{name}</h3>
                <p className={classes['destination-page__description']}>{desc}</p>
                <span className={classes['destination-page__info']}>{distance}</span>
                <span className={classes['destination-page__info']}>{travel}</span>
            </main>
        </div>
    );
};

export default Destination;