'use client'

import React, { useState } from 'react'
import TaskList from './TaskList'
import TaskDetail from './TaskDetail'
import TaskForm from './TaskForm'

export default function TaskManagement() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Set up afternoon meeting',
      details: 'Set up a virtual meeting for all consultants by afternoon. Link must be communicated to everyone before 1pm.',
      date: '24/10/2022',
      tags: ['Urgent'],
      createdBy: 'John Doe',
      createdDate: '25/10/2022',
      completed: false
    }
  ])
  const [selectedTask, setSelectedTask] = useState(tasks[0])
  const [filter, setFilter] = useState('all')
  const [isAddingTask, setIsAddingTask] = useState(false)

  const addTask = (newTask) => {
    const taskToAdd = {
      ...newTask,
      id: tasks.length + 1,
      createdBy: 'Current User',
      createdDate: new Date().toLocaleDateString('en-GB'),
      completed: false
    }
    setTasks([...tasks, taskToAdd])
    setIsAddingTask(false)
  }

  const updateTask = (updatedTask) => {
    setTasks(tasks.map(task => 
      task.id === updatedTask.id ? { ...task, ...updatedTask } : task
    ))
    setSelectedTask(updatedTask)
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
    setSelectedTask(null)
  }

  const filterTasks = () => {
    setFilter(filter === 'all' ? 'active' : 'all')
  }

  const showHelp = () => {
    alert('This is a task management application. You can add, edit, and delete tasks.')
  }

  const filteredTasks = filter === 'all' ? tasks : tasks.filter(task => !task.completed)

  return (
    <div className="flex h-screen bg-gray-100">
      <TaskList 
        tasks={filteredTasks} 
        onSelectTask={setSelectedTask} 
        onAddTask={() => setIsAddingTask(true)}
        onFilter={filterTasks}
        onHelp={showHelp}
      />
      {isAddingTask ? (
        <TaskForm onSave={addTask} onCancel={() => setIsAddingTask(false)} />
      ) : (
        <TaskDetail
          task={selectedTask}
          onUpdate={updateTask}
          onDelete={deleteTask}
        />
      )}
    </div>
  )
}