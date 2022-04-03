import React, {useState} from 'react';
import './Home.scss'
import {TRANSLATE} from "../../translate/translate";
import firstPhoto from '../../assets/firstPhoto.jpg'
import classnames from 'classnames'
import MenuBurger from "../MenuBurger/MenuBurger";
import {AiOutlineClose} from "react-icons/ai";
import {AiOutlineMenu} from "react-icons/ai";


const Home = ({lang, handleLanguage, isMenu, handleMenu}) => {

    const [currentLang, setCurrentLang] = useState(0)

    return (
        <a name='home'>
            <div className='wrapper__home'>
                <div className='home__content_text'>
                    <div className='home__me'>
                        <img src={firstPhoto}/>
                        <div className='me__name'>
                            <span>{TRANSLATE[lang].home_menu.name}</span>
                            <span>{TRANSLATE[lang].home_menu.lastName}</span>
                        </div>
                        <div className="home__profession">
                            <span>{TRANSLATE[lang].home_menu.profession}</span>
                            <span>{TRANSLATE[lang].home_menu.age}</span>
                        </div>
                    </div>
                    <div className='home__lang'>
                        {TRANSLATE.lang.map((item, index) => <span
                            className={classnames({
                                ['active']: index === currentLang
                            })}
                            key={item}
                            onClick={() => {
                                handleLanguage(item)
                                setCurrentLang(index)
                            }}>
                        {item}
                    </span>)}
                    </div>
                </div>
                <div className='burger__menu'>
                    {isMenu
                        ? <AiOutlineClose size={25} onClick={() => handleMenu()}/>
                        : <AiOutlineMenu onClick={() => handleMenu()} size={25}/>
                    }
                </div>
                <MenuBurger handleMenu={handleMenu} isMenu={isMenu} handleLanguage={handleLanguage}
                            setCurrentLang={setCurrentLang}
                            lang={lang} currentLang={currentLang}/>
            </div>
        </a>
    );
};

export default Home;