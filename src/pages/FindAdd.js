import React, {useState, useEffect} from "react";
import {SearchInput} from "../components/SearchInput"
import {MediaScroller} from "../components/MediaScroller"



export function FindAdd()
{

const [movies, setMovies] = useState([])
const [searchValue, setSearchValue] =useState("")

const getMovie=async()=>{
    const URL = `http://www.omdbapi.com/?s=${searchValue}&apikey=2b8195cf`
    const response = await fetch(URL)
    const responseJSON = await response.json()
    if(responseJSON.Search)
    {
        console.clear()
        setMovies(responseJSON.Search)
        console.log(responseJSON.Search)
    }
}

useEffect(()=>{
    getMovie()
}, [searchValue])



    return(
        <div className="FindAdd-page">
        <SearchInput searchValue={searchValue} setSearchValue={setSearchValue}></SearchInput>
<MediaScroller movies={movies}></MediaScroller>
        </div>
    )
}

export default FindAdd