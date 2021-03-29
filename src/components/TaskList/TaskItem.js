import React from "react";

export default function TaskItem({
    task,
    deleteTask,
    index,
    toggleTaskStatus,
}) {
    const deleteHandler = (e) => deleteTask(task.id);
    const checkedTaskHandler = (e) => toggleTaskStatus(task.id);
    return (
        <li>
            <span>{index + 1}.</span>
            <span>{task.task}</span>
            <input
                type="checkbox"
                checked={task.isDone}
                onChange={checkedTaskHandler}
            />
            <button onClick={deleteHandler}>X</button>
        </li>
    );
}
