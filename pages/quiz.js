import LeftArrowIcon from '../components/icons/LeftArrowIcon'
import { FcQuestions } from 'react-icons/fc'
import QuizQuestions from '../components/dashboard/QuizQuestions'
// import premiumQuizQuestions from '../data/premiumQuizQuestions'
import quizStyles from '../styles/quizStyles.module.css'

const QuizPage = () => {
  return (
    <div className='container paddingVertical-20'>
      {/* == Quiz Page Header == */}
      <div className={quizStyles.navigationHeader}>
        <div className={`${quizStyles.leftArrowIcon} icon`}>
          <LeftArrowIcon />
        </div>
        <span className={quizStyles.heading}>English for beginner</span>
        <div className={quizStyles.questionIcon}>
          <FcQuestions size={35} />
        </div>
      </div>
      
      {/* == Quiz Page Main Content == */}
      <QuizQuestions />

      <button
        style={{ marginTop: '30px' }}
        className='btn displayBlock btn-large btn-primary marginTop-10'
      >
        Continue
      </button>
    </div>
  )
}
export default QuizPage
