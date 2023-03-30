import React, { useState } from 'react'
import "./schedule.css"
import SchedulePlace from './SchedulePlace'
import { BiTransferAlt } from "react-icons/bi";
import { TfiSearch } from "react-icons/tfi";
import Content from './Content';
import SearchFlight from '../SearchFlight/SearchFlight';

function Schedule() {
    const DATA_LOCOL = localStorage.getItem("ticket-flight")
    const [isOpen, setIsOpen] = useState(false)
    console.log("🚀 ~ file: Schedule.jsx:12 ~ Schedule ~ isOpen:", isOpen)
    const DATA = JSON.parse(DATA_LOCOL)
    const { type,
        amount,
        from,
        depart,
        return: returnFlight,
        seatClass, to
    } = DATA

    function handleShow() {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <section className='schedule'>
                <div className="schedule-container container mx-auto">
                    <div className="info py-4 lg:py-0 flex flex-col lg:flex-row lg:items-center justify-between gap-[25px] lg:gap-[unset]">
                        <div className="place flex items-center gap-[50px]">
                            <SchedulePlace place={from.place} shorten={from.shorten} time={depart} />
                            <div className="">
                                <BiTransferAlt size="30px" color='rgba(0,0,0,.3)' />
                            </div>
                            <SchedulePlace place={to.place} shorten={to.shorten} time={returnFlight} />

                        </div>
                        <div className="type flex flex-col sm:flex-row sm:items-center text-sm">
                            <p className="capitalize pr-[15px]">{type}</p>
                            <div className='flex items-center gap-1 sm:px-[15px] sm:border-l sm:border-r border-black/10'>
                                <p>
                                    <span className='text-primary'>0{`${amount.adult} `} </span> Adult,
                                </p>
                                <p>
                                    <span className='text-primary'>{amount.children > 0 ? `0${amount.children} ` : `${amount.children} `}</span> Children
                                </p>
                            </div>
                            <p className="sm:px-[15px]">{seatClass}</p>
                        </div>
                        <div onClick={handleShow} className="btn-search shadow">
                            <p>Change Flight</p>
                            <div className="">
                                <TfiSearch size="16px" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content-container bg-[#E5E5E5]">
                    <div className="container pb-5 mx-auto">
                        {!isOpen && <Content data={DATA} />}
                    </div>
                </div>

            </section>
            <div
                className={`${!isOpen ? "hidden" : "block h-screen"} absolute top-0 bottom-0 left-0 right-0 z-50
                bg-black/90 overflow-hidden`}
            >
                <div className="container mx-auto relative flex flex-col items-end gap-3 justify-center h-screen">
                    <button onClick={handleShow} type="button" style={{ fontFamily: "BiennaleBold" }}
                        className='px-3 py-2 text-sm rounded-xl text-white bg-primary'>
                        Close
                    </button>
                    <SearchFlight handleShow={handleShow}/>
                </div>
            </div>
        </>

    )
}

export default Schedule