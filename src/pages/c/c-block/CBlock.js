import './CBlock.css';
import React, { useState, useEffect } from 'react';
import { cquestions } from '../../../things/content';
import EndPage from '../../end-page/EndPage';
import CHead from '../c-header/CHead';

const CBlock = () => {
  const [step, setStep] = useState(0);
  const [selectedVariants, setSelectedVariants] = useState([]);
  const [isAnswerButtonDisabled, setIsAnswerButtonDisabled] = useState(true);
  const [correct, setCorrect] = useState(0);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const question = cquestions[step];

  // Обработчик клика по варианту ответа
  const onClickVariant = (index) => {
    const isSelected = selectedVariants.includes(index);
  
    // Если вопрос позволяет выбирать несколько верных ответов
    if (question.multipleCorrect) {
      if (isSelected) {
        // Если вариант уже выбран, убрать его из списка
        const updatedVariants = selectedVariants.filter((i) => i !== index);
        setSelectedVariants(updatedVariants);
      } else {
        // Если вариант не выбран, добавить его в список
        setSelectedVariants([...selectedVariants, index]);
      }
    } else {
      // Если вопрос допускает только один верный ответ
      setSelectedVariants([index]);
    }
  
    setIsAnswerButtonDisabled(false);
  };

  // Обработчик клика по кнопке ответа
  const onClickAnswer = () => {
    setIsAnswerButtonDisabled(true);

    // Проверка на правильность ответа
    const isCorrect = question.multipleCorrect
      ? arraysEqual(selectedVariants, question.correct)
      : selectedVariants.length === 1 && selectedVariants[0] === question.correct[0];

    if (isCorrect) {
      setCorrect(correct + 1);
    }
    setShowCorrectAnswer(true);

    // Переход к следующему вопросу через 3 секунды
    setTimeout(() => {
      setStep(step + 1);
      setSelectedVariants([]);
      setIsAnswerButtonDisabled(true);
      setShowCorrectAnswer(false);
    }, 3000);
  };

  // Функция для проверки равенства двух массивов
  const arraysEqual = (arr1, arr2) => {
    return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
  };

  // Сброс индикатора верного ответа перед каждым новым вопросом
  useEffect(() => {
    setShowCorrectAnswer(false);
  }, [step]);

  // Рендеринг компонента
  if (step !== cquestions.length) {
    return (
      <>
        <CHead />
        <div className='C-content-holder'>
          <div className='C-question-holder'>
            <a>Вопрос</a>
            <p>{question.title}</p>
          </div>
          <div className='C-button-holder'>
            {question.answers.map((variant, index) => (
              <button
                key={variant}
                onClick={() => onClickVariant(index)}
                className={
                  selectedVariants.includes(index)
                    ? showCorrectAnswer
                      ? question.correct.includes(index)
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
              <p>{question.multipleCorrect ? 'Отправить один или несколько вариантов ответа' : 'Отправить'}</p>
            </button>
          </div>
        </div>
      </>
    );
  } else {
    // Показать страницу с результатами в конце викторины
    return <EndPage correct={correct} length={cquestions.length} />;
  }
};

export default CBlock;
