import { format } from 'date-fns'
import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'

function Checkout({ flight }) {
    const { depart, return: returnDay, from, to, time, logo, name: airlineName, timeTravel, price, transit, amount } = flight

    const totalAmount = amount.adult + amount.children

    const typeTransit = useMemo(() => {
        let value
        switch (transit) {
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
    }, [transit])

    function parsePrice(price) {
        let stringPrice = price.toString()
        let formatPrice = []

        while (stringPrice.length > 3) {
            let itemPrice = stringPrice.slice(-3)
            stringPrice = stringPrice.substring(0, stringPrice.length - 3)
            formatPrice.unshift(itemPrice)
        }

        formatPrice.unshift(stringPrice)

        return formatPrice.join(".")
    }

    function getNumberPrice(price) {
        return price.split(" vnd")[0].split(".").join("")
    }

    function totalPrice(priceUnFormat, amount) {
        return `${parsePrice(getNumberPrice(priceUnFormat) * amount)} vnd`
    }

    return (
        <aside className='rounded-xl'>
            <div className='bg-white rounded-t-xl'>
                <h1 className='px-[15px] py-[14px]'
                    style={{
                        fontFamily: "BiennaleBold"
                    }}
                >
                    YOUR FLIGHT
                </h1>
                <div className="h-[1px] w-full border-t border-black/10"></div>
                <div className='px-[15px] py-[14px] flex flex-col gap-4'>
                    <div className="flex flex-row items-center gap-2">
                        <p className='w-[30px] h-[30px] text-sm rounded-full text-white flex justify-center items-center bg-[#979797]'>01</p>
                        <div className="">
                            <p className='text-sm'>{format(depart, "ccc, dd LLL, yyyy")}</p>
                            <p className='text-sm' style={{ fontFamily: "BiennaleBold" }}>{from.place} - {to.place}</p>
                        </div>
                    </div>
                    <div className="flex gap-2 items-center">
                        <div className="logo-img w-[30px] h-[30px] border border-black/20 rounded-md p-1">
                            <img src={logo} alt={""} />
                        </div>
                        <div className="flex flex-col">
                            <p style={{ fontFamily: "BiennaleBold" }} className="text-sm capitalize">{airlineName}</p>
                            <Link href="/" style={{ fontFamily: "BiennaleLight300" }} className="text-[14px] text-primary -mt-1">Detail</Link>
                        </div>
                    </div>
                    <div className="timeline flex items-center gap-5 text-sm w-full lg:w-auto lg:flex-[unset]">
                        <div className="flex flex-col items-center gap-1 w-auto">
                            <p>{time.start}</p>
                            <p className='text-[10px] bg-primary/10 py-[3px] px-[5px] rounded-[100px]'>{from.shorten}</p>
                        </div>
                        <div style={{ fontFamily: "BiennaleLight300" }} className="flex flex-col items-center w-full">
                            <p>{timeTravel}</p>
                            <div className="flex items-center w-full justify-between">
                                <div className="w-[7px] h-[7px] rounded-full border border-primary"></div>
                                <div className="h-[1px] w-full border-t border-primary/50"></div>
                                <div className="w-[7px] h-[7px] rounded-full bg-primary"></div>
                            </div>
                            <p>{typeTransit}</p>
                        </div>
                        <div className="flex flex-col items-center gap-1 w-auto">
                            <p>{time.end}</p>
                            <p className='text-[10px] bg-primary/10 py-[3px] px-[5px] rounded-[100px]'>{to.shorten}</p>
                        </div>
                    </div>
                    <button className='py-[10px] px-[16px] text-primary bg-primary/10 text-sm rounded-xl'>
                        Change departure flight
                    </button>
                    <div className="h-[1px] w-full border-t border-black/10"></div>
                    <div className="flex flex-row items-center gap-2">
                        <p className='w-[30px] h-[30px] text-sm rounded-full text-white flex justify-center items-center bg-primary'>02</p>
                        <div className="">
                            <p className='text-sm'>{format(returnDay, "ccc, dd LLL, yyyy")}</p>
                            <p className='text-sm' style={{ fontFamily: "BiennaleBold" }}>{to.place} - {from.place}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#F8F8F8] rounded-b-xl">
                <div className="px-[15px] py-[14px]">
                    <p>Subtotal</p>
                    <p className="text-secondary">{price.special ? totalPrice(price.special, totalAmount) : totalPrice(price.originalPrice, totalAmount)}</p>
                </div>
            </div>
        </aside>
    )
}

export default Checkout