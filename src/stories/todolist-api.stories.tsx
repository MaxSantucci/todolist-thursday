import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {TodolistApi} from '../api/todolist-api';

export default {
   title: 'API'
}

export const GetTodolists = () => {
   const [state, setState] = useState<any>(null)
   useEffect(() => {
      const promise = TodolistApi.getTodoList()

      promise
      .then((res) => {
         setState(res)
      })
   }, [])
   return <div>{JSON.stringify(state)}</div>
}

export const CreateTodolist = () => {
   const [state, setState] = useState<any>(null)
   useEffect(() => {
      const title = 'RTX'

      TodolistApi.createTodoList(title)
         .then((res) => {
            setState(res)
         })
   }, [])
   return <div>{JSON.stringify(state)}</div>
}

export const DeleteTodolist = () => {
   const [state, setState] = useState<any>(null)
   useEffect(() => {
      const todoId = '9e962a57-789b-40df-836d-a670fed031fd'

      TodolistApi.deleteTodoList(todoId)
         .then((res) => {
            setState(res)
         })
   }, [])

   return <div>{JSON.stringify(state)}</div>
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

