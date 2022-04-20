import './Main-senter.scss'
import Icon from '../../assets/imgs/icon.png'
import Right from '../../assets/imgs/Right.png'

// Lang
import Localization from '../../Localization/Localization'
import useLang from "./../../Hook/useLang";

// dark
import {useContext} from 'react'; 
import {Context} from '../../Context/ThemContext';

function MainSenter(){

    const [lang] = useLang()

    
    const {theme} = useContext(Context)

    return(
        <div className={theme}>
        <div className="container">
            <div className="aside">
                <div className="aside__left">
                    <h2 className='aside__head'>{Localization[lang].mainS.titleMainSe1}</h2>
                    <p className='aside__text'>{Localization[lang].mainS.titleMainSe2}</p>
                    <pre className='aside__title'><img src={Icon} width={20} alt="" /> {Localization[lang].mainS.titleMainSe3}</pre>
                    <pre className='aside__title'><img src={Icon} width={20} alt="" /> {Localization[lang].mainS.titleMainSe4}</pre>
                    <pre className='aside__title'><img src={Icon} width={20} alt="" /> {Localization[lang].mainS.titleMainSe5}</pre>
                    <pre className='aside__title'><img src={Icon} width={20} alt="" /> {Localization[lang].mainS.titleMainSe6}</pre>
                </div>
                <div className="aside__right">
                    <img src={Right} alt="" />
                </div>
            </div>
        </div>
        </div>
    );
}

export default MainSenter;