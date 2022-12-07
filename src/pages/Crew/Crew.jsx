import { useState } from 'react';

import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";

import { crews } from "../../data/data";
import anoushehImage from '../../assets/crew/image-anousheh-ansari.webp';
import douglasImage from '../../assets/crew/image-douglas-hurley.webp';
import markImage from '../../assets/crew/image-mark-shuttleworth.webp';
import viktorImage from '../../assets/crew/image-victor-glover.webp';

import classes from './Crew.module.css';

function Crew() {
    const [image, setImage] = useState(douglasImage);
    const [name, setName] = useState(crews[0].name);
    const [role, setRole] = useState(crews[0].role);
    const [bio, setBio] = useState(crews[0].bio);

    function changeContentHandler(e) {
        const target = e.target.textContent

        if (target === '1') {
            setImage(douglasImage)
            setName(crews[0].name)
            setRole(crews[0].role)
            setBio(crews[0].bio)

        } else if (target === '2') {
            setImage(markImage)
            setName(crews[1].name)
            setRole(crews[1].role)
            setBio(crews[1].bio)

        } else if (target === '3') {
            setImage(viktorImage)
            setName(crews[2].name)
            setRole(crews[2].role)
            setBio(crews[2].bio)

        } else if (target === '4') {
            setImage(anoushehImage)
            setName(crews[3].name)
            setRole(crews[3].role)
            setBio(crews[3].bio)
        }
    };

    return (
        <div className={classes['crew-page']}>
            <Header />
            <main>
                <h2 className={classes['crew-page__heading']}><strong>02</strong>meet your crew</h2>
                <div className={classes['crew-page__image-container']}>
                    <img className={classes['crew-page__image']} src={image} alt={name} />
                </div>
                <Button onChangeContent={changeContentHandler}><span className={classes['crew-page__id']}>1</span></Button>
                <Button onChangeContent={changeContentHandler}><span className={classes['crew-page__id']}>2</span></Button>
                <Button onChangeContent={changeContentHandler}><span className={classes['crew-page__id']}>3</span></Button>
                <Button onChangeContent={changeContentHandler}><span className={classes['crew-page__id']}>4</span></Button>
                <span className={classes['crew-page__role']}>{role}</span>
                <h3 className={classes['crew-page__name']}>{name}</h3>
                <p className={classes['crew-page__bio']}>{bio}</p>
            </main>
        </div>
    );
};

export default Crew;