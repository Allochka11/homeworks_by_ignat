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
        setName(e.currentTarget.value)
    }
    const addUser = () => {

        if(name === '' || name.trim()==='') {
            setError('Name is required');
        } else {
            setError('');
            alert(`Hello ${name} !`);
            addUserCallback(name.trim());
            setName('');

        }
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
