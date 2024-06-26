import React from "react";
import '../../styles/contador.css';
import { FaRegClock } from "react-icons/fa";

const Contador = ({props}) => {

	console.log(props)
    return (
        <>
            <div className="d-flex flex-column justify-content-center align-items-center">
                <h1>Simple counter</h1>
                <div className="contador">
                    <FaRegClock />
                    {props}
                </div>
            </div>
        </>
    )

};

export default Contador;