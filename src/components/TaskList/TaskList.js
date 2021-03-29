import React, { useMemo } from "react";
import TaskItem from "./TaskItem";

export default function TaskList({ tasks, deleteTask, toggleTaskStatus }) {
    const sortedArr = useMemo(() => {
        return tasks.sort((a, b) => a.created - b.created);
    }, [tasks]);
    return (
        <ul>
            {sortedArr.map((el, inx) => (
                <TaskItem
                    key={el.id}
                    task={el}
                    index={inx}
                    deleteTask={deleteTask}
                    toggleTaskStatus={toggleTaskStatus}
                />
            ))}
        </ul>
    );
}
