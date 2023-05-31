import axios from 'axios';

const instance = axios.create({
   baseURL: 'https://social-network.samuraijs.com/api/1.1/',
   withCredentials: true
})

export const TodolistApi = {
   getTodoList() {
      return instance.get<TodolistType[]>('todo-lists')
   },
   createTodoList(title: string) {
      return instance.post<ResponseType<{items: TodolistType}>>('todo-lists', {title})
   },
   deleteTodoList(todoId: string) {
      return instance.delete<ResponseType>(`todo-lists/${todoId}`)
   },
   updateTodoList(todoId: string, title: string) {
      return instance.put<ResponseType>(`todo-lists/${todoId}`, {title})
   },
   getTasks(todolistId: string) {
      return instance.get<GetTaskResponse>(`todo-lists/${todolistId}/tasks`)
   },
   deleteTasks(todolistId: string, taskId: string) {
      return instance.delete<ResponseType>(`todo-lists/${todolistId}/tasks/${taskId}`)
   },
   createTask(todolistId: string, title: string) {
      return instance.post<ResponseType<TaskType>>(`todo-lists/${todolistId}/tasks`, {title})
   },
   updateTasks(todolistId: string, taskId: string, model: UpdateTaskTypeModel) {
      return instance.put<ResponseType<TaskType>>(`todo-lists/${todolistId}/tasks/${taskId}`, model)
   }
}

type TodolistType = {
   id: number,
   title: string,
   addedDate: Date,
   order: number
}

type ResponseType<T = {}> = {
   resultCode: number
   fieldsError: []
   messages: string[]
   data: T
}

export type TaskType = {
   description: string
   title:string
   completed: boolean
   status: number
   priority: number
   startDate: string
   deadline: string
   id: string
   todoListId: string
   order: number
   addedDate: string
}

type GetTaskResponse = {
   error: string | null
   totalCount: number
   items: TaskType[]
}

type UpdateTaskTypeModel = {
   title: string
   description: string
   // completed: boolean
   status: number
   priority: number
   startDate: string
   deadline: string
}
