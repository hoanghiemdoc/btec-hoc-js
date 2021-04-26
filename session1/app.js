// console.log(document);

// HTML SELECTOR

// 1) lay phan tu bang id
//  const app = document.getElementById("display");
//  console.log(app);

// 2) lay phan tu bang the className
// const app = document.getElementsByClassName("div");
// for (let i = 0; i < app.length; i++) {
//     console.log(app[i]);

// }

// c2: console.log(app.length);

// 3) lay theo tagName
// const tagName = document.getElementsByTagName("div");
// console.log(tagName);

// 4) lay theo querySelector va querySelectorAll

// const query = document.querySelector("#app");
// console.log(query);

// const query = document.querySelectorAll(".div");
// console.log(query);

// important property and method

// console.dir(app);

// 5) bo text va content

// innerHTML thay doi duoc noi dung va the html

// innerText va textContent chi thay doi dc noi dung

app.innerHTML = "<b>chao buoi morning</b>"
console.log(app.innerHTML);

app.innerText = "hey guy iam king"
console.log(app.innerText);

app.textContent = "i am king of king"
console.log(app.textContent);

// 6) thuoc tinh Style

// app.style.fontSize = "50px";
// app.style.color = "red";
// console.log(app.style);

// 7) children,parentElement

// const ul  = document.getElementById("ul");
// console.log(ul.children[1].parentElement);

// 8) classList,id
// hien thi danh sach cac class

// console.log(ul.id);
// console.log(ul.classList);

// add class va remove class

// ul.classList.add("ul4");
// ul.classList.remove("ul1");

// console.log(ul.classList);

// 9) creatElement(),appenchild,remove()

// const li = document.createElement("li");
// li.innerHTML ="hey ban oi choi game di";
// ul.appendChild(li);

// console.log(ul.children[0].remove(li));

// console.log(li);

// const btn=document.getElementById("btn");

// cho 1 div va mot button sau khi click
//  thi doi mau doi font doi noi dung cho the div

// const btn = document.getElementById("btn");
// let ul = document.getElementById("ul");
// console.log(ul);

//  btn.onclick = function () {
// // logic code
// // c1)
//    ul.style.fontSize = "40px";
//    ul.style.backgroundColor = "blue";
//    ul.style.color = "red";
//    console.log(ul.style);
//    alert("thuc hien ham thanh cong");

// // c2)
// ul.classList.add("add");
// }

let btn = document.getElementById("btn-add");
console.log(btn);
let ul = document.getElementById("ul");

btn.onclick = function () {
// logic \

// b1 : tao the li

  let li = document.createElement("li");

//   b2 gan gtri cho noi dung
  li.innerHTML = "hey ban oi choi game di";

//   b3 them the li vao ul
  ul.appendChild(li);

  console.log(li);
};


let btn_delete = document.getElementById("btn-delete");
console.log(btn_delete);

btn_delete.onclick = function () {
  let listDelete = document.getElementById("ul");

  console.log(listDelete.children[0].remove());
  
// c1)    ul.children[0].remove();
}

