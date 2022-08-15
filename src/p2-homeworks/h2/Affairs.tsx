import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from "./Affairs.module.css";
import styleButton from '../h4/common/c2-SuperButton/SuperButton.module.css'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';

type AffairsPropsType = {
    data: AffairType[]
    setFilter: (n:FilterType)=> void
    deleteAffairCallback: (_id:number) => void
}

function Affairs(props: AffairsPropsType) {

    const mappedAffairs = props.data.map((a: AffairType) => {

        return (< Affair
        key = {a._id}
        affair = {a}
        deleteAffairCallback = {props.deleteAffairCallback}
        />)
    })

    const setAll = (n:FilterType) => {props.setFilter(n)}
    const setHigh = (n:FilterType) => {props.setFilter(n)}
    const setMiddle = (n:FilterType) => {props.setFilter(n)}
    const setLow = (n:FilterType) => {props.setFilter(n)}

    return (
        <div>

            {mappedAffairs}
            <div className={s.body}>

                <SuperButton className={styleButton.default} onClick={() => setAll('all')}>All</SuperButton>
                <SuperButton className={styleButton.default} onClick={() => setHigh('high')}>High</SuperButton>
                <SuperButton className={styleButton.default} onClick={() => setMiddle('middle')}>Middle</SuperButton>
                <SuperButton className={styleButton.default} onClick={() => setLow('low')}>Low</SuperButton>
            </div>


        </div>
    )
}

export default Affairs
