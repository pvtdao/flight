import React, { useEffect, useMemo } from 'react'
import { useFormContext } from 'react-hook-form'
import AIRPORT from "../../data/airport.json"

function CardPlace({ data, from = false, isRight = false, index, indexActive, setIndexActive }) {
    const { formState: { errors }, setValue, getValues, getFieldState, clearErrors } = useFormContext()
    const isToError = !!getFieldState("to").error

    const isSelect = useMemo(() => {
        return indexActive === index ? true : false
    }, [indexActive])

    function handleOpenSelect() {
        return indexActive !== index ? setIndexActive(index) : setIndexActive(0)
    }

    useEffect(() => {
        if (isToError && getValues("to.place") !== "")
            clearErrors("to")
    }, [getValues("to.place")])

    function handleChooseAirport(airport) {
        if (from) setValue("from", airport)
        else {
            setValue("to", airport)
        }
        handleOpenSelect()
    }

    return (
        <div onClick={handleOpenSelect} className={`border relative ${isSelect ? "border-primary" : "border-black/10"} ${isToError && !from ? "border-red-500" : "border-black/10"} card-place`}>
            <h1 className='text-sm opacity-50'>{from ? "FROM" : "TO"}</h1>
            {data.shorten && <p className='text-2xl text-primary'>{data.place} ({data.shorten})</p>}
            <span className='text-sm'>{data.location}</span>
            {isSelect &&
                <ul
                    style={{ boxShadow: '0px 4px 30px rgba(77, 70, 250, 0.1)', border: "1px solid rgba(0,0,0,.08)" }}
                    className="px-4 py-3 absolute w-full bg-white rounded-xl right-0 -bottom-[215%] md:left-0 z-10">
                    {AIRPORT.filter((air) => air.place !== getValues("from").place).map((air, idx) => {
                        return <li onClick={() => handleChooseAirport(air)} key={idx} className={`select-option `}>
                            <p className='text-[14px]'>{`${air.place} (${air.shorten}), ${air.location}`}</p>
                        </li>
                    })}
                </ul>
            }
        </div>
    )
}

export default CardPlace