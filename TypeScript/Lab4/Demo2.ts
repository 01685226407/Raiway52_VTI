//Vấn đề 1
//Const : sử dụng khai báo hằng số
let PI = 3.14;

//PI = 3.15; không thể thay đổi giá trị
// Vấn đề 2
// Khai báo const với object
// Sẽ tạo 1 vùng nhớ. cho account gọi là miếng đất. còn id, name, age là đồ đạc và thay đổi được.
const account = {
    id: 1,
    name : 'Cuong',
    age: 19
}
account.id = 10;
// Vẫn update thành công.
console.log("Update", account);


// nhưng không thể làm lại 1 account mới bằng cả đối tượng. chỉ thay đổi thuộc tính bên trong thôi.
// account ={

//}
// Vấn đề 3.
// Khai báo const với array
const numbers = [1,3,5];
numbers[0] = 10;
numbers[1] = 11;
// không thể. numbers =[];