import { useNavigate } from "react-router-dom";

import Header from '../../components/Header/Header';

import classes from './Home.module.css';

function Home() {
    let navigate = useNavigate();

    function goToDestinationHandler() {
        navigate("/destination");
    };

    return (
        <div className={classes['home-page']}>
            <Header />
            <div>
                <h2>so, you want to travel to</h2>
                <h1>space</h1>
                <p>Let`s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we`ll give you a truly out of this world experience!</p>
                <button onClick={goToDestinationHandler}><span>explore</span></button>
            </div>
        </div>
    );
};

export default Home;