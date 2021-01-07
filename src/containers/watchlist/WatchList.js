import { useContext } from "react";
import WatchCard from "../../components/watchcard/WatchCard";
import { GlobalContext } from "../../context/GlobalState"

const WatchList = () => {

    const { watchlist } = useContext(GlobalContext);
    // console.log(watchlist)
    return (
        <div className="watchlist container movie__page">
            <div className="watchlist__header">
                <h1 className="watchlist__heading heading">My Watchlist</h1>
                {/* <span className="watchlist__count">
                    {watchlist.length}
                </span> */}<div></div>
            </div>

            { watchlist.length > 0 ? (
                <div className="movie__grid">
                    { watchlist.map((movie)=>(
                        <WatchCard movie={ movie } key={movie.id} type="watchlist"/>
                    ))}
                </div>
            ): (
                <h2 className="watchlist__empty">Your watchlist is empty.! Add some movies to watch!</h2>
            )}
        </div>
    )
}

export default WatchList
