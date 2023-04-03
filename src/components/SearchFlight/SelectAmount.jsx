import React, { useMemo } from 'react'
import { useFormContext, useWatch } from 'react-hook-form'
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";

function SelectAmount({ index, setIndexActive, indexActive }) {
    const { control, setValue } = useFormContext()
    const amountWatch = useWatch({ control, name: 'amount' })

    const isOpen = useMemo(() => {
        return indexActive === index ? true : false
    }, [indexActive, index])

    function handleOpenSelect() {
        return indexActive !== index ? setIndexActive(index) : setIndexActive(0)
    }

    const totalAmount = useMemo(() => {
        return amountWatch.adult + amountWatch.children
    }, [amountWatch])

    function handleChangeQuantityAdult(type) {
        if (type === '+') {
            if (totalAmount < 9)
                setValue('amount.adult', amountWatch.adult + 1)
        }
        if (type === '-') {
            if (totalAmount > 0)
                setValue('amount.adult', amountWatch.adult - 1)
        }
    }

    function handleChangeQuantityChildren(type) {
        if (type === '+') {
            if (totalAmount < 9)
                setValue('amount.children', amountWatch.children + 1)
        }
        if (type === '-') {
            if (totalAmount > 0)
                setValue('amount.children', amountWatch.children - 1)
        }
    }

    return (
        <div className='relative'>
            <div
                className='flex items-center gap-1 cursor-pointer select-none relative'
                onClick={() => handleOpenSelect()}
            >
                <p className='text-[14px] flex items-center gap-1'>
                    <span className='text-primary'>
                        {amountWatch.adult === 0 ? 0 : `0${amountWatch.adult}`}
                    </span>
                    <span>Adult,</span>
                </p>
                <p className='text-[14px] flex items-center gap-1'>
                    <span className='text-primary'>
                        {amountWatch.children === 0 ? 0 : `0${amountWatch.children}`}
                    </span>
                    <span>Children</span>
                </p>
                <div>
                    {isOpen ? <RiArrowUpSFill size="16px" className='text-primary' />
                        : <RiArrowDownSFill size="16px" className='text-primary' />
                    }
                </div>
            </div>
            {isOpen &&
                <ul
                    style={{ boxShadow: '0px 4px 30px rgba(77, 70, 250, 0.1)', border: "1px solid rgba(0,0,0,.08)" }}
                    className="absolute px-4 py-3 w-[200px] bg-white rounded-xl left-0 z-10">
                    <li className='select-option amount'>
                        <p className='text-[14px]'>Adult </p>
                        <div className='flex items-center'>
                            <button className={`p-1 outline-none ${(amountWatch.adult === 1 || totalAmount === 1) && "opacity-20"}`} disabled={amountWatch.adult === 1 || totalAmount === 1} onClick={() => handleChangeQuantityAdult("-")} type='button'>-</button>
                            <input value={amountWatch.adult} className='text-center w-[40px] h-[40px] outline-none' type='number' readOnly />
                            <button className={`p-1 outline-none ${(amountWatch.adult === 9 || totalAmount === 9) && "opacity-20"}`} disabled={amountWatch.adult === 9 || totalAmount === 9} onClick={() => handleChangeQuantityAdult("+")} type='button'>+</button>
                        </div>
                    </li>
                    <li className='select-option amount'>
                        <p className='text-[14px]'>Children </p>
                        <div className='flex items-center'>
                            <button className={`p-1 outline-none ${(amountWatch.children === 0 || totalAmount === 0) && "opacity-20"}`} disabled={amountWatch.children === 0 || totalAmount === 0} onClick={() => handleChangeQuantityChildren("-")} type='button'>-</button>
                            <input value={amountWatch.children} className='text-center w-[40px] h-[40px] outline-none' type='number' readOnly />
                            <button className={`p-1 outline-none ${(amountWatch.children === 9 || totalAmount === 9) && "opacity-20"}`} disabled={amountWatch.children === 9 || totalAmount === 9} onClick={() => handleChangeQuantityChildren("+")} type='button'>+</button>
                        </div>
                    </li>
                    <li className='flex justify-end' onClick={handleOpenSelect}>
                        <button type='button' className='self-end text-[14px] bg-primary text-white px-4 py-2 rounded-xl'>Done</button>
                    </li>
                </ul>
            }
        </div>
    )
}

export default SelectAmount