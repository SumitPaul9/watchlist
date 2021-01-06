import './card.css'
import dayjs from 'dayjs';
import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';


const Card = (props) => {
    const {
        addMovieToWatchlist,
        addMovieToWatched,
        watchlist,
        watched
    } = useContext(GlobalContext);

    let storedMovie = watchlist.find((res)=> res.id === props.movie.id);
    let watchedMovie = watched.find((res)=> res.id === props.movie.id);

    const watchlistDisabled = storedMovie ? true : watchedMovie ? true : false;
    const watchedDisabled = watchedMovie ? true : false;

    return (
        <div className="card">
            <div className="card__img">
                <img
                    src={process.env.REACT_APP_API+`${props.movie.poster_path}`}
                    alt={props.movie.title}/>
            </div>
            <div className="card__info">
                <div className="card__header">
                    <h3 className="card__title">{props.movie.title}</h3>
                    <h4 className="card__date">{ dayjs(props.movie.release_date).format('YYYY')}</h4>
                </div>
                <div className="card__buttons">
                    <button 
                        className="btn"
                        disabled={watchlistDisabled}
                        onClick={()=> addMovieToWatchlist(props.movie)}>
                        Add to Watchlist
                    </button>
                    <button 
                        className="btn"
                        disabled={watchedDisabled}
                        onClick={()=>addMovieToWatched(props.movie)}>
                        Add to Watched
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card
