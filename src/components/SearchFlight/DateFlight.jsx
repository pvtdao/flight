import { compareDesc } from "date-fns"
import React, { useEffect, useState } from 'react'
import { useFormContext, useWatch } from 'react-hook-form'
import CardDate from './CardDate'

function DateFlight() {
    const { control, setValue, getValues } = useFormContext()

    const departWatch = useWatch({ control, name: 'depart' })
    const returnWatch = useWatch({ control, name: 'return' })
    const [indexActive, setIndexActive] = useState(0)

    useEffect(() => {
        if(compareDesc(departWatch, returnWatch) === -1){
            setValue("return", departWatch)
        }

    }, [departWatch])


    return (
        <div className='rounded-xl border border-black/10 w-full sm:h-[100px] pt-[15px] pb-3 px-5 bg-white
            flex items-center flex-col sm:flex-row gap-10 sm:gap-5'
        >
            <CardDate getValues={getValues} setValue={setValue} index={1} indexActive={indexActive} setIndexActive={setIndexActive} time={departWatch} depart />
            <CardDate getValues={getValues} setValue={setValue} index={2} indexActive={indexActive} setIndexActive={setIndexActive} time={returnWatch} />
        </div>
    )
}

export default DateFlight