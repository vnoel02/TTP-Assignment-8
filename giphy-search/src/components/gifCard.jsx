//Displays gifs, props change be condition but by default, trending gifs are loaded first
import AppComponent from "./appComponent";
import SearchField from "./seachfield";

const GifCard = (props) => {
    
    return (
        <div>
            {props.data.map((gif) => {
                // console.log(gif.images)
                return (
                    <div key= {gif.id} >
                    <img id="display" src = {gif.images.fixed_height.url} alt="gif" autoPlay loop inline="true"></img>
                    </div>
                );
            }
        )}
        </div> 
        
        
    );

}

export default GifCard;