import { useState } from "react";
import Card from "./components/Card";
import Search from "./components/Search";
import movies from "./data/movies"

function App() {

  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [data, setData] = useState(movies)

  return (
    <>
      <Search dateFrom={dateFrom} setDateFrom={setDateFrom} dateTo={dateTo} setDateTo={setDateTo} setData={setData} data={data} />
      <div className="movielist_parent">
        {
          data.map((movie) => (
            <Card {...movie} key={movie.date} />
          ))
        }
      </div>
    </>
  )
}

export default App
