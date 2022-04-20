import './Main.scss'

// Lang
import Localization from '../../Localization/Localization'
import useLang from "./../../Hook/useLang";

// dark
import {useContext} from 'react'; 
import {Context} from '../../Context/ThemContext';

function Main() {

    const [lang] = useLang()

    const {theme} = useContext(Context)

    return(
        <div className={theme}>
        <div className="container">
            <main className='main'>
                <div className="main__left">
                    <div className="main__list">
                        <div className="main__item">
                            <h2 className='main__head'>{Localization[lang].main.titleMain1}</h2>
                            <p className='main__text'>{Localization[lang].main.titleMain5}</p>
                        </div>

                        <div className="main__item">
                            <h2 className='main__head2'>{Localization[lang].main.titleMain2}</h2>
                            <p className='main__text'>{Localization[lang].main.titleMain5}</p>
                        </div>
                    </div>
                    <div className="main__list">
                        <div className="main__item">
                            <h2 className='main__head3'>{Localization[lang].main.titleMain3}</h2>
                            <p className='main__text'>{Localization[lang].main.titleMain5}</p>
                        </div>

                        <div className="main__item">
                            <h2 className='main__head4'>{Localization[lang].main.titleMain4}</h2>
                            <p className='main__text'>{Localization[lang].main.titleMain5}</p>
                        </div>
                    </div>
                </div>
                <div className="main__right">
                    <h2 className='main__right--head'>{Localization[lang].main.titleMain6}</h2>
                    <p className='main__right--text'>{Localization[lang].main.titleMain7}</p>
                    <div className='main__right--text2'>{Localization[lang].main.titleMain8}</div>
                    <button className='main__btn'><a className='link' href="https://www.receptix.us/us/software-development" target="_blank">{Localization[lang].main.titleMain9}</a></button>
                </div>
            </main>
        </div>
        </div>
        
    );
}

export default Main ;