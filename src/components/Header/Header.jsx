import './Header.scss'
import Radius from "../../assets/imgs/repeat.png"
import Localization from '../../Localization/Localization'
import useLang from "./../../Hook/useLang";
import React, { useState } from 'react';
import {useContext} from 'react'; 
import {Context} from '../../Context/ThemContext';
 
function Header(){
 
    // const x = useContext(Context)

    const head = React.useRef(null)

    const [lang , setLang] = useLang()
    console.log(Localization[lang]);

    const onChangeLang = (e) =>{
        setLang(e.currentTarget.value)
    }

    const { theme, setTheme } = useContext(Context)
    console.log(theme);

        const changeTheme = (e) =>{
            setTheme(e.currentTarget.value);

            // window.localStorage.setItem("them" , e.currentTarget.value)
        } 

    return(
        <div className="container">
            <div className={theme}>
            <header className='header'>
                <div className="header__logo"><img src={Radius} width={20} height={20} alt="" /> Soft point</div>
                <ul className='header__list'>
                    <li className="header__item"><a className='header__link' href="">{Localization[lang].header.titleHead1}</a></li>
                    <li className="header__item"><a className='header__link' href="">{Localization[lang].header.titleHead2}</a></li>
                    <li className="header__item"><a className='header__link' href="">{Localization[lang].header.titleHead3}</a></li>
                </ul>
                <button className='header__btn'>{Localization[lang].header.titleHead4}</button>
                <div className="box">
                    <select className="select" defaultValue={lang} onChange={(e)=> onChangeLang(e)}>
                    <option className='option' value={"uz"} >UZB</option>
                    <option className='option' value={"en"} >EN</option>
                    <option className='option' value={"ru"} >РУС</option>
                </select>
                {/* <select defaultValue={theme} onChange={(e)=> changeTheme(e)} className="darkmode">
                    <option value={"light"}>Light</option>
                    <option value={"dark"}>Dark</option>
                </select> */}
                </div>
            </header>
            </div>
        </div> // end of container
    );
}

export default Header;