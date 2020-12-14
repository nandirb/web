import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Boba from './boba/Boba'
import CreateUser from "./create-user/create-user";
import Navbar from "./navbar/navbar"
import './App.css'
function App() {
  return (
    <Router>
<div className="App">
<Navbar />
<Route path="/" exact component={Boba} />
<Route path="/user" component={CreateUser} />
<Route path="/orders"  component={Boba} />
</div>
</Router>
  );
}

export default App;
