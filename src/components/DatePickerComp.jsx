import React, { useState } from 'react'
import { enGB } from 'date-fns/locale'
import { DatePicker } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'

export default function DatePickerComp() {
  const [date, setDate] = useState()
  return (
    <DatePicker date={date} onDateChange={setDate} locale={enGB}>
        {({ inputProps, focused }) => (
            <input
            className={'input' + (focused ? ' -focused' : '')}
            {...inputProps}
            />
        )}
    </DatePicker>       
  )
}

