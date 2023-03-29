import React, { useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";

const MENU_CLASS_SEAT = [
    "Economy",
    "Premium",
    "Business"
]

function SelectClassSeat({ index, setIndexActive, indexActive }) {
    const { formState: { defaultValues } } = useFormContext()
    const { seatClass } = defaultValues

    const isOpen = useMemo(() => {
        return indexActive === index ? true : false
    }, [indexActive])

    function handleOpenSelect() {
        return indexActive !== index ? setIndexActive(index) : setIndexActive(0)
    }

    return (
        <div className='relative'>
            <div
                className='flex items-center gap-1 cursor-pointer select-none relative'
                onClick={() => handleOpenSelect()}
            >
                <p className='text-[14px] flex items-center gap-1'>
                    {seatClass}
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
                    className="px-4 py-3 absolute w-[200px] bg-white rounded-xl right-0 md:left-0 z-10">
                    {MENU_CLASS_SEAT.map((seat, idx) => {
                        return <li className={`select-option ${seat === seatClass && "active"}`}>
                            <p className='text-[14px]'>{seat}</p>
                        </li>
                    })}
                </ul>
            }
        </div>
    )
}

export default SelectClassSeat