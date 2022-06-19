import React from 'react';
import './Header.scss'
import {TRANSLATE} from "../../translate/translate";

const Header = ({lang}) => {
    return (
        <a name="home">
        <div className='wrapper__header'>
                {TRANSLATE[lang].header_menu.map(({title, go_to}) => <div
                    key={title} className='header__titles'>
                    <a href={go_to}>{title}</a>
                </div>)}
            </div>
        </a>
    );
};

export default Header;