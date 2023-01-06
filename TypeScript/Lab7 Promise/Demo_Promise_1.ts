// Call API để thực thi 1 task

let promiseCallAPI = new Promise(function(resolve, reject){
    // Call API để thực thi 1 task: ajax
    let resultAPI = false;
    if(resultAPI){
        resolve("Call API SUCCESS");
    }else{
        reject("Call API NOT SUCCESS");
    }
});

// Thực hiện sử dụng
promiseCallAPI.then(
    // Chạy khi Resolve xảy ra
    function(msgSuccess){
        console.log("Chạy lệnh tiếp theo");
        console.log(msgSuccess);
        
        
    },
    // Chạy khi Reject xảy ra
    function(msgError){
        console.log("Dừng chương trình ở đây");
        console.log(msgError);
    }
).catch(function(){
    console.log("Đã có lỗi xảy");
    
});