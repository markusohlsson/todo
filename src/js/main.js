class toDo {
    constructor(whatToDo) {
      this.whatToDo = whatToDo;
    }
}

  
let toDoList = [
  new toDo("Make breakfast"),
  new toDo("Brush Teeth"),
  new toDo("Workout"),
  new toDo("Shower"),
  new toDo("Golf"),
  new toDo("Study"),
];


for (let i = 0; i < toDoList.length; i++) {
  let whatToDoContainer = document.getElementById("firstList")
  let whatToDoUl = document.createElement("ul");
  let whatToDo = document.createElement("li");
  whatToDo.innerHTML = toDoList[i].whatToDo;
  whatToDoUl.appendChild(whatToDo);
  whatToDoContainer.appendChild(whatToDoUl)
  document.body.appendChild(whatToDoContainer);
  let finishedContainer = document.getElementById("finished");

  whatToDoUl.addEventListener("click", () => {
        markAsDone(toDoList[i]);
      });

function markAsDone () {
  whatToDoUl.innerHTML="";
  toDoList.splice();
  console.log("Du tryckte på", toDoList[i].whatToDo);
  secondList();

}
function secondList (){
  let finishedUl = document.createElement("ul");
  let finishedToDo = document.createElement("li");
  finishedToDo.innerHTML= toDoList[i].whatToDo;
  finishedUl.appendChild(finishedToDo);
  finishedContainer.appendChild(finishedUl);
  document.body.appendChild(finishedContainer);
 
}


}
