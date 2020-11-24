import React from 'react';
import './States.css';
import Header from "../header/header"



/**
 * Define States, a React componment of CS142 project #4 problem #2.  The model
 * data for this view (the state names) is available
 * at window.cs142models.statesModel().
 */
class States extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list : window.cs142models.statesModel(),
      searchField : ""
    }
  }
  
  handleChange = (e) => {
    this.setState({searchField: e.target.value }) 
  }
  render() {
 
    const { list, searchField } = this.state
    const filteredList = list.filter(el =>
      el.toLowerCase().includes(searchField))
    return (
      <div>
        <Header />
        <div className="container"> 

        <div className="search">
            <input type="text" name="input" className="searchbox"
        onChange={this.handleChange}/>
            
        </div>

          <div className="list">
               {filteredList.map(
                   el=> <h2 key={el}> {el} </h2>
                )}
          </div>

        
      </div>
      </div>
      
    );
  }
}

export default States;