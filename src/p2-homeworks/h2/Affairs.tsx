import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from "./Affairs.module.css";

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
                <button className={`${s.filterButton} + ${s.item}`} onClick={() => setAll('all')}>All</button>
                <button className={s.filterButton} onClick={() => setHigh('high')}>High</button>
                <button className={s.filterButton} onClick={() => setMiddle('middle')}>Middle</button>
                <button className={s.filterButton} onClick={() => setLow('low')}>Low</button>
            </div>


        </div>
    )
}

export default Affairs
