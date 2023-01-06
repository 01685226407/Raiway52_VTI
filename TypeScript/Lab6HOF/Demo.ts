let sum = (a:number, b:number)=>{
    return a+b;
}
let minus = (a:number, b:number)=>{
    return a-b;
}
let multiply = (a:number, b:number)=>{
    return a*b;
}


let sum_ab = sum(20,10);
console.log(`tong 2 so la ${sum_ab}`);
console.log(`tong 2 so la ${sum}`);// in ra chuỗi của sum hài vl.

let minus_ab = sum(20,10);
console.log(`hieu 2 so la ${minus_ab}`);

// Khai báo HOF 
//functionParam ý là muốn truyền vào 1 hàm
console.log("hello");

let caculate =(a: number, b:number, functionParam)=> {
    let result = functionParam(a,b);
    console.log(`Ket qua cua phep tinh la ${result}`);
    
}
console.log("-------------HOF---------");

// Cách sử dụng
//truyền hàm sum
caculate(20,10,sum);
//truyền hàm trừ
caculate(20,10,minus);
