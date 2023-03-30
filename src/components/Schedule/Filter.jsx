import React, { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const FILTER = [
    {
        name: "transit",
        option: [
            {
                title: "Straight",
                value: "0"
            },
            {
                title: "Transit",
                value: "1"
            },
            {
                title: "2+ Transit",
                value: "2"
            }
        ]
    },
    {
        name: "time",
        option: [
            {
                title: "Sooner",
                value: "0"
            },
            {
                title: "Later",
                value: "1"
            }
        ]
    },
    {
        name: "airline",
        option: [
            {
                title: "Vietname Airline",
                value: "VNA"
            },
            {
                title: "Bam Boo",
                value: "BBA"
            },
            {
                title: "Vietjet",
                value: "VJA"
            }
        ]
    },
    {
        name: "price",
        option: [
            {
                title: "Low",
                value: "0"
            },
            {
                title: "High",
                value: "1"
            }
        ]
    }
]

function Filter({ filterState, handleFilter }) {

    function onFilter(e) {
        const name = e.target.name
        const value = e.target.value
        handleFilter(name, value)
    }
    return (
        <div className='text-[12px] border flex gap-3 w-full sm:w-auto flex-wrap items-center'>
            <p className="hidden sm:block opacity-50"
                style={{
                    fontFamily: "BiennaleBold"
                }}
            >
                FILTER
            </p>
            {
                FILTER.map((item, idx) => {
                    return <div className="" key={idx}>
                        <select onChange={(e) => onFilter(e)} className='h-[34px] px-[15px] py-2 rounded-xl cursor-pointer outline-none'
                            name={item.name}
                            defaultValue={filterState[item.name]}
                        >
                            {item.option.map((opt, index) => {
                                return <option key={index} value={opt.value}>{opt.title}</option>
                            })}
                        </select>
                    </div>
                })
            }
        </div>
    )
}

export default Filter