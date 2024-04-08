import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "./Components/Create/Create";
import DeleteMovie from "./Components/DeleteMovie";
import Movies from "./Components/Movies/Movies";
import NavBar from "./Components/NavBar/NavBar";

function App(){
  return (
    <div>
  <BrowserRouter>
   <NavBar/>
   <Routes>
    <Route path="/movie-list" element={<Movies/>}/>
    <Route path="/create" element={<Create/>}/>
    <Route path="/DelteMovie" element={<DeleteMovie/>}/>

   </Routes>
   </BrowserRouter>
   </div>
  )
}
export default App;