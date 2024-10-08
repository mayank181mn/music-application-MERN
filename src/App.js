// import {SearchPage} from './pages/SearchPage';
// import './App.css';

// function App() {
//   return (
//     <SearchPage/>
//   );
// }

// export default App;

import {  BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { SearchPage } from './pages/SearchPage';
import './App.css';
import Signup from './pages/Signup'
import  Login  from './pages/Login';

function App() {
  return (
    <Router>
    <div>
      <Routes>
        <Route exact path="/" element ={<SearchPage/>}/>
              <Route exact path="/createuser" element ={<Signup />}/>
              <Route exact path="/login" element ={<Login />}/>
      </Routes>
      {/* <SearchPage /> */}
      </div>
    </Router>
  );
}

export default App;

