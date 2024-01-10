// //your code here
// //your code here
// document.addEventListener("DOMContentLoaded", function () {
//   const newTodoInput = document.getElementById("newTodoInput");
//   const addTodoBtn = document.getElementById("addTodoBtn");
//   const todoList = document.getElementById("todoList");

//   addTodoBtn.addEventListener("click", function () {
//     const todoText = newTodoInput.value.trim(); // Trim to remove leading/trailing whitespace

//     if (todoText !== "") {
//       const listItem = document.createElement("li");
//       listItem.textContent = todoText;

//       // Add a click event listener to remove the item when clicked
//       listItem.addEventListener("click", function () {
//         todoList.removeChild(listItem);
//       });

//       todoList.appendChild(listItem);
//       newTodoInput.value = ""; // Clear the input field
//     }
//   });
// });
var btn = document.getElementById("addTodoBtn");
var todolist = document.getElementById("todoList");
btn.addEventListener("click", function() {
	var todo = document.getElementById("newTodoInput").value;
	var li = document.createElement("li");
	var todoText = document.createTextNode(todo);
	li.appendChild(todoText);
	todolist.appendChild(li);
});

