import {setTodolistAC, todolistsReducer} from '../state/todolists-reducer';
import {TodolistType} from '../api/todolist-api';
import {v1} from 'uuid';

// let todolistId1: string;
// let todolistId2: string;
// let startState: TodolistTypeх = [];
//
// beforeEach(() => {
//    todolistId1 = v1();
//    todolistId2 = v1();
//    startState = [
//       {id: todolistId1, title: "What to learn", filter: "all"},
//       {id: todolistId2, title: "What to buy", filter: "all"}
//    ]
// })
// test('todolists should be set to the state', () => {
//    const action = setTodolistAC(startState)
//
//    const endState = todolistsReducer(startState, action)
//
//    expect(endState[0].filter).toBe('all')
//    expect(endState[1].filter).toBe(newFilter)
// })