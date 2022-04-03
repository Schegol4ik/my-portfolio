import React, {useState} from 'react';
import './App.scss'
import {useLanguage} from "./hooks/useLanguage";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";
import Portfolio from "./components/Portfolio/Portfolio";
import Contacts from "./components/Contacts/Contacts";

const App = () => {


    const {lang, changeLanguage} = useLanguage()

    const handleLanguage = (lang) => {
        changeLanguage(lang)
    }

    const [isMenu, setIsMenu] = useState(false)

    const handleMenu = () => {
        setIsMenu(prev => !prev)
    }

    return (
        <div className='wrapper'>
            <div className="wrapper__content">
                <Header lang={lang}/>
                <Home lang={lang} handleLanguage={handleLanguage}  handleMenu={handleMenu} isMenu={isMenu}/>
                <AboutMe lang={lang}/>
                <Skills lang={lang}/>
                <Portfolio lang={lang}/>
                <Contacts lang={lang}/>
            </div>
        </div>
    );
};

export default App;