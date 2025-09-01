import React, { useState, useEffect } from "react";

const WorkoutForm = ({ addWorkout, updateWorkout, editWorkout }) => {
  const [form, setForm] = useState({ name: "", sets: "", reps: "", day: "" });
  const [error, setError] = useState("");

  useEffect(() => {
    if (editWorkout) {
      setForm(editWorkout);
    } else {
      setForm({ name: "", sets: "", reps: "", day: "" });
    }
  }, [editWorkout]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validate = () => {
    if (!form.name.trim()) return "El nombre del ejercicio es obligatorio.";
    if (form.sets < 1) return "Las series deben ser al menos 1.";
    if (form.reps < 1) return "Las repeticiones deben ser al menos 1.";
    if (!form.day.trim()) return "El día es obligatorio.";
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errorMsg = validate();
    if (errorMsg) {
      setError(errorMsg);
      return;
    }
    setError("");

    if (editWorkout) {
      updateWorkout(form);
    } else {
      addWorkout(form);
    }
    setForm({ name: "", sets: "", reps: "", day: "" });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        name="name"
        placeholder="Ejercicio"
        value={form.name}
        onChange={handleChange}
      />
      <input
        type="number"
        name="sets"
        placeholder="Series"
        value={form.sets}
        onChange={handleChange}
      />
      <input
        type="number"
        name="reps"
        placeholder="Reps"
        value={form.reps}
        onChange={handleChange}
      />
      <input
        type="text"
        name="day"
        placeholder="Día"
        value={form.day}
        onChange={handleChange}
      />
      <button type="submit">{editWorkout ? "Actualizar" : "Agregar"}</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};

export default WorkoutForm;
