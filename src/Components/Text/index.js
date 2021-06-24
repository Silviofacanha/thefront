import React from 'react';
import styles from './styles';

const Title = ({ text }) => {
    const classes = styles();
    return <h2 className={classes.title}>{text}</h2>;
};

const Subtitle = ({ text }) => {
    const classes = styles();
    return <h3 className={classes.subtitle}>{text}</h3>;
};

const Body = ({ text }) => {
    const classes = styles();
    return <p className={classes.body}>{text}</p>;
};

export {Title, Subtitle, Body};
