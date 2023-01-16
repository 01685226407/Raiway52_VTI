import React from 'react';

function ComponentBottom(props) {
    //props này sẽ nhận tất cả dữ liệu cha gửi xuống.
    let {headingBottom} = props;
    let handleButton=()=>{
        console.log("hello");
        let {getDataFromBotton} = props;
        getDataFromBotton();
    }
    return (
                <div class="row">
                    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6"> 
                        <div class="alert alert-danger">
                            
                            <div class="panel panel-default">
                                  <div class="panel-heading">
                                        <h3 class="panel-title">{headingBottom}</h3>
                                  </div>
                                  <div class="panel-body">
                                        
                                        <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                                            <textarea  class="form-control" ></textarea>
                                            
                                            <button type="button" class="btn btn-danger" onClick={handleButton}>button</button>
                                            
                                        </div>
                                        
                                        
                                        
                                  </div>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
           
            
        
    );
}

export default ComponentBottom;