import React, {useState, useEffect} from 'react';
import appComponent from './appComponent';
import axios from 'axios';

const SearchField = () => {
    const [gifList, setGifList] = useState([]);
    // useEffect(() => {
    async function fetchGif(search) {
        try {
            const gifData = await axios.get("https://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=ATQhfET4go8lHY0DIzHYlQpeRtEYSttj");
            // console.log(gifData.data.data[0].url);
            // const loneGifData = gifData.data.data[0].url;
            setGifList(gifData.data.data.url);
            console.log(gifList);
        } catch (error){
            console.error(error);
        }
    }

    
// }, [])
    
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const search = event.target[0].value;
        fetchGif(search);
        // console.log(search);
    }
    return (
        
        <div>
            <h1>Giphy Search</h1>
            <form onSubmit={handleSubmit}> 
                <label>Search</label>
                <input type="text"></input>
                <button type = "submit">Search</button>
            </form>
            <div>
                {/* {gifList.map((gif) => {
                    return <p key={gif.url}></p>}
                )}; */}
            </div>
            
        </div>

    );
}
// do something on submit of form
export default SearchField;
