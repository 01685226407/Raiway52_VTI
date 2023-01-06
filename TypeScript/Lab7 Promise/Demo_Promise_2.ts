// Check Email
function callAPICheckEmail():any{
 // Promise, cho đoạn Ajax. ==>> tạo Promise
 let promiseCheckEmail = new Promise(function(resolve, reject){
    console.log("--Bước 1: Check Email---");
    let resultEmail = true;
    if(resultEmail){
        reject("This is Email Exist");
    }else{
        resolve("Check Email OK!!");
    }
    return promiseCheckEmail;
 });
}
// Check Username
function callAPICheckUsername(){
    return new Promise(function(resolve, reject){
        console.log("---Step2 : call API check User Name---");
        // Đoạn code thực hiện call API để check Username
        var resultUsername = false;
        if(resultUsername){
            reject("this Username is Exists");
        }else{
            resolve("This Username is not Exists, Ckeck Username OK!");
        }
        
    });
    
}
//Create Account
function callAPICreateAccount(){
    return new Promise(function(resolve, reject){
        console.log("Step 3 : call API Create Account");
        let resultCreateAccount = true;
        if(resultCreateAccount){
            reject("CreateAccount Success");
        }else{
            resolve("A");
        }
    });
}

// Sử dụng
callAPICheckEmail()
.then(function (msgSuccess){
    console.log(msgSuccess);
    
    return callAPICheckUsername();
})
.then(function(msgSuccess){

    console.log(msgSuccess);
    
    return callAPICreateAccount();
})
.then(function(msgSuccess){
    console.log(msgSuccess);
    
})
.catch(function(msgError){
    console.log("Đã có lỗi xảy ra");
    
    console.log(msgError);
    
});