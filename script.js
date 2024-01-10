//your code here
//your code here
document.addEventListener("DOMContentLoaded", function () {
  const newTodoInput = document.getElementById("newTodoInput");
  const addTodoBtn = document.getElementById("addTodoBtn");
  const todoList = document.getElementById("todoList");

  addTodoBtn.addEventListener("click", function () {
    const todoText = newTodoInput.value.trim(); // Trim to remove leading/trailing whitespace

    if (todoText !== "") {
      const listItem = document.createElement("li");
      listItem.textContent = todoText;

      // Add a click event listener to remove the item when clicked
      listItem.addEventListener("click", function () {
        todoList.removeChild(listItem);
      });

      todoList.appendChild(listItem);
      newTodoInput.value = ""; // Clear the input field
    }
  });
});


