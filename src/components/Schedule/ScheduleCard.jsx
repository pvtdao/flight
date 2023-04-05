import React, { useMemo } from 'react'
import { CiRollingSuitcase } from "react-icons/ci";
import { ImSpoonKnife } from "react-icons/im";
import Tab from './Tab';

function ScheduleCard({ flight, airline, time, index, indexActive, setIndexActive, setFlight, data }) {
    const isSelect = useMemo(() => {
        return indexActive === index ? true : false
    }, [indexActive])

    function handleOpenSelect() {
        return indexActive !== index ? setIndexActive(index) : setIndexActive(0)
    }

    function handleChooseTicket() {
        setFlight({
            amount: data.amount,
            depart: data.depart,
            return: data.return,
            from: flight.from,
            to: flight.to,
            time: time,
            timeTravel: flight.timeTravel,
            price: flight.price,
            logo: airline.logo,
            name: airline.name,
            transit: flight.transit
        })
    }

    const typeTransit = useMemo(() => {
        let value
        switch (flight.transit) {
            case "Straight":
                value = "Direct"
                break;
            case "Transit":
                value = "Transit"
                break;
            case "2+ Transit":
                value = "2+ Transit"
                break;

            default:
                break;
        }

        return value
    }, [flight])


    return (
        <div className='schedule-card p-[15px] w-full border rounded-xl bg-white border-transparent cursor-pointer mb-[10px]'>
            <div className="common xl:flex items-center flex-col xl:flex-row gap-10 xl:gap-[50px]">
                <div onClick={handleOpenSelect} className="h-full flex items-center flex-col lg:flex-row lg:justify-between w-full gap-10 xl:gap-[50px]">
                    <div className="flex flex-col lg:flex-row items-center gap-3 w-full lg:w-auto min-w-[160px]">
                        <div className="logo-img w-[30px] h-[30px] border border-black/20 rounded-md p-1">
                            <img src={airline.logo} alt={airline.name} />
                        </div>
                        <p className="text-sm capitalize">{airline.name}</p>
                    </div>
                    <div className="timeline flex items-center gap-5 text-sm w-full lg:w-auto lg:flex-[unset]">
                        <div className="flex flex-col items-center gap-1 w-auto">
                            <p>{time.start}</p>
                            <p className='text-[10px] bg-primary/10 py-[3px] px-[5px] rounded-[100px]'>{flight.from.shorten}</p>
                        </div>
                        <div style={{ fontFamily: "BiennaleLight300" }} className="flex flex-col items-center w-full">
                            <p>{flight.timeTravel}</p>
                            <div className="flex items-center w-full">
                                <div className="w-[7px] h-[7px] rounded-full border border-primary"></div>
                                <div className="h-[1px] w-full lg:w-[70px] border-t border-primary/50"></div>
                                <div className="w-[7px] h-[7px] rounded-full bg-primary"></div>
                            </div>
                            <p>{typeTransit}</p>
                        </div>
                        <div className="flex flex-col items-center gap-1 w-auto">
                            <p>{time.end}</p>
                            <p className='text-[10px] bg-primary/10 py-[3px] px-[5px] rounded-[100px]'>{flight.to?.shorten}</p>
                        </div>
                    </div>
                    <div className="w-full lg:w-auto text-sm flex flex-col sm:flex-row items-center justify-between gap-10 xl:gap-[50px]">
                        <div style={{ fontFamily: "BiennaleLight300" }} className="flex flex-col gap-1 w-full sm:w-auto">
                            <div className="flex items-center gap-1">
                                <CiRollingSuitcase size="14px" />
                                <p>Baggage <span style={{ fontFamily: "BiennaleBold" }} className='text-primary'>{airline.baggage}</span></p>
                            </div>
                            {airline.inFlightMeal
                                &&
                                <div className="flex items-center gap-1">
                                    <ImSpoonKnife size="14px" />
                                    <p>In-flight <span style={{ fontFamily: "BiennaleBold" }} className='text-primary'>Meal</span></p>
                                </div>
                            }
                        </div>
                        <div className="flex flex-col items-start gap-1 w-full sm:w-auto">
                            {flight.price.special && <p className='text-black/20 line-through'>{flight.price.originalPrice}</p>}
                            {!flight.price.special && <p className=''>{flight.price.originalPrice}</p>}
                            <p className='text-secondary'>{flight.price.special}</p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end w-full xl:w-auto">
                    <div onClick={() => handleChooseTicket()} className="inline-block bg-secondary/10 text-secondary rounded-xl py-[6px] px-[15px] cursor-pointer ">
                        <p>Choose</p>
                    </div>
                </div>
            </div>
            {isSelect &&
                <div className="detail">
                    <Tab data={{ airline, flight, time, userData: data }} />
                </div>
            }
        </div>
    )
}

export default ScheduleCard