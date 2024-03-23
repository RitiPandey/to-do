function addTask() {
    var input = document.getElementById("taskInput");
    var task = input.value;
    if (task === '') {
      alert("Please enter a task!");
      return;
    }
    var ul = document.getElementById("taskList");
    var li = document.createElement("li");
    li.textContent = task;
    
    var deleteButton = document.createElement("span");
    deleteButton.className = "delete";
    deleteButton.textContent = "❌";
    deleteButton.onclick = function() {
      ul.removeChild(li);
    };
    li.appendChild(deleteButton);
    
    li.onclick = function() {
      li.classList.toggle("completed");
    };
    
    ul.appendChild(li);
    input.value = '';
  }