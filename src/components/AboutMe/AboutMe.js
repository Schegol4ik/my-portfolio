import React from 'react';
import './AboutMe.scss'
import {TRANSLATE} from "../../translate/translate";

const AboutMe = ({lang}) => {
    return (
        <a name='about_me'>
        <div className='wrapper__about_me'>
            <h1>{TRANSLATE[lang].about_menu.title}</h1>
            <div className='about_me__text'>
                <span>{TRANSLATE[lang].about_menu.text_one}</span>
                <span>{TRANSLATE[lang].about_menu.text_two}</span>
                <span>{TRANSLATE[lang].about_menu.text_three}</span>
            </div>
        </div>
        </a>
    );
};

export default AboutMe;