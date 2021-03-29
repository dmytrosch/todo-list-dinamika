import React, { useEffect, useState } from "react";
import TaskList from "./components/TaskList/TaskList";
import AddTaskComp from "./components/AddTask/AddTask";
import data from "./data/data.json";
import { v4 as uuid } from "uuid";

function App() {
    const [tasks, setTasks] = useState(null);
    const deleteTask = (id) => {
        const newArr = tasks.filter((task) => task.id !== id);
        setTasks(newArr);
    };
    const addTask = (name) => {
        const obj = {
            id: uuid(),
            task: name,
            isDone: false,
            created: Date.now(),
        };
        setTasks((prevState) => [...prevState, obj]);
    };
    const toggleTaskStatus = (id) => {
        const task = tasks.find((el) => el.id === id);
        const currentStatus = task.isDone;
        task.isDone = !currentStatus;
        setTasks((prevState) => [
            ...prevState.filter((el) => el.id !== id),
            task,
        ]);
    };
    useEffect(() => {
        const savedTasksString = localStorage.getItem("tasks");
        const savedTasks = JSON.parse(savedTasksString);
        savedTasks
            ? setTasks(savedTasks)
            : new Promise((res, rej) => {
                  res(data);
              }).then((data) => setTasks(data));
    }, []);
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);
    return (
        <div>
            <AddTaskComp addTask={addTask} />
            {tasks && (
                <TaskList
                    tasks={tasks}
                    deleteTask={deleteTask}
                    toggleTaskStatus={toggleTaskStatus}
                />
            )}
        </div>
    );
}

export default App;
