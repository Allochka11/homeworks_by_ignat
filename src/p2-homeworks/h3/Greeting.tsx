import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import s from './Greeting.module.css';
import React, {ChangeEvent, KeyboardEvent} from 'react'

type GreetingPropsType = {
    name: string
    setNameCallback: (e:ChangeEvent<HTMLInputElement>)=> void
    addUser: ()=> void
    error: string
    totalUsers: number
    onKeyDownHandler:(e:KeyboardEvent<HTMLInputElement>)=> void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers,onKeyDownHandler} // деструктуризация пропсов
) => {

    const inputClass = error? s.errorInput : '';

    return (
        <div className={s.main}>
            <div className={s.greeting}>
                <SuperInputText value={name} onChange={setNameCallback} className={inputClass} onKeyDown={onKeyDownHandler} onBlur={setNameCallback}/>
                <SuperButton onClick={addUser} disabled={!name} className={s.button}>add</SuperButton>
                <span className={s.span}>{totalUsers}</span>
            </div>
            <div className={s.error}>{error}</div>
        </div>

    )
}

export default Greeting
