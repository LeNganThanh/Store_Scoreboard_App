import React, {useContext} from "react";
import { ScoreContext } from "../Contexts/ScoreContext";
import Infoboard from "../Components/Infoboard";

export default function Scoreboard() {
    const tasks = useContext(ScoreContext)
    const score = tasks.score;
  return (
    <div>
      <h2>Your Current Score is <span>{score} </span></h2>
      <div>
        <button onClick={tasks.plusScore}>+</button>
        <button onClick={tasks.minusScore}>-</button>
      </div>
      <Infoboard/>
    </div>
  );
}
