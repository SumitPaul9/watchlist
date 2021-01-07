import './watchcard.css'
const WatchCard = ({movie}) => {
    return (
        <div className="watchcard">
            <div className="overlay"></div>
            <img
                src={process.env.REACT_APP_API+`${movie.poster_path}`}
                alt={`${movie.title} Poster`}
            />
        </div>
    )
}

export default WatchCard
