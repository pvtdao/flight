import React, { useEffect, useState } from 'react'
import Checkout from './Checkout'
import Filter from './Filter'
import ScheduleCard from './ScheduleCard'
import AIRLINE from "../../data/flight.json"

function Content({ data }) {
    const [indexActive, setIndexActive] = useState(0)
    const [filterState, setFilterState] = useState({
        // transit: "0",
        // time: "0",
        airline: "all",
        // price: "0"
    })
    const [airline, setAirline] = useState(AIRLINE)

    const [flight, setFlight] = useState({
        depart: new Date(),
        return: new Date(),
        "from": {
            "shorten": "HAN",
            "place": "Hanoi",
            "location": "Viet Nam"
        },
        "to": {
            "shorten": "BKK",
            "place": "Bangkok",
            "location": "Thailand"
        },
        time: { "start": "11:00", "end": "13:00" },
        "timeTravel": "2h 00m",
        "price": {
            "originalPrice": "1.300.000 vnd",
            "special": "1.250.000 vnd"
        },
        "logo": "https://i.pinimg.com/originals/7a/ec/17/7aec17946661a88378269d0b642b61f3.png",
        "name": "Vietname Airline",
        "code": "VNA",
    })

    function handleFilter(name, value) {
        setFilterState({ [name]: value })
    }

    useEffect(() => {
        setAirline(AIRLINE.filter((item) => {
            return filterState.airline === "all" ? item : item.code === filterState.airline
        }))
    }, [filterState])



    return (
        <section className='content flex flex-col md:flex-row gap-[10px] pt-4'>
            <div className="left w-full">
                <div className="filter flex justify-end w-full">
                    <Filter data={data} filterState={filterState} handleFilter={handleFilter} />
                </div>
                <div className="flight-list mt-[5px] w-full">
                    {airline.map((airline, index) => {
                        return <React.Fragment key={index}>
                            {airline.flight.map((flight, idx) => {
                                return <React.Fragment key={idx}>
                                    {flight.time.map((time, i) => {
                                        return <ScheduleCard
                                            setFlight={setFlight}
                                            indexActive={indexActive}
                                            setIndexActive={setIndexActive}
                                            index={i + 1}
                                            key={idx}
                                            time={time}
                                            flight={flight}
                                            airline={airline}
                                            data={data}
                                        />
                                    })}
                                </React.Fragment>
                            })}
                        </React.Fragment>
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