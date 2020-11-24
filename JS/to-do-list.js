let tasks=JSON.parse(localStorage.getItem("tasks"));

let inputValue = document.getElementById("input").value;
let task = {
  id: new Date().getTime(),
  name: inputValue
};

showTasks();
deleteButton();

function deleteButton(){
let deleteButton = document.getElementsByTagName("li");
for(i=0;i<deleteButton.length;i++){
  let span = document.createElement("span");
  let deleteImage = document.createTextNode("\u00D7");
  span.className="closeTask";
  span.appendChild(deleteImage);
  deleteButton[i].appendChild(span);
  }
};


  let closeTask = document.getElementsByClassName("closeTask");
  for (i = 0; i<closeTask.length; i++){
    closeTask[i].onclick = function(){
      let div = this.parentElement;
      div.style.display = "none";
      
  }
}

function showTasks(){
let ul = document.getElementById("myList");
for(i=0;i<tasks.length;i++){
  li=document.createElement("li");
  ul.appendChild(li)
  li.innerHTML=task.name+"<br>"
  }
};

/*function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("input").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myList").appendChild(li);
  }
  document.getElementById("input").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}*/


  //legger til oppgaver
  function addTask(){
    let li = document.createElement("li");
    if(input.value===""){
      alert("Add a task!")
    }else{
      document.getElementById("myList").appendChild(li);
      
      //legger til oppgavene i localstorage
    let newTask = document.getElementById("input").value;
    if(localStorage.getItem("tasks")==null){
      localStorage.setItem("tasks", "[]");
    }
    let oldTask = JSON.parse(localStorage.getItem("tasks"));
    oldTask.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(oldTask));
    li.innerHTML += input.value+ "<br>";

    
    

    
    //span.textContent=JSON.parse(localStorage.getItem("tasks"));
  }
   };



