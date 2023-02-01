import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faPause } from "@fortawesome/free-solid-svg-icons";
import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const SecondsCounter = (props) => {
    const [number, setNumber] = useState(props.number);
    const [isRunning, setIsRunning] = useState(true);
    
    useEffect(() => {
        let intervalId;
        if (isRunning) {
          intervalId = setInterval(() => setNumber(number => number + 1), 1000);
        }
        return () => clearInterval(intervalId);
      }, [isRunning, number]);
    
    const handlePlay = () => {
      setIsRunning(true);
    };
    
    const handlePause = () => {
      setIsRunning(false);
    };
    
    const handleReset = () => {
      setIsRunning(false);
      setNumber(0);
    };
    
    return (
      <div className="container bg-dark">
        <div className="row text-center d-flex justify-content-center">
          <div className="col-md-1 m-2 py-4 border rounded text-white" id="clockIcon">
            <h1>
              <FontAwesomeIcon icon={faClock} />
            </h1>
          </div>
          <div className="col-md-1 m-2 py-4 border rounded text-white">
            <h1>{Math.floor(number / 100000 % 10)}</h1>
          </div>
          <div className="col-md-1 m-2 py-4 border rounded text-white">
            <h1>{Math.floor(number / 10000 % 10)}</h1>
          </div>
          <div className="col-md-1 m-2 py-4 border rounded text-white">
            <h1>{Math.floor(number / 1000 % 10)}</h1>
          </div>
          <div className="col-md-1 m-2 py-4 border rounded text-white">
            <h1>{Math.floor(number / 100 % 10)}</h1>
          </div>
          <div className="col-md-1 m-2 py-4 border rounded text-white">
            <h1>{Math.floor(number / 10 % 10)}</h1>
          </div>
          <div className="col-md-1 m-2 py-4 border rounded text-white">
            <h1>{number % 10}</h1>
          </div>
          <div className="col-md-1 m-2 py-4 border rounded text-success" onClick={handlePlay}>
            <h1>
              <FontAwesomeIcon icon={faPlay} id="play"/>
            </h1>
          </div>
          <div className="col-md-1 m-2 py-4 border rounded text-info" onClick={handlePause}>
            <h1>
              <FontAwesomeIcon icon={faPause} id="pause"/>
            </h1>
          </div>
          <div className="col-md-1 m-2 py-4 border rounded text-danger" onClick={handleReset}>
            <h1>
              <FontAwesomeIcon icon={faRotateLeft} id="restart"/>
            </h1>
          </div>
        </div>
    </div>
    )

    };

export default SecondsCounter;