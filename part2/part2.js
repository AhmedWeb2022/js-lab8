// Part Two

let dataInput = document.getElementById("text");
// let mainContainer = document.getElementById("container");
let tasksContainer = document.getElementById("tasks");
let submit = document.getElementById("submit");
let dataArray = [];
if (window.localStorage.getItem("task")) {
  dataArray = JSON.parse(window.localStorage.getItem("task"));
}
getDataFromLS();
submit.onclick = function () {
  // var span = document.createElement("span");
  // var spanTxt = document.createTextNode(dataInput.value);
  // span.appendChild(spanTxt);
  // span.classList.add("span-style");
  // span.classList.add("span");
  // var doneBtn = document.createElement("button");
  // var doneBtnText = document.createTextNode("Done");
  // doneBtn.appendChild(doneBtnText);
  // doneBtn.className = "done";
  // var deleteBtn = document.createElement("button");
  // var deleteBtntext = document.createTextNode("Delete");
  // deleteBtn.appendChild(deleteBtntext);
  // deleteBtn.classList.add("delete");
  // var textContainer = document.createElement("div");
  // textContainer.classList.add("text-con-style");
  // textContainer.classList.add("text-con");
  // textContainer.appendChild(span);
  // textContainer.appendChild(doneBtn);
  // textContainer.appendChild(deleteBtn);
  // window.localStorage.setItem("task", textContainer);
  // console.log(window.localStorage.setItem("task", textContainer));
  // mainContainer.insertBefore(textContainer, container.children[0]);
  if (dataInput.value !== "") {
    addTasksToArray(dataInput.value);
    dataInput.value = "";
  }
};
tasksContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    //Delete Data From Local Storage
    deleteDataFromLS(e.target.parentElement.getAttribute("data-id"));
    // Delete Data From Page
    e.target.parentElement.remove();
  }
  if (e.target.classList.contains("done")) {
    // Add Done To Local Storage Status To Done
    addDoneToLS(e.target.parentElement.getAttribute("data-id"));
    // Add Class Complete To Div
    e.target.parentElement.classList.add("complete");
    // e.target.setAttribute("disabled", "");
  }
});
function addTasksToArray(tasksTxt) {
  // Make an Object of Data
  const task = {
    id: Date.now(),
    data: tasksTxt,
    completed: false,
  };
  //Push Object To an Array
  dataArray.push(task);
  // Add Data To Page
  addDataToPage(dataArray);
  // Add Data to Local Storage
  addDataToLS(dataArray);
}
function addDataToPage(array) {
  tasksContainer.innerHTML = "";
  array.forEach((t) => {
    // Create Main Div
    var div = document.createElement("div");
    div.setAttribute("data-id", t.id);
    div.className = "div-style";
    // Check If Task Complete
    if (t.completed) {
      div.className = "div-style complete";
    }
    // var divTxt = document.createTextNode(t.data);
    // div.appendChild(divTxt);
    let span = document.createElement("span");
    let spanTxt = document.createTextNode(t.data);
    span.appendChild(spanTxt);
    span.className = "span-style";
    div.appendChild(span);
    // Create Done Button
    var doneBtn = document.createElement("button");
    var doneBtnText = document.createTextNode("Done");
    doneBtn.appendChild(doneBtnText);
    doneBtn.className = "done";
    div.appendChild(doneBtn);
    //create Delete Button
    var deleteBtn = document.createElement("button");
    var deleteBtntext = document.createTextNode("Delete");
    deleteBtn.appendChild(deleteBtntext);
    deleteBtn.className = "delete";
    // Append Main Div To Tasks Container
    tasksContainer.appendChild(div);
    div.appendChild(deleteBtn);
  });
}
function addDataToLS(arr) {
  window.localStorage.setItem("task", JSON.stringify(arr));
}
function getDataFromLS() {
  let gData = window.localStorage.getItem("task");
  if (gData) {
    let jData = JSON.parse(gData);
    addDataToPage(jData);
  }
}
function deleteDataFromLS(dataId) {
  dataArray = dataArray.filter((d) => d.id != dataId);
  addDataToLS(dataArray);
}
function addDoneToLS(dataId) {
  for (let i = 0; i < dataArray.length; i++) {
    if (dataArray[i].id == dataId) {
      dataArray[i].completed = true;
    }
  }
  addDataToLS(dataArray);
}
// document.addEventListener("click", (e) => {
//   if (e.target.className == "done") {
//     console.log("done");
//     e.target.parentNode.style.backgroundColor = "#73f073";
//   } else if (e.target.classList == "delete") {
//     e.target.parentNode.remove();
//   }
// });
// document.onclick = function (e) {
//   if (e.target.className == "done") {
//     e.target.parentNode.style.backgroundColor = "#73f073";
//   } else if (e.target.classList == "delete") {
//     e.target.parentNode.remove();
//   }
// };
