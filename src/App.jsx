import { useEffect, useState } from 'react'
import Questions from './components/Questions.jsx'
import data from './data.js'

const App = () => {
  const [questions, setQuestions] = useState([])
  useEffect(() => {
    setQuestions(data)
  }, [])
  return (
    <main>
      <div className="container">
        <h1 className="title">Questions</h1>
        <Questions questions={questions} />
      </div>
    </main>
  )
}
export default App
