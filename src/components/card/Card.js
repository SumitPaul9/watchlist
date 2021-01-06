import './card.css'
import dayjs from 'dayjs';
const Card = (props) => {
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
                    <button className="btn">
                        Add to Watchlist
                    </button>
                    <button className="btn">
                        Add to Watched
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card
