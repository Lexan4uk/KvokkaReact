import './CBlock.css';
import React, { useState } from 'react';
import { cquestions } from '../../../things/content';
import { NavLink } from "react-router-dom"
import { Link } from "react-router-dom"


const CBlock = () => {
  const [step, setStep] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [isAnswerButtonDisabled, setIsAnswerButtonDisabled] = useState(true);
  const question = cquestions[step];

  const onClickVariant = (index) => {
    setSelectedVariant(index);
    setIsAnswerButtonDisabled(false);
  };

  const onClickAnswer = () => {
    if (step !== cquestions.length - 1) {
      console.log('not end');
      setStep(step + 1);
      setSelectedVariant(null);
      setIsAnswerButtonDisabled(true);
    } else {
      <Link to="/result"/>;
    }
  };

  return (
    <div className='C-content-holder'>
      <div className='C-question-holder'>
        <a>Question</a>
        <p>{question.title}</p>
      </div>
      <div className='C-button-holder'>
        {question.ansvers.map((variant, index) => (
          <button
            key={variant}
            onClick={() => onClickVariant(index)}
            className={selectedVariant === index ? 'selected' : ''}
          >
            <p>{variant}</p>
          </button>
        ))}
        <button onClick={onClickAnswer} className={isAnswerButtonDisabled ? 'sumbit' : 'sumbit active'}>
          <p>Ответить</p>
        </button>
      </div>
    </div>
  );
};

export default CBlock;