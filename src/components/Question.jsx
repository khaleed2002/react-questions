import { useState } from 'react'
import './Question.css'
import { FiPlus, FiMinus } from 'react-icons/fi'
const Question = ({ title, info }) => {
  const [toggleText, setToggleText] = useState(false)
  return (
    <li className="question">
      <div className="question--title">
        <h5>{title}</h5>
        <button
          className="btn"
          onClick={() =>
            setToggleText((text) => {
              return !text
            })
          }
        >
          {toggleText ? <FiMinus /> : <FiPlus />}
        </button>
      </div>
      {toggleText ? <p>{info}</p> : ''}
    </li>
  )
}
export default Question
