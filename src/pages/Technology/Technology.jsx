import { useState } from 'react';

import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";

import { technologies } from "../../data/data";

import classes from './Technology.module.css';

function Technology() {
    // const [image, setImage] = useState(douglasImage);
    const [name, setName] = useState(technologies[0].name);
    const [desc, setDesc] = useState(technologies[0].description);

    function changeContentHandler(e) {
        const target = e.target.textContent

        if (target === '1') {
            setName(technologies[0].name)
            setDesc(technologies[0].description)

        } else if (target === '2') {
            setName(technologies[1].name)
            setDesc(technologies[1].description)

        } else if (target === '3') {
            setName(technologies[2].name)
            setDesc(technologies[2].description)
        }
    };

    return (
        <div className={classes['technology-page']}>
            <Header />
            <Button onChangeContent={changeContentHandler}>1</Button>
            <Button onChangeContent={changeContentHandler}>2</Button>
            <Button onChangeContent={changeContentHandler}>3</Button>
            <span>{name}</span>
            <span>{desc}</span>
        </div>
    );
};

export default Technology;