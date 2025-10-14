"use client"

import Task from "@/app/Task";
import {data} from './db'
import {useState} from "react";

export default function Home() {
    // инициализация состояния
    const [tasks, setTasks] = useState(data)

    // Отдельное состояние для input
    const [inputValue, setInputValue] = useState('')


    // Функция для button
    const handleAddTask = () => {
        if (inputValue.trim() === '') return;

        const newTask = {
            id: Date.now(),
            task: inputValue
        };

        // Мы сохраняем предыдущие значения и добавляем новые значения
        setTasks(prev => [...prev, newTask])

        // Очищаем
        setInputValue('')
    }

    // Удаление задачи (Отображаем то, где id не равен тому, что хотим удалить)
    const handleDeleteTask = (idDelete) => {
        setTasks(prev => prev.filter(task => (task.id !== idDelete)))
    }

    // Функция для input (Событие при Enter то же, что и при onClick в button)
    const handleKeyPress = (event) => {
        // Говорим, что если мы
        if (event.key === 'Enter'){
            handleAddTask()
        }
    }


  return (
    <>
        <div>
            <input
                type="text"
                placeholder='Новая заметка'
                value={inputValue} // Привязываем к состоянию
                onChange={() => setInputValue(event.target.value)}
                onKeyPress={handleKeyPress}
            />
            <button onClick={handleAddTask}>Добавить</button>
        </div>
        <Task
            data={tasks}
            deleteFunction={handleDeleteTask}
        ></Task>
    </>
  );
}
