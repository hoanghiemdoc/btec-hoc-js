// console.log("hello world");

// hoc ve mang, function,object


// const person = {
//     name:"perter",
//     age:18,
//     color:'ReadableStream',
//     school:"fpt",
// }




// function-hàm
// function sayHello() {
//     console.log("hello" +name);
    
//  } // khai báo


// sayHello(an); //  thực thi
// sayHello(mai);
// sayHello(chi);

// function calculate(a,h) {
//     return (a+h)/2
// }
//  const s = calculate(1,2);
//  console.log(s);


// tạo 1 function nhận vào số n
// tính n!


// function bien(n) {// 4
//     let result =1
//     for (let index = 1; index <= n; index++) {
//        result = result*i;
      
//     }
//     return result;
   
// }
// console.log(bien(3));

// bien(5);

function input(arr) {
    let sum = 0;
    for (let index = 0; index < arr.length; index++) {
        sum = sum +arr[index];
    } 
    return sum; 
}

console.log(input([1,2,3]));

// let arr = [2,3,4];
// let sum = 0;
// for (let index = 0; index < arr.length; index++) {
//   sum = sum +arr[index];  
// }
// console.log(sum);




// EX2

// TẠO 1 function nhận vào 3 số a,b,c
// trả về số max
// function max(a,b,c) {
//     return Math.max(a,b,c);
// }


// ex3

// tạo 1 function nhận 1 mảng
// trả về tổng số của các phần tử trong mảng



// function sum(arr) {
//     let result = 0;
//     for(let number of arr){
//         result = result + number;
//     }
//     return result;
// }// ex4


// tạo một function nhận vào 1 chuỗi
// trả về một chuỗi nghịch đảo 
// function reverse(str) {
//     return str.split("").reverse().join("");
// }
// console.log(reverse("hello"));

// ex5:
//tạo một function nhận vào một chuuoi ,kiểm tra xem chuỗi đó có phải là 
// chuỗi palindrome không
// nếu có trả về true ,không trả về fasle



// function isPalindrome(str) {
//     return str.toLowerCase() === reverse(str.toLowerCase());

// }
    
