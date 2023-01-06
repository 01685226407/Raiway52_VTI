// Check Email
function callAPICheckEmail(){
 // Promise, cho đoạn Ajax. ==>> tạo Promise
 let promiseCheckEmail = new Promise(function(resolve, reject){
    console.log("--Bước 1: Check Email---");
    let resultEmail = true;
    if(resultEmail){
        reject("This is Email Exist");
    }else{
        resolve("Check Email OK!!");
    }
    
 });
}
// Check Username
function callAPICheckUsername(){
    
}
//Create Account
function callAPICreateAccount(){
    
}

// Sử dụng
callAPICheckEmail().then(function (){
    return callAPICheckUsername();
});