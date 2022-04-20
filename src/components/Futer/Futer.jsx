import './Futer.scss'
import Img from '../../assets/imgs/1458.png'

// Lang
import Localization from '../../Localization/Localization'
import useLang from "./../../Hook/useLang";

// dark
import {useContext} from 'react'; 
import {Context} from '../../Context/ThemContext';

function Futer(){

    const [lang] = useLang()

    const {theme} = useContext(Context)

    return(
        <section>
            <div className={theme}>
            <div className="container">
                <div className="futer">
                    <div className="futer__left">
                        <h3 className='futer__head'>{Localization[lang].foot.titleFoot1}</h3>
                        <p className='futer__text'>{Localization[lang].foot.titleFoot2}</p>
                        <p className='futer__text'>{Localization[lang].foot.titleFoot3}</p>
                        <button className='futer__btn'>{Localization[lang].foot.titleFoot4}</button>
                    </div>
                    <div className="futer__right">
                        <img src={Img} width={750} alt="" />
                    </div>
                </div>
            </div>
            </div>  
        </section>
    );
}

export default Futer;