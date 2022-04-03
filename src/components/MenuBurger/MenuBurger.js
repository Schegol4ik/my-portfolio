import React from 'react';
import './MenuBurger.scss';
import classnames from 'classnames'
import {TRANSLATE} from "../../translate/translate";
import { AiOutlineClose } from "react-icons/ai";



const MenuBurger = ({isMenu, handleMenu, lang, handleLanguage, setCurrentLang, currentLang}) => {
    return (
        <div className={classnames('wrapper__menu_burger', {
            ['active']: isMenu
        })}>
            {TRANSLATE[lang].header_menu.map(({title, go_to}) => <div
                key={title} className='menu_burger__titles'>
                <a href={go_to} onClick={() => handleMenu()}>{title}</a>
            </div>)}
            <AiOutlineClose
                onClick={() => handleMenu()}
                className='menu_burger__close'/>
            <div className='menu_burger__lang'>
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
    );
};

export default MenuBurger;