import { useState } from "react"


export default function useNewTask() {
    
    
    
    function handleCreateNewTask() {
        setNewTask(state => state ? false : true)
    }

    function handleNewTask() {
        const newTask = {
            id: new Date().getTime(),
            text: 'blablabla',
            finish: false
        }

        setListTasks(state => [...state, newTask])
        incrementTask()
    }

    function incrementTask() {
        setTaskCreated(state => state + 1)
    }

    function incrementCompletedTask() {
        setCompletedTask(state => state + 1)
    }

    return {
        newTask,
        handleCreateNewTask,
        handleNewTask,
        listTasks,
        handleNewTask,
        taskCreated,
        completedTask,
        incrementTask,
        incrementCompletedTask,
        setListTasks
    }
}