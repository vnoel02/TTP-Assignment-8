//just contain trending gifs on load as default
import SearchField from "./seachfield";
import Gif_Load from "./gif_load";
import RandomGif_Load from "./randomgif_load";
import "./appComponent";

import React, {useState, useEffect} from 'react';
import axios from "axios";
const AppComponent = (props) => {
    const [trending, setTrending] = useState([]);
    const [search, setSearch] = useState([]);
    const [random, setRandom] = useState({});

    // Fetchs and 'loads' trending images
    useEffect(() => {
        async function fetchTrending() {
            try {
            const list = await axios.get("http://api.giphy.com/v1/gifs/trending?api_key=ATQhfET4go8lHY0DIzHYlQpeRtEYSttj&limit=50");
            setTrending(list.data.data);
            setSearch([]);
            setRandom({});
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
            const gifData = await axios.get("https://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=ATQhfET4go8lHY0DIzHYlQpeRtEYSttj&limit=50");
            const arr = gifData.data.data;
            console.log(arr);
            setSearch(arr);
            setTrending([]);
            setRandom({});
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

    // On click fetch random gif data
    async function fetchRandom() {
        try {
            const gifData = await axios.get("http://api.giphy.com/v1/gifs/random?api_key=ATQhfET4go8lHY0DIzHYlQpeRtEYSttj");
            setRandom(gifData.data.data);
            console.log(gifData);
            setTrending([]);
            setSearch([]);
        } catch (error){
            console.error(error);
        } 
    }
    //Displays search form
    return ( 
        <div className="header">
            <div>
                <h1 id="title"> Giphy Search </h1>
                <form id="searchfield" onSubmit={handleSubmit}> 
                    <label id="search-disc"> Search for a GIF</label>
                    <input type="text"></input>
                    <button type = "submit">Search</button>
                    
                </form>
                <button onClick= {fetchRandom}> Randomize Gif</button>
            </div>
             
                <Gif_Load data={search} />
                <Gif_Load data={trending} />
                {random.url? <RandomGif_Load data={random} /> : "" }
           
        </div>
    );
}

export default AppComponent;