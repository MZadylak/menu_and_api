import React, { useEffect, useState } from 'react';
import Api from '../api';
import DayData from './DayData';

const City = ({ name }) => {
    const [elements, setElements] = useState('');

    const getData = () => {
        const api = new Api(name);
        const data = api.getApi();
        data.then(el => {
            setElements(value => {
                const newValue = [...value, ...el];
                return newValue;
            });
        });
    };

    useEffect(() => {
        getData();
        const id = setInterval(() => {
            setElements([]);
            getData();
        }, 10000);
        return () => clearInterval(id);
    }, []);
    const list = [...elements].map((day, i) => <DayData key={ i } { ...day } />);

    return (
        <ul className="main__list">
            <h2 className="main__title">{ name }</h2>
            { list }
        </ul>
    );
};

export default City;