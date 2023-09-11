window.addEventListener("load", () => {
  const inputBox = document.getElementById("input-box");
  const listContainer = document.getElementById("list-container");
  const form = document.querySelector("#form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const task = inputBox.value;

    if (task === "") {
      alert("Please Add A Task");
    } else {
      let taskElement = document.createElement("div");
      taskElement.classList.add("task");

      let taskElementContent = document.createElement("div");
      taskElementContent.classList.add("content");

      taskElement.appendChild(taskElementContent);

      let taskInputElement = document.createElement("input");
      taskInputElement.classList.add("text");
      taskInputElement.type = "text";
      taskInputElement.value = inputBox.value;
      taskInputElement.setAttribute("readonly", "readonly");
      taskElementContent.appendChild(taskInputElement);

      let taskActionElement = document.createElement("div");
      taskActionElement.classList.add("action");

      let taskDoneElement = document.createElement("button");
      taskDoneElement.classList.add("donebutton");
      taskDoneElement.innerHTML = "DONE";

      let taskEditElement = document.createElement("button");
      taskEditElement.classList.add("editbutton");
      taskEditElement.innerHTML = "EDIT";

      let taskDeleteElement = document.createElement("button");
      taskDeleteElement.classList.add("deletebutton");
      taskDeleteElement.innerHTML = "DELETE";

      taskActionElement.appendChild(taskDoneElement);
      taskActionElement.appendChild(taskEditElement);
      taskActionElement.appendChild(taskDeleteElement);

      taskElement.appendChild(taskActionElement);

      listContainer.appendChild(taskElement);

      inputBox.value = "";

      taskEditElement.addEventListener("click", () => {
        if (taskEditElement.innerText.toLowerCase() == "edit") {
          taskInputElement.removeAttribute("readonly");
          taskInputElement.focus();
          taskEditElement.innerHTML = "Save";
        } else {
          taskInputElement.setAttribute("readonly", "readonly");
          taskEditElement.innerHTML = "EDIT";
        }
      });
      taskDeleteElement.addEventListener("click", () => {
        listContainer.removeChild(taskElement);
      });
    }
  });
});
