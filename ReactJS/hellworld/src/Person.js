import React from 'react';
import './Person.css'
// dùng kiểu class
class Person extends React.Component{
    constructor(props){
        super(props);
        this.firstName ="Nguyen";
    }
    render(){
        return(
            <div className="person">
                <h1>
                Full name: {this.firstName}
            </h1>
            <h1>Last name : {this.props.lastName}</h1>
                <p> age : {this.props.age}</p>
                <p>year of birth: {new Date().getFullYear() - this.props.age}</p>
            </div>
        );
    }
}
// Dùng kiểu function
function Person2(props){
    return(
        <div className='person'>
              <h1>
                Full name:  {props.firstName}
            </h1>
            <h1>Last name : </h1>
                <p> age : 25</p>
        </div>
    );

}
const exporting = {Person, Person2};
export default exporting;