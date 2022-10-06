import React from 'react'
import '../styles/Quiz.css'
import Question from './Question'

export default function Quiz(){
    function decode(text) {
        const textArea = document.createElement('textarea');
        textArea.innerHTML = text;
        return textArea.value;
      }


    const [apiData, setApiData] = React.useState([])
    const [checking, setChecking] = React.useState(false)

    React.useEffect(() => {
        fetch(`https://opentdb.com/api.php?amount=5&category=15`)
            .then(res => {
                if(!res.ok){
                    throw Error("Failed to retrieve question data")
                }
                return res.json()
            })
            .then(data => setApiData(data.results))
            .catch(err => console.log(err))
    }, [])
    
    console.log(apiData)


    const questions = apiData.map(data => {
        return (<Question
            question={decode(data.question)}
            correct={decode(data.correct_answer)}
            wrong={data.incorrect_answers.map(ans => decode(ans))}
            checking={checking}
        />)
    })
    
    return(
        <div className='quiz'>
            {questions}
            {apiData.length ? 
            <button className="quiz-btn" onClick={() => setChecking(true)}>Check answers</button> : 
            <h3>Loading questions...</h3>}
        </div>
    )
}