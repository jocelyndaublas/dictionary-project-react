import React, {useState} from "react";
import "./dictionary.css"
import axios from "axios";
import Results from "./Results";


export default function DictionarySearch(){
    let [keyword, setKeyword]=useState("");
    let [results, setResults]=useState("");
    
    function handleKeyword(event){
       setKeyword(event.target.value);
    }

    function search(event){
event.preventDefault();

function handleResponse(response){
setResults(response.data[0]);
}

let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;    
axios.get(apiUrl).then(handleResponse);
}
    
    return (
        <div className="SearchBar">
            <form onSubmit={search}>
                <input type="search" onChange={handleKeyword}/>
            </form>
            <Results results={results}/>
        </div>
    );  
}