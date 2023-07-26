import React, { useEffect, useState } from "react";
import axios from "axios";
import "./movie.css";





const Movie = () => {
    const [movies, setMovies] = useState([]);
    const [showNumber, setNumber] = useState(1)
    const loading = async () =>{
        setNumber(prevState => prevState+1)
        try {
            const apiKey = "78f08357";
            const response = await axios.get(
                `http://www.omdbapi.com/?s=movie&apikey=${apiKey}&type=movie&r=json&page=${showNumber}`
            );
            console.log(response.data)
            const movies = response.data.Search;
            setMovies(prevState => [...prevState,...movies]);
        } catch (error) {
            console.error("Ошибка", error);
        }

    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const apiKey = "78f08357";
                const response = await axios.get(
                    `http://www.omdbapi.com/?s=movie&apikey=${apiKey}&type=movie&r=json`
                );
                console.log(response.data)
                const movies = response.data.Search;
                setMovies(movies);
            } catch (error) {
                console.error("Ошибка", error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
        <div className="Movie">
            {movies.map((movie) => (
                <div key={movie.imdbID} className="MovieCard">
                    <img src={movie.Poster} alt={movie.Title} />
                    <p>{movie.Title}</p>
                </div>
            ))}

        </div>
    <div className="button_loading" onClick={() => loading()}>Загрузить еще</div>
            </>
    );
};

export default Movie;