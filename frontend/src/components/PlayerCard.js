function PlayerCard({ playerData })
{
    const cardStyle ={
        boxShadow: '0 0 0 1px rgba(10, 10, 10, 0.1), 0 2px 6px rgba(10, 10, 10, 0.2)',
        height: '535px'
    };
    
    return (
        <div className="card" style={cardStyle}>
            <div className="card-image">
                <figure className="image is-1by1">
                    <img alt-text={playerData.name} src={playerData.image} />
                </figure>
            </div>
            <div className="card-content">
                <div className="media-content">
                    <p className="title is -4">{playerData.name}</p>
                    <p className="subtitle is-4">Number: {playerData.number} <br></br>
                                                Position: {playerData.position} <br></br>
                                                Age: {playerData.age} <br></br>
                                                Team: {playerData.team} <br></br>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default PlayerCard;
