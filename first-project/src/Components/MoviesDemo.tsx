import axios from "axios";
import { useEffect, useState } from "react";

export default function MoviesDemo() {
    interface Movie{
        Title:string;
        Year: number;
        Runtime:string;
        Poster:string;
    }
    const [errorMsg,setErrorMsg]=useState<string>("");
    const [moviesData, setMoviesData] = useState<Movie>([]);
    useEffect(() => {
        axios.get("https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies").then((res) => {
          console.log(res);
          setMoviesData(res.data);
        }).catch(error=>{console.error("Page not found")
        
        setErrorMsg(error.message)
    }
        )
      }, []);
    return (
        <div className="m-2 p-3 bg-secondary">
        {errorMsg}
      <table className="table border border-2 border-dark ">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Year</th>
            <th scope="col">Runtime</th>
            <th scope="col">Poster</th>
          </tr>
        </thead>
        <tbody>
          {moviesData.map((movie) => (
            <tr>
              <th scope="row">{movie.Title}</th>
              <td>{movie.Year}</td>
              <td>{movie.Runtime}</td>
              <td>
              
              <img src={movie.Poster} alt="yo" width={100}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  
  );
}
