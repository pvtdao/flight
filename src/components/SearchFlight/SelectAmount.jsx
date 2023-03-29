import React, { useMemo, useState } from 'react'
import { useFormContext, useWatch } from 'react-hook-form'
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";

function SelectAmount({ index, setIndexActive, indexActive }) {
    const { formState: { defaultValues }, setValue, control } = useFormContext()
    const { amount } = defaultValues

    const amountWatch = useWatch({ control, name: 'amount' })
    console.log("🚀 ~ file: SelectAmount.jsx:10 ~ SelectAmount ~ amountWatch:", amountWatch)

    const isOpen = useMemo(() => {
        return indexActive === index ? true : false
    }, [indexActive])

    function handleOpenSelect() {
        return indexActive !== index ? setIndexActive(index) : setIndexActive(0)
    }

    // function handleChangeQuantityAdult(e, type) {
    //     e.preventDefault()
    //     if (type === '+') {
    //         setValue('amount.adult', getVal)
    //     }
    //     if (type === '-') {
    //         setValue('quantity', quantityWatch - 1)
    //     }
    // }

    return (
        <div className='relative'>
            <div
                className='flex items-center gap-1 cursor-pointer select-none relative'
                onClick={() => handleOpenSelect()}
            >
                <p className='text-[14px] flex items-center gap-1'>
                    <span className='text-primary'>
                        {amount.adult === 0 ? 0 : `0${amount.adult}`}
                    </span>
                    <span>Adult,</span>
                </p>
                <p className='text-[14px] flex items-center gap-1'>
                    <span className='text-primary'>
                        {amount.children === 0 ? 0 : `0${amount.children}`}
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
                            <button type='button'>-</button>
                            <input value={amount.adult} className='text-center w-[40px] h-[40px] outline-none' type='number' readOnly />
                            <button type='button'>+</button>
                        </div>
                    </li>
                    <li className='select-option amount'>
                        <p className='text-[14px]'>Children </p>
                        <div className='flex items-center'>
                            <button type='button'>-</button>
                            <input value={amount.children} className='text-center w-[40px] h-[40px] outline-none' type='number' readOnly />
                            <button type='button'>+</button>
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