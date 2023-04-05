import React, { useCallback, useEffect, useState } from 'react'
import Checkout from './Checkout'
import Filter from './Filter'
import ScheduleCard from './ScheduleCard'
import AIRLINE from '../../data/flight'

function Content({ data }) {
    const [indexActive, setIndexActive] = useState(0)
    const [filterState, setFilterState] = useState({
        transit: "all",
        airline: "all",
        price: "low",
    })
    const [airline, setAirline] = useState(AIRLINE)

    const [flight, setFlight] = useState(
        null
    )


    function handleFilter(name, value) {
        setFilterState({ ...filterState, [name]: value })
    }

    useEffect(() => {
        setAirline(AIRLINE.filter((item) => {
            return filterState.airline === "all" ? item : item.code === filterState.airline
        }))
    }, [filterState.airline])

    const allFlight = airline.reduce((pre, cur) => {
        const flight = cur.flight

        const airInFlight = flight.map((f, i) => {
            const airlineInfo = { ...cur }
            delete airlineInfo.flight
            return { ...f, airline: airlineInfo }
        })

        return [...pre, ...airInFlight]
    }, [])

    const payPrice = useCallback((price) => {
        return price.special ? price.special.split(" vnd")[0].split(".").join("") : price.originalPrice.split(" vnd")[0].split(".").join("")
    }, [])

    function low(a, b) {
        return payPrice(a.price) - payPrice(b.price)
    }

    function high(a, b) {
        return payPrice(b.price) - payPrice(a.price)
    }

    return (
        <section className='content pt-4 relative'>
            <div className={`pt-4 lg:pt-0 w-full ${flight && 'lg:w-[calc(75%-15px)]'}  lg:ml-0`}>
                {flight &&
                    <div className="h-full w-full lg:w-[calc(25%-15px)] lg:absolute top-0 right-0 pb-4 lg:pb-0 lg:pt-4">
                        <Checkout flight={flight} />
                    </div>
                }
                <div className="filter flex justify-end w-full">
                    <Filter data={data} filterState={filterState} handleFilter={handleFilter} />
                </div>
                <div className="flight-list mt-[5px] w-full">
                    {
                        allFlight
                            // .filter(item =>
                            //     isSameDay(item.date, depart)
                            //     && item.from.shorten === from.shorten
                            //     && item.to.shorten === to.shorten
                            //     && item.type === type
                            //     && item.seatClass === seatClass)
                            .filter((item) => filterState.transit === "all" ? item : item.transit === filterState.transit)
                            .sort(filterState.price === "low" ? low : high)
                            .map((flight, idx) => {
                                const time = {
                                    start: flight.start,
                                    end: flight.end
                                }
                                return <ScheduleCard
                                    setFlight={setFlight}
                                    indexActive={indexActive}
                                    setIndexActive={setIndexActive}
                                    index={idx + 1}
                                    key={idx}
                                    time={time}
                                    flight={flight}
                                    airline={flight.airline}
                                    data={data}
                                />
                            })
                    }
                </div>
            </div>
        </section>
    )
}

export default Content