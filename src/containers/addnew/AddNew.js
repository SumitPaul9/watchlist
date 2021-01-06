import Axios from "axios";
import './addnew.css';
import { useState } from "react";
import Card from "../../components/card/Card";

const AddNew = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const onChange = async(e) =>{
        try {
            e.preventDefault();
            setQuery(e.target.value);
            const res = await Axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`);
            setResults(res.data.results);
            console.log(results)
        } catch (error) {
            console.log(error.message);
        }
    }
    return (
        <div className="addnew container">
            <div className="addnew__content">
                <div className="addnew__input">
                    <input
                        type="text"
                        placeholder="Search for a movie"
                        value={query}
                        onChange={onChange}/>
                        
                </div>

                { results.length > 0 ? (
                    <div className="addnew__results">
                       <ul>
                            { results.map((movie)=>(
                                <li key={ movie.id }>
                                    <Card movie={movie}/>
                                </li>
                                
                            ))}
                        </ul>
                    </div>
                ): (<h3>Nothing found. Search again</h3>)}
                
            </div>
        </div>
    )
}

export default AddNew
