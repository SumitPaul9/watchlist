import Card from "../../components/card/Card";
import { GlobalContext } from "../../context/GlobalState"

const WatchList = () => {

    const { watchlist } = useContext(GlobalContext);
    return (
        <div className="watchlist container">
            <div className="watchlist__header">
                <h1 className="watchlist__heading">My Watchlist</h1>
                <span className="watchlist__count">
                    {WatchList.length}
                </span>
            </div>

            { WatchList.length > 0 ? (
                <div className="watchlist__grid">
                    { watchlist.map((movie)=>{
                        <Card movie={ movie } key={movie.id} type="watchlist"/>
                    })}
                </div>
            ): (
                <h2 className="watchlist__empty">Your watchlist is empty.! Add some movies to watch!</h2>
            )}
        </div>
    )
}

export default WatchList
