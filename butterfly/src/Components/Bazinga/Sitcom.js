import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
// Styles
import Style from '../../Styles/Bazinga/Sitcom.module.css';

const API_BASE = 'https://api.tvmaze.com';

const Sitcom = (props) => {

    // States
    const [showModal, setShowModal] = useState(false);
    const [toggle, setToggle] = useState(true);

    const [episodeTitle, setEpisodeTitle] = useState("");
    const [episodeIndex, setEpisodeIndex] = useState("");

    const [season, setSeason] = useState();
    const [episode, setEpisode] = useState();

    // Functions
    const randomGenerator = () => {
        setShowModal(true);
        setToggle(false);
        axios({
            method: 'GET',
            url: `${API_BASE}/shows${props.showId}/seasons`,
        }).then(async res => {
            const seasonIndex = await Math.floor(Math.random() * res.data.length);
            const seasonId = res.data[seasonIndex].id;
            axios({
                method: 'GET',
                url: `${API_BASE}/seasons/${seasonId}/episodes`,
            }).then(async res => {
                const episodeIndex = await Math.floor(Math.random() * res.data.length);
                setSeason(seasonIndex + 1);
                setEpisode(episodeIndex + 1);
                setEpisodeTitle(res.data[episodeIndex].name);
                setEpisodeIndex(res.data[episodeIndex].image.original);
                setToggle(true);
            });
        });
    };

    return (
        <div>
            <motion.div whileHover={{ scale: 1.1 }}>
                <img className={Style.poster} alt='Sitcom poster' src={props.poster} />
                <span onClick={randomGenerator} className={Style.title}>Give me a random episode of {props.title}</span>
            </motion.div>
            {showModal ? (
                <div className={Style.modal}>
                    <div>
                        {toggle ? (
                            <>
                                <img src={episodeIndex} alt='confetti icon' />
                                <p>You should watch</p>
                                <p>Season {season}, Episode {episode} of {props.title}:</p>
                                <span>{`“${episodeTitle}”`}</span>
                                <button onClick={randomGenerator}>try again!</button>
                                <button onClick={() => setShowModal(false)}>looks good!</button>
                            </>
                        ) : (
                            <span className={Style.loading} >Loading...</span>
                        )}
                    </div>
                </div>
            ) : ""}
        </div>
    );
};

export default Sitcom;