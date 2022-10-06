import React from 'react'
import Answer from './Answer'
import '../styles/Question.css'

export default function Question(props){
    const [formData, setFormData] = React.useState("")

    function handleChange(event, point){
        if(!props.checking){
            const {value} = event.target
            setFormData(value)
            props.handlePoints(point)
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