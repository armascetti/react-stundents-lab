import React from 'react';


const Scores = (props) => {
  const score = props.scores.map((ele, index) => {
    return (
      <div className="students">
        <li>
          Date: {ele.date}, Score: {ele.score}
        </li>
      </div>
    )
  })
  return (
    <div>{score}</div>
  )
}


export default Scores