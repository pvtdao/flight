import { format } from 'date-fns'
import React from 'react'

function SchedulePlace({ place, time, shorten }) {
    const timeData = new Date(time)
    return (
        <div>
            <p className="place-bold text-[16px] text-primary">{place} ({shorten})</p>
            <p className='text-[12px]'>{format(timeData, "ccc, dd LLL, yyyy")}</p>
        </div>
    )
}

export default SchedulePlace