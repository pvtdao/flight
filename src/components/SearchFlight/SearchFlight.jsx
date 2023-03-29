import React, { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import RadioField from '../hook-form/RadioField'
import DateFlight from './DateFlight'
import Place from './Place'
import "./search-flight.css"
import SelectAmount from './SelectAmount'
import SelectClassSeat from './SelectClassSeat'

function SearchFlight() {
    const [indexActive, setIndexActive] = useState(0)

    const defaultValues = {
        type: "oneway",
        amount: {
            adult: 1,
            children: 0
        },
        seatClass: "Economy",
        from: {
            shorten: "DAD",
            place: "Da Nang",
            location: "Viet Nam"
        },
        to: {
            shorten: "",
            place: "",
            location: ""
        },
        depart: new Date(),
        return: new Date()
    }

    const methods = useForm({
        defaultValues
    })

    function handleSearchFlight(values) {
        console.log("🚀 values:", values)

    }

    return (
        <div className='search-flight relative'>
            <FormProvider {...methods}>
                <form className='flex flex-col gap-[20px]' onSubmit={methods.handleSubmit(handleSearchFlight)}>
                    <div className="type-flight flex flex-col md:flex-row md:items-center w-full gap-[20px] md:gap-[50px]">
                        <div className="flex items-center flex-wrap gap-5 justify-between">
                            <RadioField id="oneway" name="type" label="One way/Round trip" value="oneway" defaultChecked />
                            <RadioField id="multi" name="type" label="Multi-city" value="multi" />
                        </div>
                        <div className="flex items-center flex-wrap justify-between gap-[50px]">
                            <div className="select-amount">
                                <SelectAmount index={1} setIndexActive={setIndexActive} indexActive={indexActive} />
                            </div>
                            <div className="select-class-seat">
                                <SelectClassSeat index={2} setIndexActive={setIndexActive} indexActive={indexActive} />
                            </div>
                        </div>
                    </div>
                    <div className="info-flight flex flex-col lg:flex-row items-center justify-between gap-5">
                        <Place />
                        <DateFlight />
                    </div>
                    <button
                        style={{
                            fontFamily: 'BiennaleBold'
                        }}
                        className='text-white text-sm md:text-lg px-3 md:px-4 pl-5 pr-[80px] md:pr-[104px] h-[50px] md:h-[60px] w-[200px] md:w-[245px] bg-primary rounded-xl
                            absolute right-[30px] -bottom-[4%] sm:-bottom-[7%] xl:-bottom-[13%]'
                    >
                        Search Flight
                    </button>
                </form>
            </FormProvider>
        </div >
    )
}

export default SearchFlight