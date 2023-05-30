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
