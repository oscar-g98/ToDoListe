
let tasks=JSON.parse(localStorage.getItem("tasks"));
let ol = document.getElementById("myList");

if (tasks!= null){
  ol.innerHTML=tasks+"<br>"
};

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
    ol.innerHTML += input.value+ "<br>";
    
    //span.textContent=JSON.parse(localStorage.getItem("tasks"));
  }
   };

   
