import { useState, useEffect } from 'react'
import quizStyles from '../../styles/quizStyles.module.css'

// == Extra Component Data ==
const options = [
  'Most expensive',
  'Least expensive',
  'Most popular',
  'Least popular',
]

const QuizQuestions = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1)
  const [selectedOption, setSelectedOption] = useState(2)
  const [counter, setCounter] = useState(15)
  const [danger, setDanger] = useState(false)

  // == Effect Hook for counter ==
  useEffect(() => {
    if(counter > 0) setTimeout(() => setCounter(counter - 1), 1000)
    if(counter <= 3 && counter > 0) setDanger(true)
    if(counter === 0) setCounter(15)
  }, [counter])
  
  return (
    <>
      <div className={quizStyles.questionHeader}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span className={quizStyles.questionTracker}>Question 1/50</span>
          <span className={quizStyles.timer}>Time: <span style={{ color: danger ? 'red' : 'green' }}>{counter}sec</span></span>
        </div>
        <span className={quizStyles.question}>
          Motor racing is the --- sports in the world.
        </span>
      </div>
      <div className={quizStyles.questionOptions}>
        {options.map((option, index) => (
          <div
            className={
              index === selectedOption
                ? quizStyles.optionBoxselected
                : quizStyles.optionBox
            }
            key={index}
            onClick={() => setSelected(index)}
          >
            <span
              className={
                index === selectedOption ? quizStyles.dotselected : quizStyles.dot
              }
            >
              {index === selectedOption ? (
                <span className={quizStyles.smalldot}></span>
              ) : null}
            </span>
            <span
              className={
                index === selectedOption
                  ? quizStyles.optionselected
                  : quizStyles.option
              }
            >
              {option}
            </span>
          </div>
        ))}
      </div>
    </>
  )
}

export default QuizQuestions