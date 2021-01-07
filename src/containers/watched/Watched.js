import { useContext } from "react"
import WatchCard from "../../components/watchcard/WatchCard";
import { GlobalContext } from "../../context/GlobalState"

const Watched = () => {
    const {watched} = useContext(GlobalContext);
    return (
        <div className="watched container movie__page">
            <div className="watched__header">
                <h1 className="watched__heading heading">Watched Movies</h1>
            </div>
            { watched.length > 0 ? (
                <div className="movie__grid">
                    { watched.map((movie)=>(
                     <WatchCard movie={movie} key={movie.id} type="watched"/>   
                    ))}
                </div>
            ): (
                <h2>You have nothing in your watchlist! Please Add some!</h2>
            )}
        </div>
    )
}

export default Watched
