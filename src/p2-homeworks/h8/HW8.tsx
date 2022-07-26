import React, {useState} from 'react';
import {homeWorkReducer, InitialStateType} from './bll/homeWorkReducer';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import s from './HW8.module.css';


const initialPeople: InitialStateType[] = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
];

function HW8() {
    const [people, setPeople] = useState<InitialStateType[]>(initialPeople);

    const finalPeople = people.map((p: InitialStateType) => (
        <div key={p._id} className={s.mainTable}>
            <div>{p.name}</div>
            <div>{p.age}</div>
        </div>
    ));

    const sortUp = () => {
        setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'up'}))
    }
    const sortDown = () => {
        setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'down'}))
    }
    const checkAge = () => {
        setPeople(homeWorkReducer(initialPeople, {type: 'check', payload: 18}))
    }


    return (
        <div>
            <hr/>
            homeworks 8

            {/*should work (должно работать)*/}
            {finalPeople}
            <div className={s.buttonsContainer}>
                <div><SuperButton onClick={sortUp} className={s.buttonSize}>sort up</SuperButton></div>
                <div><SuperButton onClick={sortDown} className={s.buttonSize}>sort down</SuperButton></div>
                <div><SuperButton onClick={checkAge} className={s.buttonSize}>check 18</SuperButton></div>
            </div>


            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    )
}

export default HW8
