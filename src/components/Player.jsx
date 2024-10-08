export const Player=({fn,song})=>{
    return(<div>
        <button onClick={()=>{
            fn(false,null);
        }}className="btn btn-danger">BACK TO SONGS</button>
        <p class="text-light">
            <img src={song.artworkUrl100} alt="song name"/>
            <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTh2bmgzODM5dXN5dXRkdTFndzIya29xMGgyZjZ3M2VubzNnNDQwaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/1bG7bbKHn8Rtm5FOdO/giphy.gif" alt="music gif" />

            <br/>
            <h6>ARTIST NAME :{song?.artistName}</h6> 
            <h6>TRACK NAME :{song?.trackName}</h6>
        </p>
        
        
        <br/>
        <br/>
    <audio controls>
        <source src={song?.previewUrl} type="audio/mp4"/>
        your browser does not support the audio element.
    </audio>
    </div>)
}