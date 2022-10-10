import React from 'react'
import '../styles/Quiz.css'
import Question from './Question'

export default function Quiz(props){
    function decode(text){
        const textArea = document.createElement('textarea');
        textArea.innerHTML = text;
        return textArea.value;
    }


    const [apiData, setApiData] = React.useState([])
    const [checking, setChecking] = React.useState(false)
    const [points, setPoints] = React.useState([false, false, false, false, false])
    


    function handlePoints(index, isCorrect){
        setPoints(prev => {
            const copy = prev.map(item => item)
            copy[index] = isCorrect
            return copy
        })
    }
    console.log(`points: ${points}`)


    function getScore(){
        let score = 0
        points.map(point => point && score++)

        return score
    }


    function dataFetch(){
        fetch(`https://opentdb.com/api.php?amount=5&category=${props.quizOptions.category}&difficulty=${props.quizOptions.difficulty}`)
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
    }


    React.useEffect(() => {
        dataFetch()
    }, [])


    
    console.log(apiData)
    // console.log(formData)


    function restartGame(){
        props.startQuiz()
    }


    const questions = apiData.map((data, index) => {
        return (<Question
            question={decode(data.question)}
            correct={decode(data.correct_answer)}
            answers={data.answers.map(ans => decode(ans))}
            checking={checking}
            handlePoints={handlePoints}
            index={index}
        />)
    })


    const bottom = !checking ?  <button className="quiz-btn" onClick={() => setChecking(true)}>Check answers</button> :
                                <div className='summary'>
                                    <h3 className='summary-text'>You scored {getScore()}/5 correct answers</h3>
                                    <button onClick={restartGame}>Play again</button>
                                </div>
    

    return(
        <div className='quiz'>
            {questions}
            {apiData.length ? bottom : <h3>Loading questions...</h3>}
        </div>
    )
}