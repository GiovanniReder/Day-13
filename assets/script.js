const myList = document.getElementsByTagName("li");
let i;
for (i = 0; i < myList.length; i++) {
  const button = document.createElement("button");
  const txt = document.createTextNode("delete");
  button.className = "close";
  button.appendChild(txt);
  myList[i].appendChild(button);
}

const close = document.getElementsByClassName("close");
let b;
for (b = 0; b < close.length; b++) {
  close[b].onclick = function () {
    const div = this.parentElement;
    div.style.display = "none";
  };
}

const list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "li") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);

function newElement() {
  const li = document.createElement("li");
  const inputValue = document.getElementById("inputBar").value;
  const t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("Empty");
  } else {
    document.getElementById("taskList").appendChild(li);
  }
  document.getElementById("inputBar").value = "";

  const button = document.createElement("button");
  const txt = document.createTextNode("delete");
  button.className = "close";
  button.appendChild(txt);
  li.appendChild(button);

  button.onclick = function () {
    const div = this.parentElement;
    div.style.display = "none";
  };
}
