import React, {Component} from "react"
import { useState, useEffect } from 'react'

import "./style.css"
import "./style2.css"
import useCurrencyInfo from "./Currency"

function Converter() {

    let [amount, setAmount] = useState(0) 
    let [convertedAmount, setConvertedAmount] = useState(0)
    let [from, setFrom] = useState("USD")
    let [to, setTo] = useState("INR")

    const currencyInfo = useCurrencyInfo(from);
    const currencyOptions = Object.keys(currencyInfo || {});




    let amountChange = (e) =>{
        setAmount(e.target.value);
    }
     let currencyChangeFrom = (e) =>{
        setFrom(e.target.value)
     }

     let currencyChangeTo = (e) =>{
        setTo(e.target.value)
    }

    let finalAmt = () =>{
            setConvertedAmount(amount * currencyInfo[to])
            setAmount("")
        }

    let swap = () =>{
   setFrom(to)
  setTo(from)
    }


    return (
        <div id="webcrumbs">
            <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden box-1">
                <div className="flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-4xl text-primary-600">currency_exchange</span>
                    <h2 className="text-2xl font-bold ml-2">Currency Converter</h2>
                </div>

                <div className="space-y-4">
                    <div className="flex flex-col">
                        <label className="text-sm font-medium mb-1">Amount</label>
                        <div className="relative">
                            <input
                                type="number"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                                placeholder="Enter amount"
                                value={amount}
                                onChange={amountChange}
                            />
                        </div>
                    </div>
     
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col">
                            <label className="text-sm font-medium mb-1">From</label>
                            <div className="relative">
                                <select className="w-full p-3 border border-gray-300 rounded-lg appearance-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all" 
                                value={from}
                                onChange={currencyChangeFrom}>

                                  {currencyOptions.map((Currency)=>(
                                    <option key={Currency} value={Currency}>
                                          {Currency}
                                    </option>
                                  ))}

                                </select>
                                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none material-symbols-outlined">
                                    expand_more
                                </span>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <label className="text-sm font-medium mb-1">To</label>
                            <div className="relative">
                                <select className="w-full p-3 border border-gray-300 rounded-lg appearance-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all" value={to}
                                 onChange = {currencyChangeTo}>

                                    {currencyOptions.map((Currency)=>(
                                    <option key={Currency} value={Currency}>
                                          {Currency}
                                    </option>
                                  ))}
                                </select>
                                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none material-symbols-outlined">
                                    expand_more
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center items-center my-2">
                        <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-all transform hover:rotate-180 duration-300"
                        onClick={swap}>
                            <span className="material-symbols-outlined">swap_vert</span>
                        </button>
                    </div>

                    <button className="w-full bg-primary-600 text-white py-3 px-4 rounded-lg hover:bg-primary-700 focus:ring-4 focus:ring-primary-300 transition-all transform hover:-translate-y-1 duration-200 font-medium"
                    onClick={finalAmt}>
                        Convert
                    </button>

                    <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                        <div className="text-center">
                            <p className="text-sm text-gray-500">Conversion Result</p>
                            {/* <p className="text-2xl font-bold mt-1">1,000.00 USD = 920.80 EUR</p> */}
                            <p className="text-2xl font-bold mt-1">{amount} {from} = {convertedAmount} {to}</p>
                        </div>
                    </div>

                    <div className="text-xs text-gray-500 text-center mt-4">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Converter
