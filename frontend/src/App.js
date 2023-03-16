import React, { useState, useEffect } from 'react';
import { Player } from './components/Player';


function getData(endpoint, setState) {
    fetch(endpoint)
        .then(res => res.json())
        .then(data => setState(data))
        .catch(err => console.error(err));
}

function App() {
    const testplayername = 'Elias Pettersson'.replace(/ /g,'%20');
    const [player, setPlayer] = useState([]);
    const [allPlayers, setAllPlayers] = useState([]);
    
    useEffect(() => getData('http://localhost:3030/players/'+testplayername, setPlayer), []);
    useEffect(() => getData('http://localhost:3030/players', setAllPlayers), []);

    const listItems = allPlayers.map(player =>
        <Player key={player._id} player={player}/>
    )

    return (
        <div>
            <h1>Select Player: {player.name}</h1>
            <ul><Player player={player}/></ul>

            <h1>All Hockey Players In Endpoint</h1>
            <ul>{listItems}</ul>
        </div>
    );
}

export default App;
