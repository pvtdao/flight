import React, { useMemo } from 'react'

function CardPlace({ data, from = false, isRight = false, index, indexActive, setIndexActive }) {

    const isSelect = useMemo(() => {
        return indexActive === index ? true : false
    }, [indexActive])

    function handleOpenSelect() {
        return indexActive !== index ? setIndexActive(index) : setIndexActive(0)
    }

    return (
        <div onClick={handleOpenSelect} className={`border ${isSelect ? "border-primary": "border-black/10"} card-place`}>
            <h1 className='text-sm opacity-50'>{from ? "FROM" : "TO"}</h1>
            <p className='text-2xl text-primary'>{data.place}</p>
            <span className='text-sm'>{data.location}</span>
        </div>
    )
}

export default CardPlace