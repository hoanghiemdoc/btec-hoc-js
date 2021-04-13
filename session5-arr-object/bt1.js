//1. Cho người dùng nhập vào 2 số x, y
//a. Tạo một mảng với các số từ x - y cách nhau 2 đơn vị
//b. Tính trung bình cộng các số trong mảng


// let x = Number(prompt("nhap x"));
// let y = Number(prompt("nhap y"));
// let sum = 0;
// let arr = [];

// if (x< y) {
//     console.log("đ/k ko đúng");
// }
// else{
//     for (let i = 0; i <= y; i+=2) {
//        arr.push(i);
//        sum+= i;
        
//     }
//     let avg = sum/arr.length;
//     console.log(arr);
//     console.log("tbc cua avg la " + avg);
// }





//2. Cho người dùng nhập vào 1 dãy số dạng string (VD: 1,2,3,4,5)
//a. Biến chuỗi đó thành mảng
//b. Tính tổng các số chẵn trong mảng, Tính tổng các số lẻ trong mảng
//c. Tìm max, min của các số trong mảng đó


// let n = String(prompt("nhap chuoi vao day"));
// let arr = [];
// let even = 0;
// let odd = 0;
// let max = 0;
// let min = 0;
// for (let i = 0; i < n.length; i++) {
//     arr.push(n[i]);
//        if(Number(n[i] %2 == 0)){
//           even+= Number(n[i]);
//           console.log(even);
//       }
//       else if(Number(n[i]%2 != 0)){
//         odd += Number(n[i]);
//         console.log(odd);
//     }
     
//     } 
//     console.log(arr);
//     console.log("tong cac so lẻ la " + odd);
//     console.log("tong cac so chan la " + even);


// for (let j = 0; j < arr.length; j++) {

//   if(Number(arr[j]) > max){
//     max = Number(arr[j]);
//     console.log(max);
 
//   } else if(Number(arr[j]) < min){
//       min = Number(arr[j]);
//      console.log(min);
//     }
  
// }
   
//     console.log("tong cac so lon nhat la " + max);
//     console.log("tong cac so nho nhat la " + min);
   

// let input = prompt("Nhap day so dang string:");
// let arr = input.split(",");
// let oddsum = 0;
// let evensum = 0;
// let convArray = [];
// for (let i = 0; i < arr.length; i++) {
//   let element = parseInt(arr[i]);
//   convArray.push(element);
//   if (element % 2 == 0) {
//     evensum += element;
//   } else {
//     oddsum += element;
//   }
// }
// convArray.sort(function (a, b) {
//   return a - b;
// });
// console.log(convArray);
// let len = convArray.length;

// console.log(`tong chan la: ${evensum}`);
// console.log(`tong le la: ${oddsum}`);
// console.log(`min la: ${convArray[0]}`);
// console.log(`max la: ${convArray[len - 1]}`); 






//3. Cho mảng [1, 2, 4, 6, [3, 5], [10, 12]]
//a. Tính tổng tất cả các phần tử trong mảng
//b. Tạo ra 1 mảng mới chỉ là 1 mảng đơn(không chứa mảng khác ở trong) chứa tất cả các phần tử đã được tăng lên 10 đơn vị


// let arr = [1, 2, 4, 6, [3, 5], [10, 12]];
// let sum = 0;
// let total1 = [];
// let total2=[];

// for (let i = 0; i < arr.length; i++) {
//   total1 = total1.concat(arr[i]);
    
// }

// for (let i = 0; i < total1.length; i++) {
//    sum += Number(total1[i]);
//     total2.push(Number(total1[i] +10));

    
// }

// console.log(total1);
// console.log("tong la" + sum);
// console.log(total2);



//4. Cho người dùng nhập vào 1 dãy số dạng string (VD: 1,2,2,1,3,3,4)
//a. Biến chuỗi đó thành mảng
//b. Tạo ra 1 mảng mới gồm các phần tử của mảng cũ không được lặp lại 2 lần.
//VD [1,2,3,3] => [1,2,3]

// let input =  String(prompt("nhap so vao day"));

// let arr = [];
// let chaining = String(prompt('Nhập chuỗi số nguyên:'));
// let n = (chaining.split(','));
// for (let x of n) {
//     arr.push(Number(x));
// }
// console.log(arr);
// console.log("mang dau tien la" + arr);
// //b
// let arr2 = [];
// for (let x of arr) {
//     if(arr2.indexOf(x)==-1) {
//         arr2.push(x);
//     }
// }
// console.log(arr2);
// console.log("mang thu 2 la" + arr2);


//5. Cho người dùng nhập vào 1 câu bất kỳ, Biến câu đó thành 1 câu in hoa tất cả các chữ cái đầu tiên 
//VD: input = "my name is peter" => output = "My Name Is Peter"
// let input = String(prompt("nhap một chuoi"));
// input.trim();
// let arr = input.split(" ");
// let len = arr.length;
// for (let i = 0; i < len; i++) {
//   let head = arr[i].slice(0, 1);
//   let tail = arr[i].slice(1);
//   arr[i] = head.toUpperCase().concat(tail);

// }
// console.log(arr.join(" "));


//6. Cho người dùng nhập vào số n,
//Cho người dùng nhập vào 1 string dạng 1,2,3,4,5
//a. Biến string đó thành mảng
//b. Tạo ra 1 mảng mới gồm n phần tử đầu tiên của mảng cũ


// let arr = [];
// let s = String(prompt('Nhập chuỗi số nguyên:'));
// let s1 = (s.split(','));
// for (const x of s1) {
//     arr.push(Number(x));
// }
// console.log(arr);

// //tao moi tu mang cu
// let n = Number(prompt('Nhập arr moi:'));
// let newArr = (arr.slice(0,n));
// console.log(newArr);




//7. Cho người dùng nhập vào số n,
//Cho người dùng nhập vào 1 string dạng 1,2,3,4,5...
//a. Biến string đó thành mảng
//b. Nhóm mảng cũ thành một mảng mới gồm các mảng con theo n
//VD: [1,2,3,4,5], n = 2 => [[1,2],[3,4], [5]]
 //   [1,2,3,4,5,6], //n = 3 => [1,2,3],[4,5,6]]


//8. Cho người dùng nhập vào string dạng 1,2,3,4,5,6
//a. Biến string đó thành mảng
//b. Tìm giá trị lớn nhất có thể đạt được của hiệu 2 số bất kì trong mảng đó
//Ví dụ:

//Input: [1, 2, 3, 8, 9]
//Output: 8 (là hiệu của 9 và 1)

// a,
// let arr = [];
// let s = String(prompt('Nhập chuỗi số nguyên:'));
// let s1 = (s.split(','));
// for (const x of s1) {
//     arr.push(Number(x));
// }
// console.log(arr);

// //b
// arr.sort(
//     function(a,b){
//         return a-b;
//     }
// )
// let min = arr[arr.length -1]-arr[0];
// console.log(`${min} là hiệu của ${arr[arr.length -1]} và ${arr[0]}`);



//9. Cho người dùng nhập vào string dạng 1,2,3,4,5,6
//a. Biến string đó thành mảng
//b. Tìm các số có số lần lặp lại nhiều nhất trong mảng đó
//Ví dụ:
//Input: [1,2,3,4,1,2,2,1]
//Output: [1,2]







//10. Cho người dùng nhập vào 1 chuỗi bất kỳ
//Kiểm tra xem chuỗi đó có phải dạng palindrome không 
//Ví dụ: "eye" đảo ngược === "eye" => palindrome
//"racecar" đảo ngược === "racecar" => palindrome
//Nếu đúng là dạng đó => In ra correct
//Nếu không => In ra false

// let s = String(prompt(`Nhập vào một chuỗi bất kì:`));
// let n = s.split("");
// console.log(s);
// console.log(n);
// console.log(n.reverse());
// if(JSON.stringify(n)===JSON.stringify(n.reverse())){
//     console.log(`Correct`);
// } else{
//     console.log(`false`);
// }



