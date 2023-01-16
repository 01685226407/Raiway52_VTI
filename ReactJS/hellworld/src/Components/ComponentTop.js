import React, { Component } from 'react';

class ComponentTop extends Component {
    //Khai báo biến lưu trữ số lần click vào nút Sentdata
    // Khai báo 1 state clickNumber
    constructor(props){
        super(props)
        this.state = {
            clickNumber:0
        };
    }
    //handleSentData khai báo trong render() thì gọi không cần this. còn bên ngoài cùng cấp render() dùng this.
    // truyền bất cứ cái gì từ cha xuống con cũng được
    handleSentData = ()=>{
             //let dataTOP ="This is data From TOP";
             //đây là tên props
            //let {onhandleSentData} = this.props;
             
            // onhandleSentData(dataTOP);
            //this.props.onhandleSentData(dataTOP);
            //the hien 1 doi duong
            //this.clickNumber = this.clickNumber +1;
            
            this.setState({
                clickNumber : this.state.clickNumber +1, // 0 =>1
            });
           // console.log("clickNumber",this.clickNumber);
    }
    render() {
        // Để lấy props : this.props.tenbiencha
        //let text1Top = this.props.xprops; 
         //dutructungring. gộp nhiều biến
        let {text1,text2, headingTop} = this.props; 
        console.log("text1", text1);
        console.log("text2", text2);
        
        return (   
                <div class="row">
                    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <div class="panel panel-success">
                            <div class="panel-heading">
                                    <h3 class="panel-title">{headingTop}</h3>
                            </div>
                            <div class="panel-body">
                                <div class="row">
                                    <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                                        
                                        <input type="text" class="form-control" value="" />
                                        {/*<h3>{this.state.clickNumber}Lan</h3> nhận giá trị hiện tại
                                        */}  
                                        <h3>{this.state.clickNumber}Lan</h3>
                                    </div>
                                    
                                    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                        
                                    </div>
                                    <button type="button" class="btn btn-danger" onClick={this.handleSentData}>Send Data</button>
                                    
                                      
                                </div>    
                            </div>
                        </div>
                    </div>
                </div>
           
        );
    }
}

export default ComponentTop;