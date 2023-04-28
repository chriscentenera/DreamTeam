import 'bulma/css/bulma.css'

import React, { useState, useEffect } from 'react';
import PlayerCard from './components/PlayerCard';

function getData(endpoint, setState) {
    fetch(endpoint)
        .then(res => res.json())
        .then(data => setState(data))
        .catch(err => console.error(err));
}

function App() {
    const [allPlayers, setAllPlayers] = useState([]);

    useEffect(() => getData('http://localhost:3030/players', setAllPlayers), []);

    const listItems = allPlayers.map(player =>
        <div className="column is-one-quarter"> 
            <PlayerCard key={player._id} playerData={player}/> 
        </div>
    )

    return (
        <div className="container">
            <section className="section">
                <div className="columns is-multiline">
                    {listItems}
                </div>
            </section>
        </div>
    );
}

export default App;
