import React, { useState, useEffect } from 'react'
import { Check, RefreshCw, Pencil, Trash, Clock, Tag } from 'lucide-react'

const TAGS = ['Important', 'Urgent', 'Later']

export default function TaskDetail({ task, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editedTask, setEditedTask] = useState(task)

  useEffect(() => {
    setEditedTask(task)
    setIsEditing(false)
  }, [task])

  if (!task) return <div className="w-1/2 p-6 bg-white">No task selected</div>

  const handleEdit = () => {
    if (isEditing) {
      onUpdate(editedTask)
      setIsEditing(false)
    } else {
      setIsEditing(true)
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setEditedTask({ ...editedTask, [name]: value })
  }

  const handleTagToggle = (tag) => {
    setEditedTask(prevTask => ({
      ...prevTask,
      tags: [tag]
    }))
  }

  const handleMarkCompleted = () => {
    onUpdate({ ...task, completed: !task.completed })
  }

  return (
    <div className="w-1/2 p-6 bg-white">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <span className="font-semibold mr-2">Task #{task.id}</span>
        </div>
        <div className="flex space-x-2">
          <button 
            onClick={handleMarkCompleted} 
            className={`p-2 rounded-full transition-colors ${task.completed ? 'bg-green-500 text-white hover:bg-green-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            title={task.completed ? "Mark as incomplete" : "Mark as completed"}
          >
            <Check className="w-5 h-5" />
          </button>
          <button 
            onClick={() => setEditedTask(task)} 
            className="p-2 bg-blue text-white rounded-full hover:bg-blue-600 transition-colors"
            title="Refresh task"
          >
            <RefreshCw className="w-5 h-5" />
          </button>
          <button 
            onClick={handleEdit} 
            className="p-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition-colors"
            title={isEditing ? "Save changes" : "Edit task"}
          >
            <Pencil className="w-5 h-5" />
          </button>
          <button 
            onClick={() => onDelete(task.id)} 
            className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
            title="Delete task"
          >
            <Trash className="w-5 h-5" />
          </button>
        </div>
      </div>
      {isEditing ? (
        <div className="space-y-4">
          <input
            type="text"
            name="title"
            value={editedTask.title}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
          <textarea
            name="details"
            value={editedTask.details}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            rows="4"
          ></textarea>
          <input
            type="date"
            name="date"
            value={editedTask.date.split('/').reverse().join('-')}
            onChange={(e) => handleInputChange({
              target: {
                name: 'date',
                value: new Date(e.target.value).toLocaleDateString('en-GB')
              }
            })}
            className="w-full p-2 border rounded"
          />
          <div>
            <label className="block mb-1 font-medium">Tag</label>
            <div className="flex flex-wrap gap-2">
              {TAGS.map(tag => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => handleTagToggle(tag)}
                  className={`px-3 py-1 rounded text-sm font-medium ${
                    editedTask.tags.includes(tag) 
                      ? 'bg-blue text-white hover:bg-blue-600' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  } transition-colors`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={handleEdit}
            className="w-full py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
          >
            Save Task
          </button>
        </div>
      ) : (
        <>
          <h2 className="text-2xl font-bold mb-4">{task.title}</h2>
          <p className="mb-4">{task.details}</p>
        </>
      )}
      <div className="flex items-center mb-4">
        <Clock className="w-5 h-5 mr-2 text-gray-500" />
        <span>{task.date}</span>
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        {task.tags.map((tag, index) => (
          <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm font-medium">
            <Tag className="w-4 h-4 inline mr-1" />
            {tag}
          </span>
        ))}
      </div>
      <div className="text-sm text-gray-500">
        {task.createdBy} created a task. {task.createdDate}
      </div>
    </div>
  )
}