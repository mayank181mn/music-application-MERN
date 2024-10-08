import {useRef} from "react";
export const Search = ({fn})=>{
    const artist = useRef();
    return (
     <>  
    
     
     <div class="p-3 bg-dark mb-2  text-light whiteborder">
     <label><b>Artist Name/Song Name</b></label>
     

    <input ref={artist} type='text' className="form-control" placeholder='Type to Search'/>
    <div class="searchit"><button className="btn btn-outline-danger" onClick={()=>{
        fn(artist.current.value)
    }}>SEARCH IT</button>
    </div>
    
    </div>
    
    
    </> 
    );
}