import './widget.scss'
import Check from '../../assets/imgs/icon.png'

// Lang
import Localization from '../../Localization/Localization'
import useLang from "./../../Hook/useLang";

// dark
import {useContext} from 'react'; 
import {Context} from '../../Context/ThemContext';

function Widget(){

    const [lang] = useLang()

    const {theme} = useContext(Context)

    return(
        <div className={theme}>
        <div className="container">
            <div className="widget">
                <ul className='widget__list'>
                    <li className='widget__item'>
                        <h4 className='widget__head'>{Localization[lang].aside.titleAs1}</h4>
                        <h2 className='widget__header'>$0</h2>
                        <div className="widget__text">
                            <p className='widget__title'><img className='widget__img' src={Check} w alt="icon" /> {Localization[lang].aside.titleAs2}</p>
                            <div className="widget__right">{Localization[lang].aside.titleAs6}</div>
                        </div>
                        <div className="widget__text">
                            <p className='widget__title2'><img className='widget__img' src={Check} w alt="icon" /> {Localization[lang].aside.titleAs3}</p>
                            <div className="widget__right">{Localization[lang].aside.titleAs7}</div>
                        </div>
                        <div className="widget__text">
                            <p className='widget__title3'><img className='widget__img' src={Check} w alt="icon" /> {Localization[lang].aside.titleAs4}</p>
                            <div className="widget__right">{Localization[lang].aside.titleAs7}</div>
                        </div>
                        <div className="widget__text">
                            <p className='widget__title4'><img className='widget__img' src={Check} w alt="icon" /> {Localization[lang].aside.titleAs5}</p>
                            <div className="widget__right">{Localization[lang].aside.titleAs7}</div>
                        </div>
                    </li>
                    <li className='widget__item2'>
                        <h4 className='widget__head'>{Localization[lang].aside.titleAs1}</h4>
                        <h2 className='widget__header'>$130</h2>
                        <div className="widget__text">
                            <p className='widget__title'><img className='widget__img' src={Check} w alt="icon" /> {Localization[lang].aside.titleAs2}</p>
                            <div className="widget__right">{Localization[lang].aside.titleAs6}</div>
                        </div>
                        <div className="widget__text">
                            <p className='widget__title'><img className='widget__img' src={Check} w alt="icon" /> {Localization[lang].aside.titleAs3}</p>
                            <div className="widget__right">{Localization[lang].aside.titleAs6}</div>
                        </div>
                        <div className="widget__text">
                            <p className='widget__title3'><img className='widget__img' src={Check} w alt="icon" /> {Localization[lang].aside.titleAs4}</p>
                            <div className="widget__right">{Localization[lang].aside.titleAs7}</div>
                        </div>
                        <div className="widget__text">
                            <p className='widget__title4'><img className='widget__img' src={Check} w alt="icon" /> {Localization[lang].aside.titleAs5}</p>
                            <div className="widget__right">{Localization[lang].aside.titleAs7}</div>
                        </div>
                    </li>
                    <li className='widget__item'>
                        <h4 className='widget__head'>{Localization[lang].aside.titleAs1}</h4>
                        <h2 className='widget__header'>$210</h2>
                        <div className="widget__text">
                            <p className='widget__title'><img className='widget__img' src={Check} w alt="icon" /> {Localization[lang].aside.titleAs2}</p>
                            <div className="widget__right">{Localization[lang].aside.titleAs6}</div>
                        </div>
                        <div className="widget__text">
                            <p className='widget__title'><img className='widget__img' src={Check} w alt="icon" /> {Localization[lang].aside.titleAs3}</p>
                            <div className="widget__right">{Localization[lang].aside.titleAs6}</div>
                        </div>
                        <div className="widget__text">
                            <p className='widget__title'><img className='widget__img' src={Check} w alt="icon" /> {Localization[lang].aside.titleAs4}</p>
                            <div className="widget__right">{Localization[lang].aside.titleAs6}</div>
                        </div>
                        <div className="widget__text">
                            <p className='widget__title'><img className='widget__img' src={Check} w alt="icon" /> {Localization[lang].aside.titleAs5}</p>
                            <div className="widget__right">{Localization[lang].aside.titleAs6}</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        </div>
    );
}

export default Widget ;