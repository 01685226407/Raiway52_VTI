import React from 'react';
import './App.css';
import ComponentBottom from './Components/ComponentBottom';
import ComponentTop from './Components/ComponentTop';

function App() {
  //CSS in file
  //let divStyle = {color: "red", width: "300px", height:"300px", backgrundColor:"blue"}
  // let handeClickMe = () =>{
  //   alert("Hello!!");
  //   console.log("Hello Cuong");
  // }
  let text1 = "Data From App to Top";
  let text2 ="Data From App to Top";
  let headingTop = "-------Component Top---------"
  // Khai báo hàm callback nhận dữ liệu từ TOP
  let onhandleSentData = (data)=>{
    console.log("Click");
    console.log("data APP", data);
  }
  let getDataFromBotton=(data)=>{
      console.log(data);
  }
    return (
      
      <div class="container">
          <div className="App" >
            <ComponentTop text1={text1} text2={text2} headingTop={headingTop} onhandleSentData={onhandleSentData}/>
            <ComponentBottom headingBottom="-------Component Botom---------"
          getDataFromBotton ={getDataFromBotton()}
            
            />
          </div>
      </div>
      
      
      );
    
}
export default App;
