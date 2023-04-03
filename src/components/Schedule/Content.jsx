import React, { useCallback, useEffect, useMemo, useState } from 'react'
import Checkout from './Checkout'
import Filter from './Filter'
import ScheduleCard from './ScheduleCard'
import AIRLINE from '../../data/flight'
import { isSameDay } from 'date-fns'

function Content({ data }) {
    const {
        type,
        amount,
        from,
        depart,
        return: returnFlight,
        seatClass, to
    } = data

    const [indexActive, setIndexActive] = useState(0)
    const [filterState, setFilterState] = useState({
        transit: "all",
        // time: "0",
        airline: "all",
        price: "low"
    })
    console.log("🚀 ~ file: Content.jsx:24 ~ Content ~ filterState:", filterState)
    const [airline, setAirline] = useState(AIRLINE)
    const [filterFlight, setFilterFlight] = useState([])

    const [flight, setFlight] = useState({
        depart: depart,
        return: returnFlight,
        from,
        to,
        time: { "start": "11:00", "end": "13:00" },
        "timeTravel": "2h 00m",
        "price": {
            "originalPrice": "1.300.000 vnd",
            "special": "1.250.000 vnd"
        },
        "logo": "https://i.pinimg.com/originals/7a/ec/17/7aec17946661a88378269d0b642b61f3.png",
        "name": "Vietname Airline",
        "code": "VNA",
        transit: "Straight"
    })


    function handleFilter(name, value) {
        setFilterState({ ...filterState, [name]: value })
    }

    useEffect(() => {
        setAirline(AIRLINE.filter((item) => {
            return filterState.airline === "all" ? item : item.code === filterState.airline
        }))
    }, [filterState])

    const allFlight = airline.reduce((pre, cur) => [...pre, ...cur.flight], [])
    console.log("🚀 ~ file: Content.jsx:57 ~ Content ~ allFlight:", allFlight.filter((item) => filterState.transit === "all" ? item : item.transit === filterState.transit))

    const payPrice = useCallback((price) => {
        return price.special ? price.special.split(" vnd")[0].split(".").join("") : price.originalPrice.split(" vnd")[0].split(".").join("")
    }, [])

    function low(a, b) {
        return payPrice(a.price) - payPrice(b.price)
    }

    function high(a, b) {
        return payPrice(a.price) + payPrice(b.price)
    }

    return (
        <section className='content flex flex-col md:flex-row gap-[10px] pt-4'>
            <div className="left w-full">
                <div className="filter flex justify-end w-full">
                    <Filter data={data} filterState={filterState} handleFilter={handleFilter} />
                </div>
                <div className="flight-list mt-[5px] w-full">
                    {airline.map((air) => {
                        return air.flight
                            .filter(item => isSameDay(item.date, depart)
                                && item.from.shorten === from.shorten
                                && item.to.shorten === to.shorten)
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
                                    airline={air}
                                    data={data}
                                />
                            })
                    })}
                </div>
            </div>
            <div className="w-full md:w-[300px]">
                <Checkout flight={flight} />
            </div>
        </section>
    )
}

export default Content