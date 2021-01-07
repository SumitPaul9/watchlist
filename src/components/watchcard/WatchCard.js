import ControlButtons from '../control buttons/ControlButtons'
import './watchcard.css'

const WatchCard = ({movie, type}) => {
    return (
        <div className="watchcard">
            <div className="overlay"></div>
            <img
                src={process.env.REACT_APP_API+`${movie.poster_path}`}
                alt={`${movie.title} Poster`}
            />
            <ControlButtons type={type} movie={movie} />
        </div>
    )
}

export default WatchCard
