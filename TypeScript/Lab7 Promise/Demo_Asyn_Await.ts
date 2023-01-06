// Check Email
    function callAPICheckEmail_():any{
    
       console.log("--Bước 1: Check Email---");
       // Ajax call API
       // True : Email tồn tại
       let resultEmail = false;
       return resultEmail;
   }
   // Check Username
   function callAPICheckUsername_(){
    let resultUsername = false;
           console.log("---Step2 : call API check User Name---");
           // Đoạn code thực hiện call API để check Username
           return resultUsername;
           
   }
   //Create Account
   function callAPICreateAccount_(){
    // True : tạo mới thành công
    console.log("Step 3 : call API Create Account");
    // CALL API AJAX
    let resultCreateAccount = true;
    return resultCreateAccount;
                 
   }
 async  function createNewAccount(){
    // Lấy ra kết quả check Email -> Fasle
       let resultEmail = await callAPICheckEmail_();
        
       if(resultEmail){
        console.log("Email is Exist!!");
        return;
       }
       // Lấy ra kết quả check Username -> Fasle
       let resultUsername = await callAPICheckUsername_();
       if (resultUsername) {
            console.log("Username is Exist");
            return;
       }
       let resultCreateAccount = await callAPICreateAccount_();
       if (resultCreateAccount) {
            console.log("Create new Success");
            
       } else {
        console.log("Create New Error");
        
       }
   }
   createNewAccount();