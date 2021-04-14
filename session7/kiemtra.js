
// b1
// function str_input(str) {
//     newarr = str.split(",");
//     result = [];
//     x = newarr.length;
//     for (i = x; i > -1; i--) {
//       result.push(newarr[i]);
//     }
//     str = result.join("");
//     return str;
//   }
  
// console.log(str_input("program"));  
//  console.log(str_input("data")); 



// b2
// let input = String(prompt("nhap chuỗi để in hoa là"));
// input.trim();
// let arr = input.split(" ");
// let display = arr.length;
// for (let i = 0; i < display; i++) {
//   let start = arr[i].slice(0, 1);
//   let end = arr[i].slice(1);
//   arr[i] = start.toUpperCase().concat(end);

// }
// console.log(arr.join(" "));


// b3
// : Viết một chương trình xóa các phần tử trùng của một mảng và in ra kết quả. (2đ)
// Đầu vào: 1 mảng
// Đầu ra: Mảng mới với các ký tự (hoặc số) không trùng nhau
// Ví dụ
// Cho Arr=[“one”,”two”,”three”,”one”,”one”,”four”,”five”,”four”,”five”five”]; In ra Arr=[“one”,”two”,”three”,”four”,”five”];
// Cho Arr=[1,2,3,3,4,5,4,4,4,5,5]; In ra Arr=[1,2,3,4,5]


// let arr = [];
// let chaining = String(prompt('Nhập chuỗi số trung vao day:'));
// let n = (chaining.split(','));
// for (let x of n) {
//     arr.push(String(x));
// }
// console.log(arr);
// //b
// let arr2 = [];
// for (let x of arr) {
//     if(arr2.indexOf(x)==-1) {
//         arr2.push(x);
//     }
// }
// console.log(arr2);
// console.log("mang two is " + arr2);


// bt4

let mindX  = [{
    name:'hoang',
    age:20,
    salary:2000,
    position:'boss'

},
{
    name:'hung',
    age:20,
    salary:4000,
    position:'mange'
},

{
    name:'tuan',
    age:22,
    salary:5000,
    position:'staff' 
},]

let loop = true;
while (loop) {
    let input = prompt("enter function do you want");
    if (input == "c") {
      // newPerson = {};
      let name = prompt("enter your name");
      // newPerson.Name;
      let age = prompt("enter your age");
      // newPerson.age;
      let salary = prompt("enter your salary");
      // newPerson.email;
      let position = prompt("enter your position");
      // newPerson.PhoneNumber = PhoneNumber;
  
      let newPerson = {
        name: name,
        age: age,
        salary:salary,
        position: position,
      };

      mindX.push(newPerson);
      alert("bn da update finish");
      console.log(mindX);

}
break;
}






 