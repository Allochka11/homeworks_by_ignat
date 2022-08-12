import React, {ChangeEvent,KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: UserType[]
    addUserCallback: (name: string)=> void
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => {
    const [name, setName] = useState<string>('');
    const [error, setError] = useState<string>('');


    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {

        let currentValueTrimmed = e.currentTarget.value.trim();

        if(!currentValueTrimmed) {
            name && setName('')
            setError('Name is required');
        } else {
            error && setError('');
            setName(currentValueTrimmed);
        }
    }

    const addUser = () => {
        addUserCallback(name);
        alert(`Hello ${name} !`);
        setName('');


    }
    const onKeyDownHandler = (e:KeyboardEvent<HTMLInputElement>) => {
        if(e.code==='Enter') {
            addUser();
        }
    }

    const totalUsers = users.length

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            onKeyDownHandler={onKeyDownHandler}
        />
    )
}

export default GreetingContainer
