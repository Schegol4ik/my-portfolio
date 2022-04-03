import React, {createContext, useContext, useState} from 'react';

const Context = createContext({
    language:'RU',
    changeLanguage: lang => {}
})

export const LanguageProvider = ({children}) => {
    const [lang,setLang] = useState('RU')

    const changeLanguage = (lang) => {
        setLang(lang)
    }

    return <Context.Provider value={{lang,changeLanguage}}>{children}</Context.Provider>
};

export const useLanguage = () => useContext(Context)