var sum = function (a, b) {
    return a + b;
};
var minus = function (a, b) {
    return a - b;
};
var multiply = function (a, b) {
    return a * b;
};
var sum_ab = sum(20, 10);
console.log("tong 2 so la ".concat(sum_ab));
var minus_ab = sum(20, 10);
console.log("hieu 2 so la ".concat(minus_ab));
// Khai báo HOF 
//functionParam ý là muốn truyền vào 1 hàm
console.log("hello");
var caculate = function (a, b, functionParam) {
    var result = functionParam(a, b);
    console.log("Ket qua cua phep tinh la ".concat(result));
};
console.log("-------------HOF---------");
// Cách sử dụng
//truyền hàm sum
caculate(20, 10, sum);
//truyền hàm trừ
caculate(20, 10, minus);
