import React, { useState, useEffect } from "react";
import WorkoutForm from "./WorkoutForm";
import WorkoutList from "./WorkoutList";

const WorkoutApp = () => {
  const [workouts, setWorkouts] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("workouts");
    if (saved) setWorkouts(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("workouts", JSON.stringify(workouts));
  }, [workouts]);

  const addWorkout = (workout) => {
    setWorkouts([...workouts, workout]);
  };

  const updateWorkout = (workout) => {
    const updated = [...workouts];
    updated[editIndex] = workout;
    setWorkouts(updated);
    setEditIndex(null);
  };

  const deleteWorkout = (index) => {
    const filtered = workouts.filter((_, i) => i !== index);
    setWorkouts(filtered);
  };

  const startEdit = (index) => {
    setEditIndex(index);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h1>Workout Tracker</h1>
      <WorkoutForm
        addWorkout={addWorkout}
        updateWorkout={updateWorkout}
        editWorkout={editIndex !== null ? workouts[editIndex] : null}
      />
      <WorkoutList
        workouts={workouts}
        onEdit={startEdit}
        onDelete={deleteWorkout}
      />
    </div>
  );
};

export default WorkoutApp;
