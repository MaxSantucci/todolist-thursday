import React, {useEffect, useState} from 'react'
import {TodolistApi} from '../api/todolist-api';



export default {
   title: 'API'
}

export const GetTodolists = () => {
   const [state, setState] = useState<any>(null)

   const getTodolists = () => {
      const promise = TodolistApi.getTodoList()

      promise
         .then((res) => {
            setState(res)
         })
   }

   return (
      <div>
         <div>{JSON.stringify(state)}</div>
         <button onClick={getTodolists}>get task</button>
      </div>
   )
}

export const CreateTodolist = () => {
   const [state, setState] = useState<any>(null)
   const [title, setTitle] = useState<any>(null)

   const createTodolist = () => {
      TodolistApi.createTodoList(title)
         .then((res) => {
            setState(res)
         })
   }

   return (
      <div>{JSON.stringify(state)}
         <div>
            <input
               placeholder={'Task Title'}
               value={title}
               onChange={(e) => {
                  setTitle(e.currentTarget.value)
               }}
            />
            <button onClick={createTodolist}>create task</button>
         </div>
      </div>
   )
}

export const DeleteTodolist = () => {
   const [state, setState] = useState<any>(null)
   const [todoId, setTodoId] = useState<any>(null)

   const deleteTodolist = () => [
      TodolistApi.deleteTodoList(todoId)
         .then((res) => {
            setState(res)
         })
   ]

   return (
      <div>{JSON.stringify(state)}
         <div>
            <input
               placeholder={'taskId'}
               value={todoId}
               onChange={(e) => {
                  setTodoId(e.currentTarget.value)
               }}
            />
            <button onClick={deleteTodolist}>delete task</button>
         </div>
      </div>
   )
}

export const UpdateTodolistTitle = () => {
   const [state, setState] = useState<any>(null)
   useEffect(() => {
      const todoId = '50fddc86-f1d8-40dd-b262-8c153f4e6639'
      const title = 'React'

      TodolistApi.updateTodoList(todoId, title)
         .then((res) => {
            setState(res)
         })
   }, [])

   return <div>{JSON.stringify(state)}</div>
}

export const GetTasks = () => {
   const [state, setState] = useState<any>(null)
   const [todolistId, setTodolistId] = useState<any>(null)

   const getTasks = () => {
      TodolistApi.getTasks(todolistId)
         .then((res) => {
            setState(res.data)
         })
   }

   return (
      <div>
         <div>{JSON.stringify(state)}</div>
         <input
            placeholder={'todolistId'}
            value={todolistId}
            onChange={(e) => {
               setTodolistId(e.currentTarget.value)
            }}
         />
         <button onClick={getTasks}>get task</button>
      </div>
   )
}

export const DeleteTask = () => {
   const [state, setState] = useState<any>(null)
   const [taskId, setTaskId] = useState<any>(null)
   const [todolistId, setTodolistId] = useState<any>(null)


   const deleteTask = () => {
      TodolistApi.deleteTasks(todolistId, taskId)
         .then((res) => {
            setState(res)
         })
   }

   return (
      <div>{JSON.stringify(state)}
         <div>
            <input
               placeholder={'todolistId'}
               value={todolistId}
               onChange={(e) => {
                  setTodolistId(e.currentTarget.value)
               }}
            />
            <input
               placeholder={'taskId'}
               value={taskId}
               onChange={(e) => {
                  setTaskId(e.currentTarget.value)
               }}
            />
            <button onClick={deleteTask}>delete task</button>
         </div>
      </div>
   )
}

export const CreateTask = () => {
   const [state, setState] = useState<any>(null)
   const [taskTitle, setTaskTitle] = useState<any>(null)
   const [todolistId, setTodolistId] = useState<any>(null)

   const createTask = () => {
      TodolistApi.createTask(todolistId, taskTitle)
         .then((res) => {
            setState(res.data)
         })
   }

   return (
      <div>{JSON.stringify(state)}
         <div>
            <input
               placeholder={'todolistId'}
               value={todolistId}
               onChange={(e) => {
                  setTodolistId(e.currentTarget.value)
               }}
            />
            <input
               placeholder={'Task Title'}
               value={taskTitle}
               onChange={(e) => {
                  setTaskTitle(e.currentTarget.value)
               }}
            />
            <button onClick={createTask}>create task</button>
         </div>
      </div>
   )
}

export const UpdateTask = () => {
   const [state, setState] = useState<any>(null)
   const [title, setTitle] = useState<any>('title 1')
   const [description, setDescription] = useState<any>('description 1')
   const [status, setStatus] = useState<any>(0)
   const [priority, serPriority] = useState<any>(0)

   const [todolistId, setTodolistId] = useState<any>(null)
   const [taskId, setTaskId] = useState<any>(null)

   const updateTask = () => {
      TodolistApi.updateTasks(todolistId, taskId, {
         deadline: "",
         description: description,
         priority: priority,
         startDate: '',
         status: status,
         title: title,
         // completed: false
      })
         .then((res) => {
            setState(res.data)
         })
   }

   return (
      <div>{JSON.stringify(state)}
         <div>
            <input placeholder={'taskId'} value={taskId} onChange={(e) => {
               setTaskId(e.currentTarget.value)
            }}/>
            <input placeholder={'todolistId'} value={todolistId} onChange={(e) => {
               setTodolistId(e.currentTarget.value)
            }}/>
            <input placeholder={'task title'} value={title} onChange={(e) => {
               setTitle(e.currentTarget.value)
            }}/>
            <input placeholder={'description'} value={description} onChange={(e) => {
               setDescription(e.currentTarget.value)
            }}/>
            <input placeholder={'status'} value={status} onChange={(e) => {
               setStatus(e.currentTarget.value)
            }}/>
            <button onClick={updateTask}>update task</button>
         </div>
      </div>
   )
}