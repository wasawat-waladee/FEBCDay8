const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click",addContent)

function addContent(){
   /* const text = document.getElementById("textInput").value
   const result = document.getElementById("result")
   const newDiv = document.createElement("div");
   const newContent = document.createTextNode(text);
   newDiv.appendChild(newContent);
   const currenDiv = document.getElementById("div");
   document.body.insertBefore(newDiv,currenDiv); */

   //วิธีที่ 2 
   const text = document.getElementById("textInput").value
   const result = document.getElementById("result")
   result.innerHTML += `<h1>${text}</h1>`
}

//การเรียกข้อมูลจากหลังบ้าน ต้องทำผ่าน API 
//โดยจะมีการหน่วงของการเรียกข้อมูลว่า Promise
//โดยฝั่ง client จะหา end point(www...) โดยใช้ fetch

//วิธีที่1 ไม่ค่อยนิยม
/* fetch("https://jsonplaceholder.typicode.com/todos/1")
.then(response => response.json())
.then(json => console.log(json)) */

//วิธีที่2
async function fetchData() {
   const data = await fetch('https://jsonplaceholder.typicode.com/todos')
   const json = await data.json()

   const titleList =document.getElementById("titleList")
   for( let i = 0 ; i < json.length ; i++){
      titleList.innerHTML += `<h3>${json[i].title}</h3>`
   }
}
fetchData()