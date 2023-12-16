import './MenuBtn.css';
import cPng from './img/c-1.png'
import javaPng from './img/java-1.png'
import pythonPng from './img/python-2.png'
import { Link } from "react-router-dom"



const MenuBtn = () => {
    return (
        <div className='button-holder'>
            <button><img src={cPng} alt=''/><Link to='/c'><p>C++</p></Link></button>
            <button><img src={javaPng} alt=''/><p>Java</p></button>
            <button><img src={pythonPng} alt=''/><p>Python</p></button>
        </div>
    );
}
 
export default MenuBtn;