import './CBlock.css';
import React, { useState, useEffect  } from 'react';
import { cquestions } from '../../../things/content';
import EndPage from '../../end-page/EndPage';
import CHead from '../c-header/CHead';

var selectedIndex;
const CBlock = () => {
  const [step, setStep] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [isAnswerButtonDisabled, setIsAnswerButtonDisabled] = useState(true);
  const [correct, setCorrect] = useState(0);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const question = cquestions[step];

  const onClickVariant = (index) => {
    selectedIndex = index;
    setSelectedVariant(index);
    setIsAnswerButtonDisabled(false);
  };

  const onClickAnswer = () => {
    setIsAnswerButtonDisabled(true);
    if (selectedVariant === question.correct) {
      setCorrect(correct + 1);
    }
    setShowCorrectAnswer(true);

    // Ожидание и подгрузка 
    setTimeout(() => {
      setStep(step + 1);
      setSelectedVariant(null);
      setIsAnswerButtonDisabled(false); // Разблокировка кнопки перед следующим вопросом
      setShowCorrectAnswer(false);
    }, 3000);
  };

  useEffect(() => {
    // Очистка индикатора верного ответа перед подгрузкой нового вопроса
    setShowCorrectAnswer(false);
  }, [step]);

  if (step !== cquestions.length) {
    return (
      <>
        <CHead/>
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
                className={
                  selectedVariant === index
                    ? showCorrectAnswer
                      ? index === question.correct
                        ? 'selected correct'
                        : 'selected incorrect'
                      : 'selected'
                    : ''
                }
                disabled={showCorrectAnswer}
              >
                  <p>{variant}</p>
                </button>
              ))}
            <button onClick={onClickAnswer} className={isAnswerButtonDisabled ? 'sumbit' : 'sumbit active'} disabled={isAnswerButtonDisabled}>
                <p>Ответить</p>
              </button>
            </div>
          </div>
        </>
      );
    }
  else {
    return (
      <EndPage correct={correct} length={cquestions.length}/>
    )
  }
  
};

export default CBlock;
