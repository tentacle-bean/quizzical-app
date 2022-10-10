import React from 'react'
import Intro from './components/Intro'
import Quiz from './components/Quiz'
import './styles/index.css'
import blobB from './assets/blob-b.png'
import blobY from './assets/blob-y.png'

export default function App(){
    const [quizStarted, setQuizStarted] = React.useState(false)
    const [quizOptions, setQuizOptions] = React.useState(
        {
            category: "9",
            difficulty: "easy"
        }
    )
    


    function startQuiz(){
        setQuizStarted(prev => !prev)
    }


    function handleChange(event){
        
        const {name, value} = event.target
        setQuizOptions(prev => {
            // console.log(name)
            // console.log(value)

            return { 
                ...prev,
                [name]: value
            }
        })
        
    }
    //console.log(quizOptions)

    return(
        <main className='main'>
            {!quizStarted ? 
                <Intro startQuiz={startQuiz} quizOptions={quizOptions} handleChange={handleChange}/> :
                <Quiz startQuiz={startQuiz} quizOptions={quizOptions}/>
            }

            <img className="blob-blue" src={blobB} />
            <img className="blob-yellow" src={blobY} />
        </main>
    )
}