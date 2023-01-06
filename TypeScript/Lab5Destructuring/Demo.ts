// Destructuring: phá vỡ cấu trúc
//Object
let account = {
    id: 1,
    name :"cuong",
    age: 18
};
// let v_id = account.id;
// let v_name = account.name;
// let v_age = account.age;

let {id: v_id, name:v_name, age:v_age} = account;
console.log(v_id);

// Array
let nameArray = ["Minh","Cuong","Xuan"];
// let v_name1 = nameArray[0];
// let v_name2 = nameArray[1];
let[v_name1, v_name2,v_name3] = nameArray;
console.log(v_name1);
console.log(v_name2);
console.log(v_name3);

let[v_name11, ,v_name33] = nameArray;

// Toán tử Spread.... Copy thuộc tính của đối tượng ban đầu . 
// CÚ pháp :  ...Object

let accountNew = {
    // id: 1,
    // name :"cuong",
    // age: 18,
    ...account,
    rank: 10,
    address: "HN"
}
// let nameArray = ["Minh","Cuong","Xuan"];
let nameArrayNew =[...nameArray,"Tuan"];


// Demo Template String : Sử dụng với chuỗi .
console.log("Template String.....");
let v_myName1 = "Cuong";
let v_age1 = 18;

console.log("ten la ",v_myName1,"tuoi la", v_age1);
//Template String => Cộng chuỗi
console.log(`ten cua toi la: ${v_myName1}, tuoi toi la : ${v_age1}`);


