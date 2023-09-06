import Question from './Question'

const Questions = ({ questions }) => {
  return (
    <ul className='questions'>
      {questions.map((ques) => {
        return <Question {...ques} key={ques.id} />
      })}
    </ul>
  )
}
export default Questions
