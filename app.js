// Basic structure

// (function () {

//   // some private variables and functions

//   return {
//   // some public variables and functions
//   }

// })();

// get button change-text
document.getElementById("change-text").addEventListener("click", () => {
  UICtrl.callChangeText();
})

// Standard module pattern
const UICtrl = (function () {
  let textData = "Some interisting piece of text data";

  const changeText = function () {
    document.querySelector("h1").textContent = textData;
  }

  return {
    callChangeText: function () {
      changeText();
      console.log("callChangeText() works!");
    }

  }

})();

// Revealing module pattern
const itemCtrl = (function () {

  let data = [];

  function add(item) {
    data.push(item);
    console.log("Data: ", item, "added to array: ", data);
  }

  function get(id) {
      return data.find(item => {
        return item.id === id;
      });
    }

  return {
    add: add,
    get: get
  }

})();

itemCtrl.add({
  id: 1,
  name: "first element"
});
itemCtrl.add({
  id: 2,
  name: "second element"
});

console.log(itemCtrl.get(1));
