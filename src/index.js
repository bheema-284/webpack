document.querySelector('#myForm').addEventListener('submit', addItem);
var arr = JSON.parse(localStorage.getItem('todoList')) || [];
displayTable(arr);
var Number = 1;
function addItem(event) {
  event.preventDefault();

  var name = document.querySelector('#name').value;
  var qty = document.querySelector('#qty').value;
  var priority = document.querySelector('#priority').value;
  var todoObj = {
    itemNum: Number++,
    itemName: name,
    itemQty: qty,
    itemPriority: priority,
  };

  arr.push(todoObj);

  console.log(arr);

  localStorage.setItem('todoList', JSON.stringify(arr));

  displayTable(arr);
}
function displayTable() {
  document.querySelector('tbody').innerHTML = '';
  //   var tbody = document.querySelector("tbody")
  // tbody.textContent=""
  arr.map(function (elem, index) {
    var row = document.createElement('tr');
    var td5 = document.createElement('td');
    td5.textContent = elem.itemNum;
    var td1 = document.createElement('td');
    td1.textContent = elem.itemName;
    var td2 = document.createElement('td');
    td2.textContent = elem.itemQty;
    var td3 = document.createElement('td');
    td3.textContent = elem.itemPriority;
    if (elem.itemPriority == 'high') {
      td3.style.backgroundColor = 'red';
      td3.style.color = 'white';
    } else if (elem.itemPriority == 'medium') {
      td3.style.backgroundColor = 'orange';
      td3.style.color = 'white';
    } else if (elem.itemPriority == 'low') {
      td3.style.backgroundColor = 'green';
      td3.style.color = 'white';
    }
    var td4 = document.createElement('td');
    td4.textContent = 'Delete';
    td4.style.backgroundColor = 'teal';
    td4.style.color = 'white';
    td4.addEventListener('click', function () {
      deleteTask(index);
    });

    row.append(td5, td1, td2, td3, td4);

    document.querySelector('tbody').append(row);
  });
}
function deleteTask(event) {
  console.log(event.target.parentNode);
  event.target.parentNode.remove();
}
function deleteTask(index) {
  arr.splice(index, 1);
  localStorage.setItem('todoList', JSON.stringify(arr));
  displayTable(arr);
}
//  function number(event) {
//     console.log(event.target.parentNode);
//     event.target.parentNode.Number();
//   }


