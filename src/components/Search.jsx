import React, { useState } from 'react'

const Search = ({ dateFrom,
    setDateFrom,
    dateTo,
    setDateTo,
    setData, data }) => {


    const handleSubmit = () => {
        console.log(dateFrom, dateTo);
        let temp = data.filter(mov => (
            mov.date.split("/").join("-") <= dateTo && mov.date.split("/").join("-") >= dateFrom

        ))
        setData(temp)
        
    }


    return (
        <div className='search_parent'>
            <div>From</div>
            <div> <input type="date" onChange={(e) => setDateFrom(e.target.value)}  /> </div>
            {/* <div> <input type="text" onChange={(e) => setDateFrom(e.target.value)} name='date_from' /> </div> */}
            <div>to</div>
            <div> <input type="date" onChange={(e) => setDateTo(e.target.value)}  /> </div>
            {/* <div> <input type="text" onChange={(e) => setDateTo(e.target.value)} /> </div> */}
            <div><button className='search_btn' onClick={handleSubmit}>Submit</button></div>
        </div>
    )
}

export default Search
