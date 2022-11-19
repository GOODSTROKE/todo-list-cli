const prompt = require("prompt-sync")({ sigint: true });

// the to-do-item should be store as an object inside this array.
// {task: 'task', isComplete: 'true/false'};
const list = [];
let isLoop = true;

console.log("Welcome to the To-Do List Manager Application!\n");
console.log("==============================================\n");

while (isLoop) {
  console.log();
  display(list);
  console.log();
  selectAction();
  console.log();
  let userInput = parseInt(prompt());
  if (userInput === 1) {
    console.log("~ Creating a new to-do item ~");
    const name = prompt("What is this to-do item called?: ");
    addToDoitem(name);
  } else if (userInput === 2) {
    console.log("~ Completing a to-do item ~");
    const itemNo = parseInt(
      prompt("Which to-do item would you like to complete?: ")
    );
    completeTask(itemNo);
  } else if (userInput === 3) {
    console.log("~ InCompleting a to-do item ~");
    const itemNo = parseInt(
      prompt("Which to-do item would you like to Incomplete?: ")
    );
    inCompleteTask(itemNo);
  } else if (userInput === 4) {
    if (list.length === 0) console.log("The list is already empty");
    else {
      deleteList();
      console.log("To Do List is deleted Successfully");
    }
  } else if (userInput === 5) {
    console.log("~ Changing name of a to-do item ~");
    let itemNo = parseInt(prompt("Which task name you want to update: "));
    let newTaskName = prompt("What is new name of the task?: ");
    updateTask(itemNo, newTaskName);
  } else if (userInput === 6) {
    isLoop = false;
  } else {
    console.log("Invalid input");
  }
}

// this function will display all the to-do-item in the list.


function display(list) {
  if (list.length === 0) console.log("Your to-do list is empty.");
  else {
    console.log(`You have ${list.length} to-do item(s).`);
    let index = 1;
    for (let item of list) {
      // Now this will be object of list.
      console.log(
        `${index++}. [${item.isComplete ? "complete" : "incomplete"}] ${
          item.task
        }`
      );
    }
  }
}

function selectAction() {
  console.log("~ Select an action ~");
  console.log("[1] Create a to-do item");
  console.log("[2] Complete a to-do item");
  console.log("[3] InComplete a to-do item");
  console.log("[4] Delete whole to-do-list");
  console.log("[5] Change the name of existing task");
  console.log("[6] Exit from task");
}

function addToDoitem(taskName)   {
  const obj = { task: taskName, isComplete: false };
  list.push(obj);
}

function completeTask(taskNumber) {
  list[taskNumber - 1].isComplete = true;
}

function inCompleteTask(taskNumber) {
  list[taskNumber - 1].isComplete = false;
}

function deleteList() {
  list = [];
}

function updateTask(taskNo, updatedName) {
  if (taskNo - 1 > list.length) console.log("Invalid task number.");
  else {
    list[taskNo - 1].task = updatedName;
  }
}
