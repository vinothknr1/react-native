import React, { useState } from "react";
import "./App.css";
import GoalList from "./components/GoalList/GoalList";
import NewGoal from "./components/NewGoal/NewGoal";

const App = () => {
  const [goalItems, setGoalItems] = useState([
    { id: "cg1", text: "Learn Everything" },
    { id: "cg2", text: "Learn Something" },
    { id: "cg3", text: "Learn Nothing" },
  ]);

  const addNewGoalHandler = (newGoal) => {
    setGoalItems((prevStateData) => prevStateData.concat(newGoal));
  };
  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      <NewGoal onAddGoal={addNewGoalHandler} />
      <GoalList goals={goalItems} />
    </div>
  );
};

export default App;
