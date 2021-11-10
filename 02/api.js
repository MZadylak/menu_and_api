import React from 'react';

class Api extends React.Component {
    constructor(name, props) {
        super(props);
        this.key = '0d91960750c9bab8cbdc4fc7922fb236';
        this.link = `https://api.openweathermap.org/data/2.5/forecast?q=${name}&appid=${this.key}&units=metric`;
    }

    async getApi () {
        try {
            const request = await fetch(this.link);
            if(request.ok) {
                const response = await request.json();
                const { list } = response;
                const elements = list.map(el => {
                    const { dt_txt: date, main: { humidity, temp }} = el;
                    return { date, humidity, temp };
                })
                return elements;
            }
            return Promise.reject('Invalid address!');
        }
        catch(err) {
            console.error('Unexpected error', err);
        }
    }
}

export default Api;