import React from 'react'
import '../styles/Intro.css'

export default function Intro(props){
    return (
        <div className='intro'>
            <h1 className='title'>Quizzical</h1>
            <p className='subtitle'>Try to answer these 5 random questions!</p>
            <button 
                className='btn-start'
                onClick={props.startQuiz}
            >
                Start quiz
            </button>
        </div>
    )
}