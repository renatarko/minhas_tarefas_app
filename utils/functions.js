// adding the task on localstorage
export const storeDoing = (doing) => {
  localStorage.setItem("doing", JSON.stringify(doing));
};

export const storeDone = (done) => {
  localStorage.setItem("done", JSON.stringify(done));
};

//removing of the localstorage
export const storeRemoveTodo = (todo) => {
  localStorage.setItem("todo", JSON.stringify(todo));
};

export const storeRemoveDoing = (doing) => {
  localStorage.setItem("doing", JSON.stringify(doing));
};

export const storeRemoveDone = (done) => {
  localStorage.setItem("done", JSON.stringify(done));
};
