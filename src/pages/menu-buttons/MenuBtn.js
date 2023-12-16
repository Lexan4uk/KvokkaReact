import './MenuBtn.css';
import cPng from './img/c-1.png'
import javaPng from './img/java-1.png'
import pythonPng from './img/python-2.png'



const MenuBtn = () => {
    return (
        <div className='button-holder'>
            <button><img src={cPng}/><p>C++</p></button>
            <button><img src={javaPng}/><p>Java</p></button>
            <button><img src={pythonPng}/><p>Python</p></button>
        </div>
    );
}
 
export default MenuBtn;