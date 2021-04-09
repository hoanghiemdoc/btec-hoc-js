// bt1
// cho ng dung nhap vao so n
// vẽ tam giác trên màn hình console
// vd n=3

// let n = Number(prompt("please input n"));
// let sao = "*"; //c1
// let tong = " ";

// for (let i = 0; i <= n; i++) {
//     tong += sao;
//     //   tong+= " *"  // c2
//     console.log(tong);

//     console.log("*",repeat(i));
// }

// bt2
// cho người dùng nhập vào số n
// in ra bảng cửu chương từ 1-10 của số đó

// let n = Number(prompt('nhập bảng cửu chương'));

// for (let i = 0; i <= 10; i++) {
//     console.log(`${n} * ${i} =${n*i}`);

// }

// bt3
// in ra cac so tù 1 - n kèm theo
// 1 là số chẵn
// 2 là số lẻ

// let input = Number(prompt("nhap so n vao"));

// console.log(input);

// for (let i = 0; i <= input; i++) {
//     if(i %2 == 0){
//         console.log(i, 'la số chẵn');
//     }
//      else if(i %2 !== 0){
//         console.log(i, "la so le");
//     }

// }

// học về mảng

// array/list - mảng =/ danh sách

// let name =  ['hoa hong',"hoa lan","hoa xú"];
// for (let i = 0; i < name.length; i++) {
//     console.log(name[i]);

// }

// length => lấy độ dài của mảng
// index => 0 = length -1;
// add element thêm vào cuối mảng : push();
// read element: tên mảng + [index]

// update element: tên mảng + [index] = "orther value";

// delete phần tử cuối mảng element: tên mảng. pop();

// adđ element in the start arr: .unshift("other value");

//delete element in the start arr: .shift("other value");

// delete element by index: .spilce(index), (số phần tử cần xóa);

// name.unshift("hoa lan nhựa");

// name.splice(1,1);
// console.log(name);

// su dung vong lap viet chuong trinh crud cho hoa qua;
// neu ng dung nhap
// nhap c => hien thi inputBox cho ng dung them sp;
// nhap R => hien thi danh sach san pham console.table(arr);
// nhap U => cho ng dung nhap so index ten muon update
// nhap d => cho ng dung nhap so index can xoa => hien thi box confirm
//    neu => ok  =>xoa

//    neu => cancel  =>ko xoa

// nhap s => cho ng dungf nhap chuoi can search => cha ve table nhung
// elem co chuoi search do
// vd: search => "pp" =>
// nhap 0 => out.system
// nhap ky tu khac => bao loi => cho nhap lai



//let arr = ["apple", "banana", "orange", "strawberry", "mango"];
// let loop = true;

// while (loop) {
//   let n = prompt("nhap chuc nang thêm sp");
//   if (n == "c") { // 
//    let input = prompt("them sp");
//     arr.push(input);
//     alert("bn da them sp thanh cong");
//   }else if (n == 0) {
//      loop = false;
//   } 

//   else if(n == "u"){
//      let item = prompt("mời bạn nhập index cần update");
//      arr.push(item);
//      console.log("update thành công");
//   }

// }
// console.table(arr);

// phần tách từng phần 1


// nhap c => hien thi inputBox cho ng dung them sp;
// let input = prompt("nhap chuc nang")
// for (let i = 0; i < arr.length; i++) {
//    if(input = "c" ){
//        let n = prompt("hiển thị input box");
//      arr[i].push(n);
//      alert("ban đã nhập sp thanh công");
//    }  
//    else if (input == 0) {
//       alert("kt input box");
//    }
     
// }






// nhap R => hien thi danh sach san pham console.table(arr);
// let n = prompt("nhập sp vào");

// for (let i = 0; i < arr.length; i++) {
//   if(n == 'R'){
//    alert("hiển thị bảng table");
//   }
 
// }
// console.table(arr);

// nhap U => cho ng dung nhap so index ten muon update
// let arr = ["apple", "banana", "orange", "strawberry", "mango"];
   // let n = prompt("hiển thị item");
   // for (let j = 0; j < arr.length; j++) {
   //  if(n == "u"){ 
   //     let input =Number(prompt("nhập số index cần update"))
   //    arr[j]= arr[input];
   //    console.log(input);
   //  }
   //    else if(n != "u"){
   //       console.log("kt điều kiện ");
   //   }
      
   // }
   // console.log(arr);


// nhap d => cho ng dung nhap so index can xoa => hien thi box confirm
//    neu => ok  =>xoa
//    neu => cancel  =>ko xoa

let arr = ["apple", "banana", "orange", "strawberry", "mango"];
let loop = true;
while (loop ) {
   let n = Number(prompt("nhập số "))
   if(n == "d"){
     let input = confirm("hiển thị inbox");
      console.log(input);
   }else if(input == "ok"){
      arr.splice(n,1)
    alert("xóa hoàn tất");
   }else if (input == "cancel") {
      console.log("ko xóa");
   }

  loop == false;
}



  