import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const SecondsCounter = (props) => {
    return (
        <div className="container bg-dark">
            <div className="row text-center d-flex justify-content-center">
                <div className="col-md-1 m-2 py-4 border rounded text-white" id="clockIcon">
                    <h1><FontAwesomeIcon icon={faClock} /></h1>
                </div>
                <div className="col-md-1 m-2 py-4 border rounded text-white" id="clockIcon">
                    <h1>{Math.floor(props.number/100000 % 10)}</h1>
                </div>
                <div className="col-md-1  m-2 py-4 border rounded text-white" id="clockIcon">
                    <h1>{Math.floor(props.number/10000 % 10)}</h1>
                </div>
                <div className="col-md-1  m-2 py-4 border rounded text-white" id="clockIcon">
                    <h1>{Math.floor(props.number/1000 % 10)}</h1>
                </div>
                <div className="col-md-1 m-2 py-4 border rounded text-white" id="clockIcon">
                    <h1>{Math.floor(props.number/100 % 10)}</h1>
                </div>
                <div className="col-md-1  m-2 py-4 border rounded text-white" id="clockIcon">
                    <h1>{Math.floor(props.number/10 % 10)}</h1>
                </div>
                <div className="col-md-1  m-2 py-4 border rounded text-white" id="clockIcon">
                    <h1>{props.number % 10}</h1>
                </div>
            </div>
        </div>
    )
};

SecondsCounter.propTypes = {
    number: PropTypes.number
}

SecondsCounter.defaultProps = {
    number: 0
}

export default SecondsCounter;