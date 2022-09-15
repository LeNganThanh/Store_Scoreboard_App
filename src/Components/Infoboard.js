import { useContext } from "react";
import { ScoreContext } from "../Contexts/ScoreContext";

const Infoboard = () => {
  const tasks = useContext(ScoreContext);
  const score = tasks.score;
  return (
    <div>
      <h3 className="footer">
        {score <= 100 ? "Let's make it over 100!" : "Good Job!  👏"}
      </h3>
    </div>
  );
};
export default Infoboard;
