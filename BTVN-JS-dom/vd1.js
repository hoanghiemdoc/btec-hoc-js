

// b1)
function myFunction() {
  let box1 = document.getElementById("box1");
  if(box1.style.display === "none") {
      box1.style.display = "block";
  }
  else {
      box1.style.display ="none";
  }

}

// b2)
const setBg = function () {  
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    box2.style.backgroundColor = "#" + randomColor;
  
  }
 color.addEventListener("click", setBg);
  setBg();

  // b3)


  let reverse = document.getElementById("click");
  console.log(reverse);
  let box3 = document.getElementById("box3");
  let box4 = document.getElementById("box4");
  

  reverse.onclick = function () {
    let inform1 = box3.textContent;
    let inform2 = box4.textContent;

   box3.textContent = inform2;
   box4.textContent = inform1;

  console.log(inform1); 
  console.log(inform2); 

  }

  // b4)

  let clickhere = document.getElementById("clickHere");
  console.log(clickhere);
  let dimension = document.getElementById("dimension");

  let size = 15;

  clickHere.onclick = function () {
    size = size +1;
    dimension.style.fontSize = size + "px";

    console.log(dimension);

  }


  
  