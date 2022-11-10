class toDo {
    constructor(whatToDo, completed) {
      this.whatToDo = whatToDo;
      this.completed = completed;
    }
}

  
let toDoList = [
  new toDo("Make breakfast",false),
  new toDo("Brush Teeth",false),
  new toDo("Workout",false),
  new toDo("Shower",false),
  new toDo("Golf",false),
  new toDo("Study",false),
];

console.log(toDoList);

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
  secondList();
toDoList[i].completed=true;
console.log("Is task completed?", toDoList[i].completed);
console.log(toDoList[i]);
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

