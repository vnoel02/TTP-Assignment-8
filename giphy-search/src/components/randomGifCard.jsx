import AppComponent from "./appComponent";
import SearchField from "./seachfield";

const RandomGifCard = (props) => {  
    console.log(props.data.images.fixed_height.url);

    return (
        
        <img className="random" src = {props.data.images.fixed_height.url} alt="gif" autoPlay loop inline="true"></img>
            
        
        
        
    );

}

export default RandomGifCard;