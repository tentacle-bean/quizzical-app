import React from 'react'

import '../styles/Answer.css'

export default function Answer(props){

    let classes = "answer"
    if(props.checking){
        if(props.selected === props.answer){
            if(props.correct){
                classes += " checked-answer-correct"
            }
            else{
                classes += " checked-answer-wrong"
            }
        }
        else{
            if(props.correct){
                classes += " checked-answer-correct"
            }
            else{
                classes += " checked-answer"
            }
        }
    }
    else if(props.selected === props.answer){
        classes += " answer-selected"
    }

    return (
        <label className={classes}>
            {props.answer}
            <input 
                className="answer-input" 
                type="radio"
                name="selected"
                value={props.answer}
                checked={props.selected === props.answer}
                onChange={(event) => props.handleChange(event, props.correct)}
            />
        </label>
        
    )
}