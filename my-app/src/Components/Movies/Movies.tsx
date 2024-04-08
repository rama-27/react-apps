import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Movies() {
  interface Movies {
    Title: string;
    Year: string;
    Runtime: string;
    Poster: URL;
    id: string;
  }
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [moviesData, setMoviesData] = useState<Movies>([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/movies")
      .then((res) => {
        console.log(res);
        setMoviesData(res.data);
      })
      .catch((error) => {
        console.error("Page not found");

        setErrorMsg(error.message);
      });
  }, []);

  return (
    <div>
      {errorMsg}
      <div className="d-flex flex-column align-items-center">
        <h1>Movies List</h1>
        <div>
          <Link to="/create" className="btn btn-success mt-5 p-2 ">Add+</Link>
        </div>
        <div className="w-75 rounded shadow p-4">
          <table className="table ">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Title</th>
                <th scope="col">Poster</th>
                <th scope="col">Runtime</th>
                <th scope="col">Year</th>
                <th scope="col">Update</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {moviesData.map((movie) => (
                <tr>
                  <th scope="row">{movie.id}</th>
                  <td>{movie.Title}</td>
                  <td>
                    <img src={movie.Poster} alt="" width={100} height={150} />
                  </td>
                  <td>{movie.Runtime}</td>
                  <td>{movie.Year}</td>
                  <td className="justify-content-end">
                    <button className="btn btn-primary mt-5 p-2">Edit</button>
                  </td>
                  <td className="justify-content-end">
                    <Link to="/DelteMovie" className="btn btn-danger mt-5 p-2">Delete</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Movies;
