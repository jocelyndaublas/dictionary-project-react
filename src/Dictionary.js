import React, {useState} from "react";
import "./dictionary.css"

export default function DictionarySearch(){
    let [keyword, setKeyword]=useState("");
    
    function handleKeyword(event){

setKeyword(event.target.value);
    }
    function search(event){
event.preventDefault();
alert(`Searching for ${keyword}`);
    }
    
    return (
        <div className="SearchBar">
            <form onSubmit={search}>
                <input type="search" onChange={handleKeyword}/>
            </form>
        </div>
    )
}