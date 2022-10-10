import React from 'react'
import Answer from './Answer'
import '../styles/Question.css'

export default function Question(props){
    const [formData, setFormData] = React.useState("")


    function handleChange(event, isCorrect){
        if(!props.checking){
            const {value} = event.target
            setFormData(value)
            props.handlePoints(props.index, isCorrect)
        }
    }


    const answers = props.answers.map(ans => 
        <Answer 
            answer={ans}
            correct={ans === props.correct}
            selected={formData}
            handleChange={handleChange}
            checking={props.checking}
        />
    )


    return(
        <div className='question'>
            <h3 className='question-text'>{props.question}</h3>
            <form className='answer-container'>
                {answers}
            </form>
        </div>
    )
}