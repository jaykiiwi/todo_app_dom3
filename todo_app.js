const addItemButton = document.getElementById('myButton');
const addItemInput = document.getElementById('myInput');
const removeItemButton = document.getElementById('removeButton');
const listItems = document.getElementsByTagName('li');

for (let i = 0; i < listItems.length; i += 1) {
  listItems[i].addEventListener('mouseover', () => {
    listItems[i].textContent = listItems[i].textContent.toUpperCase();
  });

  listItems[i].addEventListener('mouseout', () => {
    listItems[i].textContent = listItems[i].textContent.toLowerCase();
  });
};


addItemButton.addEventListener('click', () => {
  //chooses all the <ul> elements, define the DOM order number in brackets
  let ul = document.getElementsByTagName('ul')[0];
  let newBullet = document.createElement('li');
  newBullet.textContent = addItemInput.value;
  //add new list item at the end of the list
  ul.appendChild(newBullet);
  //clears the input form text after clicking the button
  addItemInput.value = '';
  console.log("t55o55i88mii");
});

//this console logs the target element that has clicked, eg. ""<li> grapes </li>""
document.addEventListener('click', (event) => {
    console.log(event.target);
});

removeItemButton.addEventListener('click', () => {
  //chooses all the <ul> elements, define the DOM order number in brackets
  let ul = document.getElementsByTagName('ul')[0];
  //defines the list to process. Without ":last-child" will pick the first one. You can test this
  let bulletList = document.querySelector('li:last-child');
  //removes a list item
  ul.removeChild(bulletList);

});


//const addItemButton = document.querySelector('button.addTask');
//const addItemInput = document.querySelector('input.addTask');
