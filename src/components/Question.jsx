import React from 'react'
import Answer from './Answer'
import '../styles/Question.css'

export default function Question(props){

    const [formData, setFormData] = React.useState("")

    function handleChange(event){
        if(!props.checking){
            const {value} = event.target
            setFormData(value)
        }
    }

    let answers = props.wrong.map(ans => 
        <Answer 
            answer={ans}
            correct={false}
            selected={formData}
            handleChange={handleChange}
            checking={props.checking}
        />
    )

    answers.push(
        <Answer 
            answer={props.correct}
            correct={true}
            selected={formData}
            handleChange={handleChange}
            checking={props.checking}
        />
    )

    React.useEffect(() => {
        
        for (let i = answers.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = answers[i];
            answers[i] = answers[j];
            answers[j] = temp;
        }
        console.log("shuffled")
    }, [])

    


    return(
        <div className='question'>
            <h3 className='question-text'>{props.question}</h3>
            <form className='answer-container'>
                {answers}
            </form>
        </div>
    )
}