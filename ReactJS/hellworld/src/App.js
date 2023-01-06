import React from 'react';
import './App.css';
import Table from './Table';
class App extends React.Component {
  constructor(props){
    super(props);
    this.data = [
      {
        language : "PHP",
        framwork :" Laravel"
      },
      {
        language : "Android",
        framwork :" webkit"
      },
      {
        language : "Java",
        framwork :" Meteor "
      } 
    ];
  }
  render(){
    return (
      <Table list={this.data}/>
      );
  }
    
}
export default App;
