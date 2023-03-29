import React, { useMemo } from 'react'
import { format, addDays, compareAsc, subDays } from "date-fns"
import { RxCalendar } from "react-icons/rx";
import CalendarField from './CalendarField';

function CardDate({ setValue, getValues, time, depart = false, isRight = false, index, indexActive, setIndexActive }) {
    const today = new Date()

    const isSelect = useMemo(() => {
        return indexActive === index ? true : false
    }, [indexActive])

    function handleOpenSelect() {
        return indexActive !== index ? setIndexActive(index) : setIndexActive(0)
    }

    const isDisabled = useMemo(() => {
        if (depart) {
            if (compareAsc(time, today) !== 1)
                return true
            return false
        }
        else {
            if (compareAsc(time, getValues("depart")) !== 1)
                return true
            return false
        }
    }, [time, getValues("depart")])

    function nextDay() {
        if (depart) setValue("depart", addDays(time, 1))
        else setValue("return", addDays(time, 1))
    }

    function prevDay() {
        if (depart) setValue("depart", subDays(time, 1))
        else setValue("return", subDays(time, 1))
    }

    return (
        <div className={`${isSelect ? "border-primary" : "border-black/10"} w-full flex-1 cursor-pointer`}>
            <h1 className='text-sm opacity-50'>{depart ? "DEPART" : "RETURN"}</h1>
            <div className='text-2xl relative w-full'>
                <div className="flex items-center gap-2" onClick={handleOpenSelect}>
                    <span className='text-primary'>
                        {format(time, "ccc, dd LLL, yyyy")}
                    </span>
                    <RxCalendar size="18px" color='#4D46FA' />
                </div>
                <div className={`${isSelect ? "block absolute z-10 top-full" : "hidden"}`}>
                    <CalendarField getValues={getValues} index={index} name={`${depart ? "depart" : "return"}`} value={time} handleOpenSelect={handleOpenSelect} />
                </div>
            </div>
            <div className="flex gap-5">
                <button type="button" onClick={prevDay} disabled={isDisabled} className={`text-sm border-b border-transparent hover:border-black/50 ${isDisabled && "opacity-50 hover:border-transparent"}`}>Prev</button>
                <button type="button" onClick={nextDay} className={`text-sm border-b border-transparent hover:border-black/50`}>Next</button>
            </div>
        </div>
    )
}

export default CardDate