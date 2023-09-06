import { useState } from 'react'
import './Question.css'
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai'
const Question = ({ title, info }) => {
  const [toggleText, setToggleText] = useState(false)
  return (
    <li className="question">
      <div className="question--title">
        <h5>{title}</h5>
        <button
          onClick={() =>
            setToggleText((text) => {
              return !text
            })
          }
        >
          {toggleText ? (
            <AiOutlineMinusCircle className="sign" />
          ) : (
            <AiOutlinePlusCircle className="sign" />
          )}
        </button>
      </div>
      {toggleText ? <p>{info}</p> : ''}
    </li>
  )
}
export default Question
