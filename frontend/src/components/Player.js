const Player = ({ player }) => {
    const listItems = 
        <li>
            <img src={player.image} />
            <p>Name: {player.name}</p>
            <p>Number: {player.number}</p>
            <p>Position: {player.position}</p>
            <p>Age: {player.age}</p>
            <p>Team: {player.team}</p>
        </li>
    return (
        <div>
            <ul>{listItems}</ul>
        </div>
    )
}

export { Player }
