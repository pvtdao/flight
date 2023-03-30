import { format } from 'date-fns'
import React, { useRef, useState } from 'react'


function Tab({ data }) {
    const [activeIndex, setActiveIndex] = useState(1)
    const tabContentRef = useRef(null)

    const tabData = [
        {
            title: 'FLIGHT DETAIL',
            children: <FlightDetail data={data} />
        },
        {
            title: 'FARE INFO',
            children: <FareInfo data={data} />,
            className: 'hidden'
        }
    ]

    const handleSetActive = (idx) => {
        if (idx !== activeIndex) {
            if (tabContentRef.current) {
                const childCountList = Array.from(tabContentRef.current.children)

                childCountList[idx - 1].classList.remove('hidden')
                childCountList[activeIndex - 1].classList.add('hidden')

                setActiveIndex(idx)
            }
        }
    }

    return (
        <div className='mt-10 block text-sm'>
            <div className='flex gap-3 border-b-[0.5px]'>
                {tabData.map((i, idx) => {
                    return (
                        <div
                            onClick={() => handleSetActive(idx + 1)}
                            className={`cursor-pointer px-2 py-1.5 transition-all duration-300 ${activeIndex === idx + 1
                                ? 'text-primary border-b-2 border-primary'
                                : 'border-b-2 border-transparent'
                                }`}
                            key={idx}
                        >
                            {i.title}
                        </div>
                    )
                })}
            </div>
            <div ref={tabContentRef} className='mt-6 mb-10'>
                {tabData.map((i, idx) => {
                    return (
                        <div
                            key={idx}
                            id={`tab-content-${idx + 1}`}
                            className={`${i.className || ''}`}
                        >
                            {i.children}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Tab


function FlightDetail({ data }) {
    const { airline, time, flight, userData } = data

    return (
        <div className='flex flex-col sm:flex-row gap-[50px]'>
            <div className="h-[170px] flex justify-between sm:justify-start gap-[30px]">
                <div className="flex flex-col justify-between">
                    <div className="">
                        <p>{time.start}</p>
                        <p style={{ fontFamily: "BiennaleLight300" }} class="text-[12px]">{format(new Date(), "ccc, dd LLL, yyyy")}</p>
                    </div>
                    <p style={{ fontFamily: "BiennaleLight300" }}>{flight.timeTravel}</p>
                    <div className="">
                        <p>{time.end}</p>
                        <p style={{ fontFamily: "BiennaleLight300" }} class="text-[12px]">{format(new Date(), "ccc, dd LLL, yyyy")}</p>
                    </div>
                </div>
                <div className="h-full">
                    <div className="flex flex-col items-center w-full h-full">
                        <div className="w-[7px] h-[7px] rounded-full border border-primary"></div>
                        <div className="w-[1px] h-full border-l border-primary/50"></div>
                        <div className="w-[7px] h-[7px] rounded-full bg-primary"></div>
                    </div>
                </div>
                <div className="flex flex-col justify-between">
                    <div className="">
                        <p>{flight.from.place} (${flight.from.shorten})</p>
                        <p style={{ fontFamily: "BiennaleLight300" }} class="text-[12px]">{flight.from.location}</p>
                    </div>
                    <div className="">
                        <p>{flight.to.place} (${flight.to.shorten})</p>
                        <p style={{ fontFamily: "BiennaleLight300" }} class="text-[12px]">{flight.to.location}</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-[10px] flex-1">
                <div className="flex gap-2 items-center">
                    <div className="logo-img w-[30px] h-[30px] border border-black/20 w-full rounded-md p-1">
                        <img src={airline.logo} alt={""} />
                    </div>
                    <div className="flex flex-col">
                        <p className="text-sm capitalize">{airline.name}</p>
                        <p style={{ fontFamily: "BiennaleLight300" }} class="text-[12px] -mt-1">{userData.seatClass}</p>
                    </div>
                </div>
                <div style={{ fontFamily: "BiennaleLight300" }} className="w-full h-full rounded-xl p-[15px] bg-[#F4F2F9] grid grid:cols-1 gap-1 lg:grid-cols-2">
                    <div className="gap-1 flex flex-col">
                        <p>Baggage <span style={{ fontFamily: "BiennaleBold" }} className='text-primary'>{airline.baggage}</span></p>
                        <p>In-flight <span style={{ fontFamily: "BiennaleBold" }} className='text-primary'>{airline.inFlightMeal && "Meal"}</span></p>
                        <p>In-flight <span style={{ fontFamily: "BiennaleBold" }} className='text-primary'>{airline.inFlightEntertaiment && "Entertaiment"}</span></p>
                    </div>
                    <div className="gap-1 flex flex-col">
                        <p>Aicraft <span style={{ fontFamily: "BiennaleBold" }} className='text-primary'>Airbus A321</span></p>
                        <p>Seat layout <span style={{ fontFamily: "BiennaleBold" }} className='text-primary'>{airline.seatLayout}</span></p>
                        <p>Seat pitch <span style={{ fontFamily: "BiennaleBold" }} className='text-primary'>{airline.seatPitch}</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

function FareInfo({ data }) {
    const { airline, time, flight, userData } = data

    // if (flight.price.special) {
    //     console.log(flight.price.originalPrice.split(" vnd")[0].split(".").join("") - flight.price.special.split(" vnd")[0].split(".").join(""))
    //     console.log(flight.price.originalPrice.split(" vnd")[0].split(".").join(""))
    //     console.log(flight.price.special.split(" vnd")[0].split(".").join(""))
    // }

    return (
        <div className="flex flex-col lg:flex-row gap-[50px]">
            <div className=" w-[200px]">
                <h1 className='mb-[15px]'>CONDITIONS</h1>
                <div className="flex gap-2 items-center">
                    <div className="logo-img w-[30px] h-[30px] border border-black/20 w-full rounded-md p-1">
                        <img src={airline.logo} alt={""} />
                    </div>
                    <div className="flex flex-col">
                        <p className="text-sm capitalize">{airline.name}</p>
                        <p style={{ fontFamily: "BiennaleLight300" }} class="text-[12px] -mt-1">{userData.seatClass}</p>
                    </div>
                </div>
                <div style={{ fontFamily: "BiennaleLight300" }} className="mt-[10px] w-full justify-between flex gap-2 items-center">
                    <p>{flight.from.place}</p>
                    <div className="flex flex-1 items-center">
                        <div className="w-[7px] h-[7px] rounded-full border border-primary"></div>
                        <div className="h-[1px] w-full border-t border-primary/50"></div>
                        <div className="w-[7px] h-[7px] rounded-full bg-primary"></div>
                    </div>
                    <p>{flight.to.place}</p>
                </div>
                <p style={{ fontFamily: "BiennaleLight300" }} className='text-primary'>{userData.seatClass}</p>
                <p style={{ fontFamily: "BiennaleLight300" }} className='mt-[15px]'>Non - Refundable</p>
            </div>
            <div className="flex-1">
                <h1 className='mb-[15px] lg:pl-[15px]'>PRICE DETAILS</h1>
                <div style={{ fontFamily: "BiennaleLight300" }} className="w-full rounded-xl lg:p-[15px] grid grid:cols-1 gap-1 grid-cols-2">
                    <div className="gap-1 flex flex-col justify-between">
                        <p>Adult Basic Fare</p>
                        <p>Tax</p>
                        <p>Regular Total Price</p>
                        <p>Save</p>
                    </div>
                    <div className="gap-1 flex flex-col justify-between">
                        <p><span style={{ fontFamily: "BiennaleBold" }} className='text-primary'>{flight.price.originalPrice}</span></p>
                        <p>Included</p>
                        <p>{flight.price.special ? flight.price.special : 0}</p>
                        <p>{!flight.price.special ? 0 : flight.price.originalPrice.split(" vnd")[0].split(".").join("") - flight.price.special.split(" vnd")[0].split(".").join("")} vnd</p>
                    </div>
                </div>
                <div className="w-full h-[1px] border-t border-black/20"></div>
                <div style={{ fontFamily: "BiennaleLight300" }} className="w-full rounded-xl py-[15px] lg:p-[15px] grid gap-1 grid-cols-2">
                    <div className="gap-1 flex flex-col">
                        <p>You pay</p>
                    </div>
                    <div className="gap-1 flex flex-col">
                        <p><span style={{ fontFamily: "BiennaleBold" }} className='text-secondary'>{flight.price.special ? flight.price.special : flight.price.originalPrice}</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}