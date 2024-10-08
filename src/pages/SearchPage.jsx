// import {Search} from "../components/Search"
// import {Songs} from "../components/Songs"
// import {getSongs} from "../services/api-client"
// import {useEffect,useState} from "react";
// import {Player} from "../components/Player"
// import {Link} from 'react-router-dom'

// export const SearchPage =()=>{
//     const [allSongs,setSongs] = useState([]);
//     const [flag,setFlag]= useState(false);
//     const [song,setplayerSong] =useState(null);
//     const loadSongs=async()=>{
//         setSongs(await getSongs('Latest Songs'));
//     }
//     useEffect(()=>{
//         loadSongs();
        

//     },[])
//     const togglePlayer=(flag,songArg)=>{
//         setplayerSong(songArg);
//         setFlag(flag);

//     }
//     const getArtistName = async (artistName)=>{
       
//         console.log("rec artist name",artistName)
//        setSongs(await getSongs(artistName));

//     }
//     const jsx=<> <Search fn={getArtistName}/>
//     <Songs fn = {togglePlayer} allSongs={allSongs}/></>;
//     return(<div className="container">
        

        
//         {/* <h1 class="name" className="alert alert-dark text-center bs-light-border-subtle"><i class="fa-solid fa-music"></i> BEATBUDDY<i class="fa-solid fa-music"></i></h1> */}
//         <div class="name"> 
        
//         <div class="logoanimation"><i class="fa-solid fa-music"></i> </div>
//         <pre> <b class="beatbuddy">BEATBUDDY</b> </pre>
//         <div class="logoanimation"><i class="fa-solid fa-music"></i></div>
//         {/* <button class="login whiteborder">
//         <Link className="nav-link" to="/login">LOGIN</Link>
        
//         </button>
//         <button class="login whiteborder">
        
//         <Link className="nav-link" to="/login">SIGNUP</Link>
//         </button> */}
//         <li class="nav-item active">
//         <Link className="nav-link" to="/login">LOGIN</Link>
        
//       </li>
//       <li class="nav-item">
//       <Link className="nav-link" to="/login">SIGNUP</Link>
       
//       </li>
        
        

//         </div>
        
       
//         {flag?<Player fn={togglePlayer} song={song}/>:jsx}
       
//     </div>)
    
// }
// import { Search } from "../components/Search";
// import { Songs } from "../components/Songs";
// import { getSongs } from "../services/api-client";
// import { useEffect, useState } from "react";
// import { Player } from "../components/Player";
// import { Link } from "react-router-dom";

// export const SearchPage = () => {
//   const [allSongs, setSongs] = useState([]);
//   const [flag, setFlag] = useState(false);
//   const [song, setplayerSong] = useState(null);

//   const loadSongs = async () => {
//     setSongs(await getSongs("Latest Songs"));
//   };

//   useEffect(() => {
//     loadSongs();
//   }, []);

//   const togglePlayer = (flag, songArg) => {
//     setplayerSong(songArg);
//     setFlag(flag);
//   };

//   const getArtistName = async (artistName) => {
//     console.log("rec artist name", artistName);
//     setSongs(await getSongs(artistName));
//   };

//   const jsx = (
//     <>
//       <Search fn={getArtistName} />
//       <Songs fn={togglePlayer} allSongs={allSongs} />
//     </>
//   );

//   return (
//     <div className="container">
//       <div className="navbar">
//         <div className="logoanimation">
//           <i className="fa-solid fa-music"></i>
//         </div>
//         <pre>
//           <b className="beatbuddy">BEATBUDDY</b>
//         </pre>
//         <div className="logoanimation">
//           <i className="fa-solid fa-music"></i>
//         </div>

//         <div>
//           <Link className="btn login" to="/login">
//             LOGIN
//           </Link>
//           <Link className="btn signup" to="/signup">
//             SIGNUP
//           </Link>
//         </div>
//       </div>

//       {flag ? <Player fn={togglePlayer} song={song} /> : jsx}
//     </div>
//   );
// };
import { Search } from "../components/Search";
import { Songs } from "../components/Songs";
import { getSongs } from "../services/api-client";
import { useEffect, useState } from "react";
import { Player } from "../components/Player";
import { Link ,useNavigate} from "react-router-dom";

export const SearchPage = () => {
  const [allSongs, setSongs] = useState([]);
  const [flag, setFlag] = useState(false);
  const [song, setplayerSong] = useState(null);

  const loadSongs = async () => {
    try {
      const songs = await getSongs("Latest Songs");
      setSongs(songs);
    } catch (error) {
      console.error("Failed to load songs", error);
    }
  };

  useEffect(() => {
    loadSongs();
  }, []);

  const togglePlayer = (flag, songArg) => {
    setplayerSong(songArg);
    setFlag(flag);
  };

  const getArtistName = async (artistName) => {
    console.log("rec artist name", artistName);
    try {
      const songs = await getSongs(artistName);
      setSongs(songs);
    } catch (error) {
      console.error("Failed to get songs by artist", error);
    }
  };

  const jsx = (
    <>
      <Search fn={getArtistName} />
      <Songs fn={togglePlayer} allSongs={allSongs} />
    </>
  );
  const navigate=useNavigate()
  const handleLogout=()=>{
localStorage.removeItem("authToken")
navigate("/")
  }

  return (
    <div className="container">
      {/* Navbar */}
      <div className="navbar">
        <div className="logoanimation">
          <i className="fa-solid fa-music"></i>
        </div>
        <pre>
          <b className="beatbuddy">BEATBUDDY</b>
        </pre>
        <div className="logoanimation">
          <i className="fa-solid fa-music"></i>
        </div>
        

        {(!localStorage.getItem("authToken"))?
        
        <div className="auth-buttons">
          <Link className="btn login" to="/login">
            LOGIN
          </Link>
          <Link className="btn signup" to="/createuser">
            SIGNUP
          </Link>
        </div>
        :
        <div className="auth-buttons">
          <div className="btn bg-white text-success mx-2" onClick={handleLogout} >
            LOGOUT
          </div>
          
        </div>
        
        
        }
        
      </div>

      {/* Songs and Player */}
      {flag ? <Player fn={togglePlayer} song={song} /> : jsx}
    </div>
  );
};

