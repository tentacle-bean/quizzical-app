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
    const [points, setPoints] = React.useState([])

    function handlePoints(point, index){
        setPoints(prev => {
            const copy = prev.map(item => item)
            copy[index] = point
            return copy
        })
        console.log(points)
    }


    React.useEffect(() => {
        fetch(`https://opentdb.com/api.php?amount=11&category=17&difficulty=hard`)
            .then(res => {
                if(!res.ok){
                    throw Error("Failed to retrieve question data")
                }
                return res.json()
            })
            .then(data => {
                let questions = data.results
                questions = questions.map(question => {
                    const answers = []
                    answers.push(question.correct_answer)
                    question.incorrect_answers.map(inc => answers.push(inc))

                    for (let i = answers.length - 1; i > 0; i--) {
                        const j = Math.floor(Math.random() * (i + 1));
                        const temp = answers[i];
                        answers[i] = answers[j];
                        answers[j] = temp;
                    }

                    return{
                        ...question,
                        answers: answers
                    }
                })           
                
                setApiData(questions)
            })
            .catch(err => console.log(err))
    }, [])
    
    console.log(apiData)


    const questions = apiData.map(data => {
        return (<Question
            question={decode(data.question)}
            correct={decode(data.correct_answer)}
            answers={data.answers.map(ans => decode(ans))}
            checking={checking}
            handlePoints={handlePoints}
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