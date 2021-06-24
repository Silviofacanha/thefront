import React from 'react';
import ButtonPrimary from '../Components/ButtonPrimary';
import ButtonSecundary from '../Components/ButtonSecondary';
import { Title, Subtitle, Body } from '../Components/Text';


const Home = () => {
    return (
        <div>
            <ButtonPrimary title="Get Started" />
            <ButtonSecundary title="Documentation" />
            <Title text="A modern design system for your new"/>
            <Subtitle text="Less code. More speed"/>
            <Body text="theFront is a simple, modular and accessible component library that gives you the building blocks you need to build your React applications" />
        </div>
    );
};

export default Home;