//just contain trending gifs on load as default
import SearchField from "./seachfield";
import GifCard from "./gifCard";
import React, {useState, useEffect} from 'react';
import axios from "axios";
const AppComponent = () => {
    const [trending, setTrending] = useState([]);
    useEffect(() => {
        async function fetchTrending() {
            try {
            const list = await axios.get("http://api.giphy.com/v1/gifs/trending?api_key=ATQhfET4go8lHY0DIzHYlQpeRtEYSttj&limit=5");
            setTrending(list.data.data);
            console.log(list);
            } catch (error) {
                console.error(error);
            }
        }
        fetchTrending();
    }, []);

    


    
    return (  
        <div>
            <div>
                <SearchField /> 
            </div>
            <div>
                {trending.map((trending) => {
                    return (
                        <div key= {trending.id} >
                        <img id="display" src = {trending.images.fixed_height.url} alt="gif" autoPlay loop inline="true"></img>
                        </div>
                    );
                    }
                )}
            </div> 
        </div>
    );


   // Idea: try to set a prop to put into searchField, output gifs of 

}

export default AppComponent;