class toDo {
    constructor(whatToDo, timeFrame) {
      this.whatToDo = whatToDo;
      this.timeFrame = timeFrame;
    }
}

  
let toDoList = [
  new toDo("Make breakfast", 15),
  new toDo("Brush Teeth", 2),
  new toDo("Workout", 60),
  new toDo("Shower",10),
];

let finishedList =[];
for (let i = 0; i < toDoList.length; i++) {
  let container = document.createElement("div");
  let whatToDo = document.createElement("ul");
  let timeFrame = document.createElement("li");

  whatToDo.innerHTML = toDoList[i].whatToDo;
  timeFrame.innerHTML =toDoList[i].timeFrame;

 
  container.addEventListener("click", () => {
    markAsDone(toDoList[i]);
  });

  container.appendChild(whatToDo);
  container.appendChild(timeFrame);

  document.body.appendChild(container);

  function markAsDone (toDo) {
    container.innerHTML="";
    toDoList.splice(1,1);
   }
}

