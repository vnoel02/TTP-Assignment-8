import AppComponent from "./appComponent";
import SearchField from "./seachfield";

const RandomGifCard = (props) => {  
    console.log(props.data.images.fixed_height.url);

    return (
        <div id="display_gifCards">
            <img id="display_random" src = {props.data.images.fixed_height.url} alt="gif" autoPlay loop inline="true"></img>
            {/* <h1>{props.images.fixed_height.url}</h1> */}
        </div> 
        
        
    );

}

export default RandomGifCard;