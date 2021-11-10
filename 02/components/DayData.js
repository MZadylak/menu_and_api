import React from 'react';

const DayData = ({ date, humidity, temp }) => {

    return (
        <li className="main__elements">
            <h3 className="main__elements-child">Prognoza na dzień</h3>
            <h4 className="main__elements-child">{ date }</h4>
            <p className="main__elements-child">Temperatura: { temp }°C - Wilgotność: { humidity }%</p>
        </li>
    );
};

export default DayData;