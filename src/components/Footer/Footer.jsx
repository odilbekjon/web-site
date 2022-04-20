import './Footer.scss'
import Radius from "../../assets/imgs/repeat.png"
import {useContext} from 'react'; 
import {Context} from '../../Context/ThemContext';

// Lang
import Localization from '../../Localization/Localization'
import useLang from "./../../Hook/useLang";

function Footer(){

    const {theme} = useContext(Context)

    const [lang] = useLang()

    return(
        
        <section className="section">
         <div className={theme}>
            <div className="container">
                <footer className='footer'>
                 <div className="footer__head">
                    <div className="header__logo"><img src={Radius} width={20} height={20} alt="" /> Soft point</div>
                    <div className="footer__list">
                        <div className="footer__item"><a className='footer__link' href="">{Localization[lang].footer.titleFoo1}</a></div>
                        <div className="footer__item"><a className='footer__link' href="">{Localization[lang].footer.titleFoo2}</a></div>
                        <div className="footer__item"><a className='footer__link' href="">{Localization[lang].footer.titleFoo3}</a></div>
                    </div>
                  </div>
                    <div className="footer__wrapp">
                        <a href='#' className='footer__title'>{Localization[lang].footer.titleFoo4}</a>
                        <a href='#' className='footer__title2'>{Localization[lang].footer.titleFoo5}</a>
                        <a href='#' className='footer__title3'>{Localization[lang].footer.titleFoo6}</a>
                        <a href='#' className='footer__title4'>(773) 217-8810</a>
                    </div>
                </footer>
               </div>
            </div>
         </section>
        
    );
}

export default Footer;