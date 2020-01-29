// store an object in local storage

const data = { name: "blake", age: 26 };

function setLocalStorageObject(obj, key) {
  if (typeof obj !== "object" || !key) {
    return;
  }
  localStorage.setItem(key.toString(), JSON.stringify(obj));
}

function getLocalStorageObject(key) {
  JSON.parse(localStorage.getItem(key));
}
