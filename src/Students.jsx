import React from 'react'; 
import Scores from './Scores';

const Students = (props) => {
  return (
    <>
    <div className="students">
    <h1> {props.name} </h1>
    <p>  {props.bio} </p>
    </div>
    <Scores
    scores = {props.scores}
    />
    </>
  )
}

export default Students 