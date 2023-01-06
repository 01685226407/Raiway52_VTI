import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableHeader';

class Table extends React.Component {
  render(){
   
    return (
      <table>
        <TableHeader />
         <TableBody list= {this.props.list}/>
      </table>
        );
  }
    
}
export default Table;
