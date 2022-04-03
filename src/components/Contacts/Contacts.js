import React from 'react';
import './Contacts.scss'
import {TRANSLATE} from "../../translate/translate";
import {AiOutlineGithub} from "react-icons/ai";
import {AiOutlineLinkedin} from "react-icons/ai";
import {BsInstagram} from "react-icons/bs";
import {BsTelegram} from "react-icons/bs";


const Contacts = ({lang}) => {
    return (
        <a name='contact'>
        <div className='wrapper__contact'>
            <h1>{TRANSLATE[lang].contacts_menu.title}</h1>
            <div className='contact__item'>
                <span>{TRANSLATE[lang].contacts_menu.message}</span>
                <a target='_blank' href="mailto:iliyinchikartem@gmail.com">
                    <button>{TRANSLATE[lang].contacts_menu.button_text}</button>
                </a>
            </div>
            <div className='contact__links'>
                <a target='_blank' href="https://github.com/Schegol4ik">
                    <AiOutlineGithub/>
                </a>
                <a target='_blank' href="https://www.linkedin.com/in/%D0%B0%D1%80%D1%82%D1%91%D0%BC-%D0%B8%D0%BB%D1%8C%D0%B8%D0%BD%D1%87%D0%B8%D0%BA-9b5584221/">
                    <AiOutlineLinkedin style={{marginLeft: '20px'}}/></a>
                <a target='_blank' href="https://www.instagram.com/djonsibak/">
                    <BsInstagram style={{marginLeft: '20px'}}/>
                </a>
                <a target='_blank' href="https://t.me/JonesBaker">
                    <BsTelegram style={{marginLeft: '20px'}}/>
                </a>
            </div>
        </div>
        </a>
    );
};

export default Contacts;