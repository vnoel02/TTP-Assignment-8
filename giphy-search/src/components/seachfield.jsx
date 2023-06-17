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
            const arr = gifData.data.data;
            console.log(arr);
            arr.length -= 45;
            setGifList(arr);

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
            <img src="https://giphy.com/gifs/g1ft3d-art-glitch-apple-bfrlODgSLqXxS" alt="gif"></img>

                {/* {gifList.map((gif) => {
                    return (
                        
                        
                        // <div key= {gif.id} >
                        // <img src = {gif.url} alt="gif"></img>
                        // </div>
                    );
                    
                    }
                )} */}
            </div> 
        </div>
    );
            
            
            
}

// do something on submit of form
export default SearchField;
