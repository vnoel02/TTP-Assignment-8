//Search Field
import React, {useState} from 'react';
import AppComponent from './appComponent';
import axios from 'axios';
import GifCard from './gifCard';

const SearchField = (props) => {
    // const [gifList, setGifList] = useState([]);
    // async function fetchGif(search) {
    //     try {
    //         const gifData = await axios.get("https://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=ATQhfET4go8lHY0DIzHYlQpeRtEYSttj&limit=5");
    //         const arr = gifData.data.data;
    //         console.log(arr);
    //         setGifList(arr);
    //         console.log(arr);
    //     } catch (error){
    //         console.error(error);
    //     } 
    // }
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     const search = event.target[0].value;
    //     fetchGif(search);
    //     // console.log(search);
    // }
    return (  
        <div>
               <h1> Giphy Search</h1>
            <form> 
                <input type="text"></input>
                <button type = "submit">Search</button>
            </form>
        </div>
    );         
}

// do something on submit of form
export default SearchField;
