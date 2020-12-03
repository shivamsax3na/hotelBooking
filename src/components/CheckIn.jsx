import React from 'react'
import DatePickerComp from './DatePickerComp'

export default function CheckIn(props) {
    return (
        <div>
            <br/>
            <div>
            <span>{props.Check}</span>
            <DatePickerComp />
            </div>
        </div>
    )
}
