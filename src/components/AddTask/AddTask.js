import React, { useState } from "react";

export default function AddTask({ addTask }) {
    const [taskName, setTaskName] = useState("");
    const inputNewTaskHandler = (e) => setTaskName(e.target.value);
    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (!taskName) return;
        addTask(taskName);
        setTaskName("");
    };
    return (
        <form onSubmit={onSubmitHandler}>
            <input
                type="text"
                onChange={inputNewTaskHandler}
                value={taskName}
            />
            <button type="submit">Add Task</button>
        </form>
    );
}
