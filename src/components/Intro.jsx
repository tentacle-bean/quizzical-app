import React from 'react'
import '../styles/Intro.css'

export default function Intro(props){
    console.log(props.quizOptions)

    return (
        <div className='intro'>
            <h1 className='title'>Quizzical</h1>
            <p className='subtitle'>Try to answer 5 random questions! :D</p>

            <div className='selector'>
                <label htmlFor='category'>Category: </label>
                <select
                    id="category"
                    name="category"
                    value={props.quizOptions}
                    onChange={props.handleChange}
                >
                    <option value={9}>General Knowledge</option>
                    <option value={15}>Video Games</option>
                    <option value={10}>Books</option>
                    <option value={11}>Movies</option>
                    <option value={17}>Science & Nature</option>
                    <option value={18}>Computers</option>
                </select>
            </div>
            
            <div className='selector'>
                <label htmlFor='difficulty'>Difficulty: </label>
                <select
                    id="difficulty"
                    name="difficulty"
                    value={props.quizOptions}
                    onChange={props.handleChange}
                >
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
            </div>

            

            <button 
                className='btn-start'
                onClick={props.startQuiz}
            >
                Start quiz
            </button>
        </div>
    )
}