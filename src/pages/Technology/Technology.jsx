import { useState } from 'react';

import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";

import vehicleImage from '../../assets/technology/image-launch-vehicle-landscape.jpg';
import capsuleImage from '../../assets/technology/image-space-capsule-landscape.jpg';
import spaceportImage from '../../assets/technology/image-spaceport-landscape.jpg';

import { technologies } from "../../data/data";

import classes from './Technology.module.css';

function Technology() {
    const [image, setImage] = useState(vehicleImage);
    const [name, setName] = useState(technologies[0].name);
    const [desc, setDesc] = useState(technologies[0].description);

    function changeContentHandler(e) {
        const target = e.target.textContent

        if (target === '1') {
            setImage(vehicleImage);
            setName(technologies[0].name)
            setDesc(technologies[0].description)

        } else if (target === '2') {
            setImage(capsuleImage);
            setName(technologies[1].name)
            setDesc(technologies[1].description)

        } else if (target === '3') {
            setImage(spaceportImage);
            setName(technologies[2].name)
            setDesc(technologies[2].description)
        }
    };

    return (
        <div className={classes['technology-page']}>
            <Header />
            <main>
                <h2 className={classes['technology-page__heading']}><strong>03</strong>space launch 101</h2>
                <div className={classes['technology-page__image-container']}>
                    <img className={classes['technology-page__image']} src={image} alt={name} />
                </div>
                <Button onChangeContent={changeContentHandler}>1</Button>
                <Button onChangeContent={changeContentHandler}>2</Button>
                <Button onChangeContent={changeContentHandler}>3</Button>
                <span className={classes['technology-page__terminology']}>the terminology...</span>
                <h3 className={classes['technology-page__name']}>{name}</h3>
                <p className={classes['technology-page__description']}>{desc}</p>
            </main>
        </div>
    );
};

export default Technology;