"use client"

import Task from "@/app/Task";
import {useEffect, useState} from "react";

export default function HomePage(){
    // инициализация состояния
    const [tasks, setTasks] = useState([])

    // Отдельное состояние для input
    const [inputValue, setInputValue] = useState('')

    // Для проверки, что мы на стороне клиента
    const [isClient, setIsClient] = useState(false)


    // Проверка, что мы на стороне клиента
    useEffect(() => {
        setIsClient(true)
    }, [])


    //Загружаем всё из LocalStorage
    useEffect(() => {
        if(isClient){
            try{
                const savedTasks = localStorage.getItem('tasks') // Находим по ключу
                if(savedTasks){
                    setTasks(JSON.parse(savedTasks))
                }
            } catch {
                console.log('Ошибка загрузки данных из LocalStorage')
            }
        }
    }, [isClient]);


    // Сохраняем при каждом изменении
    // Без useEffect будет бесконечно запускаться
    useEffect(() => {
        if(isClient){
            try{
                localStorage.setItem('tasks', JSON.stringify(tasks))
            } catch {
                console.log('Ошибка сохранения данных в localStorage')
            }
        }
    }, [tasks, isClient])



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
    if (!isClient) {
        return <div>Загрузка...</div>;
    }

    return(
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
    )

}