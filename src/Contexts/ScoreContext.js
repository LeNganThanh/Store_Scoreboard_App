import { useState, createContext } from "react";
export const ScoreContext = createContext(null);

export default function ScoreContextProvider({ children }) {
  const [score, setScore] = useState(0);
  const plusScore = () => {
    setScore(score => score + 10);
  };
  const minusScore = () => {
    setScore(score => score - 10);
  };

  //get all props send to context as value in one variable
  const tasks = {
    score: score,
    plusScore: plusScore,
    minusScore: minusScore,
  };

  return (
    <ScoreContext.Provider value={tasks}>{children}</ScoreContext.Provider>
  );
}
