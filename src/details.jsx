import React, { Component, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import './App.css'

const API_KEY = import.meta.env.VITE_APP_API_KEY;

const DetailView = () => {
    const formatDate = (date) => {
        const [year, month, day] = date.split('-');
        return `${month}/${day}`;
    };
    let params = useParams();
    params = formatDate(params.symbol)
    console.log(params)
    const [fullDetails, setFullDetails] = useState(null);
    const day = JSON.parse(sessionStorage.getItem(params))
    const location = JSON.parse(sessionStorage.getItem("city"))
    console.log(Object.keys(day))
    return (
        <>
            <div className="back-link">
                <Link to="/" onClick={() => {sessionStorage.clear()}}>
                    Back
                </Link>
            </div>
            <h1>{location["city"]}</h1>
            <h2>{params}</h2>
            <img
                src={`/icons.tar/icons/${day.weather.icon}.png`}
                alt={day.weather.description}
            />
            {Object.keys(day).map((date) =>
            (date !== 'valid_date' && date !== 'ts' && date !== 'datetime' && date !== 'weather') ? (
                <h4>{date + ": " + day[date]}</h4>
            ) : null
          )}
        </>

    
    );
  };
  
  export default DetailView;