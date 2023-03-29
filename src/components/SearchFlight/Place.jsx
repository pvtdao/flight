import React, { useState } from 'react'
import { useFormContext, useWatch } from 'react-hook-form'
import CardPlace from './CardPlace'
import { BiTransferAlt } from "react-icons/bi";

function Place() {
    const { control, setValue, getValues } = useFormContext()
    const fromWatch = useWatch({ control, name: 'from' })
    const toWatch = useWatch({ control, name: 'to' })

    const [indexActive, setIndexActive] = useState(0)

    return (
        <div className='flex flex-col sm:flex-row lg:flex-col xl:flex-row  items-center justify-between w-full lg:w-auto'>
            <CardPlace getValues={getValues} setValue={setValue} index={1} indexActive={indexActive} setIndexActive={setIndexActive} data={fromWatch} from/>
            <div className="">
                <BiTransferAlt size="30px" />
            </div>
            <CardPlace getValues={getValues} setValue={setValue} index={2} indexActive={indexActive} setIndexActive={setIndexActive} data={toWatch}/>
        </div>
    )
}

export default Place