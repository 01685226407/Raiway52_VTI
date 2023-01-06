//var- được tái sử dụng
//let- để cho mình biết là không dùng lại biến đó. vì nó đã được khai báo.
//=> Khai báo ra 1 biến.
// redeclare : khai báo lại
// reassign: Gán lại giá trị

let myName ="cuong";

console.log("myname1 ", myName);

myName =" hihi";// reassign
myName = "daocuong"; // redeclare
console.log("myname2", myName);

//hosting- chỉ 1 biến được sử dụng trước khi khai báo
console.log("Myage" , myAge);
let myAge =19;// let sẽ không có khái niệm hosting.

