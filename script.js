window.addEventListener("load", () => {
  const form = document.querySelector("#todo-form");
  const todo_items_list = document.querySelector(".todo-items");
  const input_ele = document.querySelector("#add-todo-item");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const entered_item = input_ele.value;
    console.log("Form Submitted", entered_item);
    if (!entered_item) {
      alert("Please Enter an Item ");
      return;
    }
    const new_item = document.createElement("div");
    new_item.classList.add("todo-item");
    const inp = document.createElement("input");
    inp.classList.add("todo-item-text");
    inp.value = entered_item;
    inp.readOnly = true;
    const edit_btn = document.createElement("button");
    edit_btn.classList.add("edit");
    edit_btn.innerText = "Edit Item";
    const del_btn = document.createElement("button");
    del_btn.classList.add("delete");
    del_btn.innerText = "Delete Item";
    new_item.appendChild(inp);
    new_item.appendChild(edit_btn);
    new_item.appendChild(del_btn);
    todo_items_list.appendChild(new_item);
    input_ele.value = "";

    del_btn.addEventListener("click", () => {
      todo_items_list.removeChild(new_item);
    });

    edit_btn.addEventListener("click", () => {
      if (edit_btn.innerText.toLowerCase() === "edit item") {
        inp.removeAttribute("readonly");
        inp.focus();
        edit_btn.innerText = "Save Item";
      } else {
        inp.setAttribute("readonly", "readonly");
        edit_btn.innerText = "Edit Item";
      }
    });
  });
});
