var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Destructuring: phá vỡ cấu trúc
//Object
var account = {
    id: 1,
    name: "cuong",
    age: 18
};
// let v_id = account.id;
// let v_name = account.name;
// let v_age = account.age;
var v_id = account.id, v_name = account.name, v_age = account.age;
console.log(v_id);
// Array
var nameArray = ["Minh", "Cuong", "Xuan"];
// let v_name1 = nameArray[0];
// let v_name2 = nameArray[1];
var v_name1 = nameArray[0], v_name2 = nameArray[1], v_name3 = nameArray[2];
console.log(v_name1);
console.log(v_name2);
console.log(v_name3);
var v_name11 = nameArray[0], v_name33 = nameArray[2];
// Toán tử Spread.... Copy thuộc tính của đối tượng ban đầu . 
// CÚ pháp :  ...Object
var accountNew = __assign(__assign({}, account), { rank: 10, address: "HN" });
// let nameArray = ["Minh","Cuong","Xuan"];
var nameArrayNew = __spreadArray(__spreadArray([], nameArray, true), ["Tuan"], false);
// Demo Template String : Sử dụng với chuỗi .
console.log("Template String.....");
var v_myName1 = "Cuong";
var v_age1 = 18;
console.log("ten la ", v_myName1, "tuoi la", v_age1);
//Template String => Cộng chuỗi
console.log("ten cua toi la: ".concat(v_myName1, ", tuoi toi la : ").concat(v_age1));
