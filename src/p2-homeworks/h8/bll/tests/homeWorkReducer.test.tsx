import React from 'react'
import {homeWorkReducer, InitialStateType} from '../homeWorkReducer'


let initialState: InitialStateType[];

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
    ]
})

test('sort name up', () => {
    const newState = homeWorkReducer(initialState, {type: 'sort', payload: 'up'});

    let result = [1,3,4,5,2,0].filter((el,index)=> el === newState[index]._id)
    expect(result.length).toEqual(newState.length)
    expect(newState[0]._id).toBe(1);
    expect(newState[5]._id).toBe(0);
    expect(newState[1].name).toBe("Виктор");
})
test('sort name down', () => {
    const newState = homeWorkReducer(initialState, {type: 'sort', payload: 'down'});

    expect(newState[0]._id).toBe(0);
    expect(newState[5]._id).toBe(1);
    expect(Object.keys(newState).length).toBe(6);
    expect(newState[3].name).toBe("Дмитрий");
})
test('check age 18', () => {
    const newState = homeWorkReducer(initialState, {type: 'check', payload: 18});

    expect(newState[0]._id).toBe(1);
    expect(newState[1]._id).toBe(3);
    expect(newState.length).toBe(4);
    expect(newState[2].name).toBe("Дмитрий");
})
