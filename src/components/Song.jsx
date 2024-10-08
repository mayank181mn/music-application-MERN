import {useState} from "react"
export const Song=({fn,song})=>{
    console.log(Song)
    const [playerFlag, setPlayerFlag]=useState(false);
    const showPlayer=()=>{
         
     fn(true,song);
     
    }
    return (<div class="p-3 mb-2 bg-warning text-white whiteborder">
    <div className='row'>
        <div className='col-4'>
            <img src = {song.artworkUrl100}/></div>
            <div className='col-4'>
            <p class="text-primary">
               <h6>ARTIST NAME : {song.artistName} </h6>
               <h6>TRACK NAME :{song.trackName} </h6>
               </p>
            </div>
            
            <div className='col-4'>
                <button onClick={showPlayer}className="btn btn-outline-danger">PLAY SONG</button>
                </div>
            </div>
            </div>)
}