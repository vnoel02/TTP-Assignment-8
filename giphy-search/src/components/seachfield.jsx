//Search Field
import React, {useState} from 'react';
import appComponent from './appComponent';
import axios from 'axios';

const SearchField = (props) => {
    const [gifList, setGifList] = useState([]);
    async function fetchGif(search) {
        try {
            const gifData = await axios.get("https://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=ATQhfET4go8lHY0DIzHYlQpeRtEYSttj&limit=5");
            const arr = gifData.data.data;
            console.log(arr);
            setGifList(arr);
            console.log(arr);
        } catch (error){
            console.error(error);
        } 
    }
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
                {gifList.map((gif) => {
                    return (
                        <div key= {gif.id} >
                        
                        <img id="display" src = {gif.images.fixed_height.url} alt="gif" autoPlay loop inline="true"></img>
                        </div>
                    );
                    
                    }
                )}
            </div> 
        </div>
    );
            
            
            
}

// do something on submit of form
export default SearchField;
