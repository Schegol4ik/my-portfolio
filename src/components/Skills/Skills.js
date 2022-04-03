import React from 'react';
import './Skills.scss'
import {TRANSLATE} from "../../translate/translate";

const Skills = ({lang}) => {
    return (
        <a name='skills'>
        <div className='wrapper__skills'>
            <div className='skills__title'>
                <h1>{TRANSLATE[lang].skills_menu.title}</h1>
                <span>{TRANSLATE[lang].skills_menu.about_skills}</span>
            </div>
            <div className='skills__list'>
                <ul>
                    <li>HTML/CSS/Sass</li>
                    <li>React</li>
                    <li>Redux/Redux-thunk</li>
                    <li>TypeScript</li>
                    <li>English - A2</li>
                </ul>
                <ul>
                    <li>Git</li>
                    <li>Figma</li>
                    <li>Rest API</li>
                    <li>Express - base</li>
                    <li>MongoDB - base</li>
                </ul>
            </div>
        </div>
        </a>
    );
};

export default Skills;