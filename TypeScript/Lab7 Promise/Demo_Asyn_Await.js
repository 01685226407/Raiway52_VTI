var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Check Email
function callAPICheckEmail_() {
    console.log("--Bước 1: Check Email---");
    // Ajax call API
    // True : Email tồn tại
    let resultEmail = false;
    return resultEmail;
}
// Check Username
function callAPICheckUsername_() {
    let resultUsername = false;
    console.log("---Step2 : call API check User Name---");
    // Đoạn code thực hiện call API để check Username
    return resultUsername;
}
//Create Account
function callAPICreateAccount_() {
    // True : tạo mới thành công
    console.log("Step 3 : call API Create Account");
    // CALL API AJAX
    let resultCreateAccount = true;
    return resultCreateAccount;
}
function createNewAccount() {
    return __awaiter(this, void 0, void 0, function* () {
        // Lấy ra kết quả check Email -> Fasle
        let resultEmail = yield callAPICheckEmail_();
        if (resultEmail) {
            console.log("Email is Exist!!");
            return;
        }
        // Lấy ra kết quả check Username -> Fasle
        let resultUsername = yield callAPICheckUsername_();
        if (resultUsername) {
            console.log("Username is Exist");
            return;
        }
        let resultCreateAccount = yield callAPICreateAccount_();
        if (resultCreateAccount) {
            console.log("Create new Success");
        }
        else {
            console.log("Create New Error");
        }
    });
}
createNewAccount();
