import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import './controlbuttons.css';
//import { fa-} from '@fortawesome/fontawesome-free';

const ControlButtons = ({movie, type}) => {
   const {
       removeMovieFromWatchlist,
       addMovieToWatched,
       moveToWatchlist,
       removeFromWatched
   } = useContext(GlobalContext);
    return (
        <div className="control">
            { type === "watchlist" && (
                <>
                    <button className="control__buttons" onClick={()=> addMovieToWatched(movie)}>
                        <i className="fa-fw fa fa-eye"></i>
                    </button>
                    <button className="control__buttons" onClick={()=> removeMovieFromWatchlist(movie.id)}>
                        <i className="fa-fw fa fa-times"></i>
                    </button>
                </>
            )}

            { type === "watched" && (
                <>
                    <button className="control__buttons" onClick={()=>moveToWatchlist(movie)}>
                        <i className="fa-fw fa fa-eye-slash"></i>
                    </button>
                    <button className="control__buttons" onClick={()=>removeFromWatched(movie.id)}>
                        <i className="fa-fw fa fa-times"></i>
                    </button>
                </>
            )}
        </div>
    )
}

export default ControlButtons
