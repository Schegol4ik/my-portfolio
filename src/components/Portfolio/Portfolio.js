import React from 'react';
import './Portfolio.scss'
import {TRANSLATE} from "../../translate/translate";
import todo from '../../assets/todo-app.png'
import logistic from '../../assets/logistic-app.png'
import recipes from '../../assets/recipes-app.png'


const Portfolio = ({lang}) => {
    return (
        <a name='portfolio'>
        <div className='wrapper__portfolio'>
            <h1>{TRANSLATE[lang].portfolio_menu.title}</h1>
            <div className='portfolio__item'>
                <a target='_blank' href="https://todoartyom.netlify.app"><img src={todo} alt=""/></a>
                <span>{TRANSLATE[lang].portfolio_menu.app_one}</span>
                <div className='portfolio__links'>
                    <a target='_blank' href="https://todoartyom.netlify.app">
                        {TRANSLATE[lang].portfolio_menu.app_githubPages}
                    </a>
                    <a target='_blank' href="https://github.com/Schegol4ik/to-do-list">
                        {TRANSLATE[lang].portfolio_menu.app_github}
                    </a>
                </div>
            </div>
            <div className='portfolio__item'>
                <a target='_blank' href="https://schegol4ik.github.io/logistic-test/"><img src={logistic} alt=""/></a>
                <span>{TRANSLATE[lang].portfolio_menu.app_two}</span>
                <div className='portfolio__links'>
                    <a target='_blank' href="https://schegol4ik.github.io/logistic-test/">
                        {TRANSLATE[lang].portfolio_menu.app_githubPages}
                    </a>
                    <a target='_blank' href="https://github.com/Schegol4ik/logistic-test">
                        {TRANSLATE[lang].portfolio_menu.app_github}
                    </a>
                </div>
            </div>
            <div className='portfolio__item'>
                <a target='_blank' href="https://schegol4ik.github.io/tradicionalyRecipes/"><img src={recipes} alt=""/></a>
                <span>{TRANSLATE[lang].portfolio_menu.app_three}</span>
                <div className='portfolio__links'>
                    <a target='_blank' href="https://schegol4ik.github.io/tradicionalyRecipes/">
                        {TRANSLATE[lang].portfolio_menu.app_githubPages}
                    </a>
                    <a target='_blank' href="https://github.com/Schegol4ik/tradicionalyRecipes">
                        {TRANSLATE[lang].portfolio_menu.app_github}
                    </a>
                </div>
            </div>

        </div>
        </a>
    );
};

export default Portfolio;