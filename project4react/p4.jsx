import React from 'react';
import React from 'react';
import ReactDOM from 'react-dom';

import Card from './components/card/card';
function Card (){

}
function App() {
  return (
    <BrowserRouter>
    <Header/>
    
     
    <Route path="/" exact>
   
    </Route>

    <Route path="/example">
      <Example />
    </Route>
    <Route path="/states" >
      <States />
    </Route>

    </BrowserRouter>
  );
}

ReactDOM.render(
<App/>,
  document.getElementById('reactapp'),
);
