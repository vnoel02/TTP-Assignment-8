//Displays gifs, props change be condition but by default, trending gifs are loaded first
const Gif_Load = (props) => {
        return (
            <div className="gif-container">
                {props.data.map((gif) => {
                    return (
                        
                        <img key={gif.id} className="gif"src = {gif.images.fixed_height.url} alt="gif" autoPlay loop inline="true"></img>
                        
                    );
                }
            )}
            </div> 
        );
}

export default Gif_Load;