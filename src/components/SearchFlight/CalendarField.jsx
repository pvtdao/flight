import { compareDesc, isSameDay } from 'date-fns';
import React, { useState } from 'react'
import { Calendar } from 'react-calendar';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import { useFormContext } from 'react-hook-form';

function CalendarField({ getValues, name, value, index, handleOpenSelect }) {
    const { setValue } = useFormContext()
    const today = new Date()

    function handleChange(index, value) {
        if (index === 1) setValue("depart", value)
        else if (index === 2) setValue("return", value)

        handleOpenSelect()
    }

    function disabled(date) {
        if (index === 1) {
            if (compareDesc(today, date) !== 1 && !isSameDay(today, date))
                return date
        }
        else {
            if (compareDesc(date, getValues("depart")) === 1)
                return date
        }
    }

    return (
        <Calendar
            calendarType='US'
            name={name}
            defaultValue={new Date()}
            value={value}
            allowPartialRange
            tileDisabled={({ date }) => disabled(date)}
            onChange={value => handleChange(index, value)}
        />
    )
}

export default CalendarField