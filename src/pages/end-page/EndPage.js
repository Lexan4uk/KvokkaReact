import './EndPage.css';
import img2 from './img/ellipse-2.svg'
import img3 from './img/ellipse-3.svg'
import img4 from './img/ellipse-4.svg'
import img5 from './img/ellipse-5.png'
import img6 from './img/ellipse-6.svg'
import img7 from './img/ellipse-7.svg'
import img8 from './img/ellipse-8.svg'
import img9 from './img/ellipse-9.svg'
import qimg from './img/quiz-1.png'
import completedimg from './img/completed.png'
import Main from '../main/Main';
import { Link } from 'react-router-dom';




const EndPage = ({correct, length}) => {
  return (
    <div className='endpage-header-container'>
        <img className='img2' src={img2} alt=''/>
        <img className='img3' src={img3} alt=''/>
        <img className='img4' src={img4} alt=''/>
        <div className='info-img'>
            <img className='img5' src={img5} alt=''/>
            <img className='img6' src={img6} alt=''/>
            <img className='img7' src={img7} alt=''/>
            <img className='qimg' src={qimg} alt=''/>
        </div>
        <img className='img8' src={img8} alt=''/>
        <img className='img9' src={img9} alt=''/>
        <img className='completedimg' src={completedimg} alt=''/>
    <p>Вы ответили верно на {correct} из {length} вопросов</p>
    <Link to='/'><a className='back'>Вернуться</a></Link>
    </div>
  );
}

export default EndPage;
