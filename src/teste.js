import React, { useState, useEffect } from 'react';
import axios from 'axios';

const options = {
    method: 'GET',
    url: 'https://imdb8.p.rapidapi.com/title/get-images',
    params: { tconst: 'tt0944947', limit: '25' },
    headers: {
        'x-rapidapi-key': '8514eccf85msh27d65f66cca5069p10013djsn78dabbfac7fc',
        'x-rapidapi-host': 'imdb8.p.rapidapi.com'
    }
};

export default function App() {

    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.request(options).then((response) => {
            setItems(response.data.images);
            // console.log(response.data.images);
        }).catch(function (error) {
            console.error(error);
        });
    }, []);

    return (
        <React.Fragment>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        {console.log(item.url)}
                    </li>
                ))}
            </ul>
        </React.Fragment>
    );
}