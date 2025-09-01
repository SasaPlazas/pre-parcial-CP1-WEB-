import React from "react";

const WorkoutList = ({ workouts, onEdit, onDelete }) => {
  if (workouts.length === 0) {
    return <p>No hay entrenamientos aún.</p>;
  }

  return (
    <ul>
      {workouts.map((w, index) => (
        <li key={index}>
          <strong>{w.name}</strong> - {w.sets}x{w.reps} ({w.day})
          <button onClick={() => onEdit(index)}>Editar</button>
          <button onClick={() => onDelete(index)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
};

export default WorkoutList;
