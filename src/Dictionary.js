import React, {useState} from "react";
import "./dictionary.css"
import axios from "axios";
import { https } from "follow-redirects";

export default function DictionarySearch(){
    let [keyword, setKeyword]=useState("");
    
    function handleKeyword(event){

setKeyword(event.target.value);
    }

    function search(event){
event.preventDefault();

function handleResponse(response){
console.log(response.data[0]);
}

let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;    
axios.get(apiUrl).then(handleResponse);
}
    
    return (
        <div className="SearchBar">
            <form onSubmit={search}>
                <input type="search" onChange={handleKeyword}/>
            </form>
        </div>
    )
}