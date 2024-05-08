import { useState } from 'react'
import { learnersList } from "./data.js";

import './App.css'


export default function Learner() {
  const [index, setIndex] = useState(0);
  function previousIndex() {
    setIndex(index - 1);
    if (index - 1 < 0) {
      setIndex(learnersList.length-1)
    }
  }

  function nextNextIndex() {
    if (index + 1 == learnersList.length) {
      setIndex(0)
    } else
    setIndex(index + 1);
  }

  function Score({ score }) {
    return (
      <div className="score">
        <p>
          Date: {score.date} | Score: {score.score}
        </p>
      </div>
    );
  }

  let learner = learnersList[index];
  return (
    <>
      <div>
      <button onClick={previousIndex}>Back</button>
      <button onClick={nextNextIndex}>Next</button>
      <h2>
        <i>{learner.name} </i>  
      </h2>
      <p> {learner.bio} </p>
      <h3>Scores:</h3>
      <ul>
        {learner.scores.map((score) => (
          <li key={score.date}>
            <Score score={score} />
          </li>
        ))}
      </ul>
      </div>
    </>
  );
}

