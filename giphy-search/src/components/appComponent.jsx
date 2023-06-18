//just contain trending gifs on load as default
import SearchField from "./seachfield";
import GifCard from "./gifCard";
import {fetchGif} from "./seachfield";
import React, {useState, useEffect} from 'react';
import axios from "axios";
const AppComponent = (props) => {
    const [trending, setTrending] = useState([]);
    const [search, setSearch] = useState([]);
    // const [term, setTerm] = useState("");


    // Fetchs and 'loads' trending images
    useEffect(() => {
        async function fetchTrending() {
            try {
            const list = await axios.get("http://api.giphy.com/v1/gifs/trending?api_key=ATQhfET4go8lHY0DIzHYlQpeRtEYSttj&limit=10");
            setTrending(list.data.data);
            console.log(list);
            } catch (error) {
                console.error(error);
            }
        }
        fetchTrending();
    }, []);

    // Fetches gifs based on search, changes state of trending gifs so they are no longer displayed
    async function fetchSearch(search) {
        try {
            const gifData = await axios.get("https://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=ATQhfET4go8lHY0DIzHYlQpeRtEYSttj&limit=10");
            const arr = gifData.data.data;
            console.log(arr);
            setSearch(arr);
            setTrending([]);
        } catch (error){
            console.error(error);
        } 
    }
 
    // On click of the submit button, takes input to use in giphy API
    const handleSubmit = (event) => {
        event.preventDefault();
        const search = event.target[0].value; //updates search state
        fetchSearch(search);
        console.log(search);
    }
    
    return ( 
        <div>
            <div>
                {/* <SearchField  onSubmit={handleSubmit}/> */}
                <h1>Giphy Search</h1>
                <form onSubmit={handleSubmit}> 
                    <label>Search</label>
                    <input type="text"></input>
                    <button type = "submit">Search</button>
                </form>
                <div>
                    
                </div> 
                
            </div>
            <div>
                {/* if clicked display search, if not display trending */}
                {/* {isClicked? (<GifCard data={search}/>):(<GifCard data={trending} />)} */}
                <GifCard data={search} />
                <GifCard data={trending} />
            
            </div> 
        </div>
    );
}

export default AppComponent;