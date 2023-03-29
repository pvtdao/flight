import React, { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import CardPlace from './CardPlace'
import { BiTransferAlt } from "react-icons/bi";

function Place() {
    const { formState: { defaultValues } } = useFormContext()
    const { from, to } = defaultValues
    const [indexActive, setIndexActive] = useState(0)

    return (
        <div className='flex flex-col sm:flex-row lg:flex-col xl:flex-row  items-center justify-between w-full lg:w-auto'>
            <CardPlace index={1} indexActive={indexActive} setIndexActive={setIndexActive} data={from} from/>
            <div className="">
                <BiTransferAlt size="30px" />
            </div>
            <CardPlace index={2} indexActive={indexActive} setIndexActive={setIndexActive} data={to}/>
        </div>
    )
}

export default Place