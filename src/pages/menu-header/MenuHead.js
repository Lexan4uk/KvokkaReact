import './MenuHead.css';
import img1 from './img/ellipse-1.svg'
import img2 from './img/ellipse-2.svg'
import img3 from './img/ellipse-3.svg'
import img4 from './img/ellipse-4.svg'
import img5 from './img/ellipse-5.png'
import img6 from './img/ellipse-6.svg'
import img7 from './img/ellipse-7.svg'
import quizimg from './img/quiz-1.png'




const MenuHead = () => {
  return (
    <div className='header-container'>
        <img className='img1' src={img1} alt=''/>
        <img className='img2' src={img2} alt=''/>
        <img className='img3' src={img3} alt=''/>
        <img className='img4' src={img4} alt=''/>
        <div className='info-img'>
            <img className='img5' src={img5} alt=''/>
            <img className='img6' src={img6} alt=''/>
            <img className='img7' src={img7} alt=''/>
            <img className='quizimg' src={quizimg} alt=''/>
        </div>

    </div>
  );
}

export default MenuHead;
