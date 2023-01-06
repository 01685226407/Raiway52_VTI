//Const : sử dụng khai báo hằng số
var PI = 3.14;
//PI = 3.15; không thể thay đổi giá trị
// Khai báo const với object
var account = {
    id: 1,
    name: 'Cuong',
    age: 19
};
account.id = 10;
console.log("Update", account);
