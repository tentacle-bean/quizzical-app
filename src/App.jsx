import React from 'react'
import Intro from './components/Intro'
import Quiz from './components/Quiz'
import './styles/index.css'
import blobB from './assets/blob-b.png'
import blobY from './assets/blob-y.png'

export default function App(){
    const [quizStarted, setQuizStarted] = React.useState(false)

    function startQuiz(){
        setQuizStarted(true)
    }

    console.log("app rerendered")

    return(
        <main className='main'>
            {!quizStarted ? 
                <Intro startQuiz={startQuiz}/> :
                <Quiz />
            }

            <img className="blob-blue" src={blobB} />
            <img className="blob-yellow" src={blobY} />
        </main>
    )
}