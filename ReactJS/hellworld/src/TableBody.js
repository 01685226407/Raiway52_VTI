import React from 'react';


class TableBody extends React.Component {

  render(){
    const rows = this.props.list.map((item, index)=>{
      return(<tr key={index}>
        <td>{index}</td>
        <td>{item.language}</td>
        <td>{item.framwork}</td>
      </tr>
      );
      
    });
     
    return (
      //{this.props.list}
      <tbody>
        {rows}
      </tbody>
        );
  }
    
}
export default TableBody;
