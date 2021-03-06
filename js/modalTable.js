function generate_table() {

  $('#cartModal').empty();
  $('#cartModal').html("Customer Name: " + name);
  // get the reference for the body
  var body = document.getElementById("cartModal");

  // creates a <table> element and a <tbody> element
  var tbl     = document.createElement("table");
  var tblBody = document.createElement("tbody");

	// first row
	var row = document.createElement("tr");
	var cell = document.createElement("td");
	var cellText = document.createTextNode("Product");
	cell.appendChild(cellText);
	row.appendChild(cell);
	var cell = document.createElement("td");
	var cellText = document.createTextNode("Quantity");
	cell.appendChild(cellText);
	row.appendChild(cell);
  var cell = document.createElement("td");
  var cellText = document.createTextNode("Price ($)");
  cell.appendChild(cellText);
  row.appendChild(cell);
  var cell = document.createElement("td");
  var cellText = document.createTextNode("");
  cell.appendChild(cellText);
  row.appendChild(cell);
  var cell = document.createElement("td");
  var cellText = document.createTextNode("");
  cell.appendChild(cellText);
  row.appendChild(cell);
  tblBody.appendChild(row);

  // creating all cells
  for (var item in cart) {
    // creates a table row
    var row = document.createElement("tr");

      var cell = document.createElement("td");
      var cellText = document.createTextNode(item);
      cell.appendChild(cellText);
      row.appendChild(cell);
      var cell = document.createElement("td");
      var cellText = document.createTextNode(cart[item]['quantity']);
      cell.appendChild(cellText);
      row.appendChild(cell);
      var cell = document.createElement("td");
      var cellText = document.createTextNode(products[item].price*cart[item]['quantity']);
      cell.appendChild(cellText);
      row.appendChild(cell);
      var cell = document.createElement("td");
      var button = document.createElement("input");
      button.type = "button";
      button.value = "+";
      button.onclick = add_scopepreserver(item);
      cell.appendChild(button);
      row.appendChild(cell);
      var cell = document.createElement("td");
      var button = document.createElement("input");
      button.type = "button";
      button.value = "-";
      button.onclick = remove_scopepreserver(item);
      cell.appendChild(button);
      row.appendChild(cell);
    //}

    // add the row to the end of the table body
    tblBody.appendChild(row);
  }

	// Last Row - Total Price
	var row = document.createElement("tr");
	var cell = document.createElement("td");
	var cellText = document.createTextNode("Total Price: $"+totalPrice );
	cell.colSpan = 5;
	cell.appendChild(cellText);
	row.appendChild(cell);
	tblBody.appendChild(row);

  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  body.appendChild(tbl);
  // sets the border attribute of tbl to 2;
  tbl.setAttribute("border", "2");
}

function editTable(order) {
  $('#editModal').empty();
  $('#editModal').html("Order " + order._id + "<br> Customer Name: " + order.name);

  var body = document.getElementById("editModal");
  var orderPrice = 0;

  // creates a <table> element and a <tbody> element
  var tbl     = document.createElement("table");
  var tblBody = document.createElement("tbody");

  // first row
  var row = document.createElement("tr");
  var cell = document.createElement("td");
  var cellText = document.createTextNode("Product");
  cell.appendChild(cellText);
  row.appendChild(cell);
  var cell = document.createElement("td");
  var cellText = document.createTextNode("Quantity");
  cell.appendChild(cellText);
  row.appendChild(cell);
  var cell = document.createElement("td");
  var cellText = document.createTextNode("Price ($)");
  cell.appendChild(cellText);
  row.appendChild(cell);
  var cell = document.createElement("td");
  var cellText = document.createTextNode("");
  cell.appendChild(cellText);
  row.appendChild(cell);
  var cell = document.createElement("td");
  var cellText = document.createTextNode("");
  cell.appendChild(cellText);
  row.appendChild(cell);
  tblBody.appendChild(row);

  // creating all cells
  for (var item in order.cart) {
    // creates a table row
    var row = document.createElement("tr");

      var cell = document.createElement("td");
      var cellText = document.createTextNode(item);
      cell.appendChild(cellText);
      row.appendChild(cell);
      var cell = document.createElement("td");
      var cellText = document.createTextNode(order.cart[item]['quantity']);
      cell.appendChild(cellText);
      row.appendChild(cell);
      var cell = document.createElement("td");
      var cellText = document.createTextNode(products[item].price*order.cart[item]['quantity']);
      cell.appendChild(cellText);
      row.appendChild(cell);
      var cell = document.createElement("td");
      var button = document.createElement("input");
      button.type = "button";
      button.value = "+";
      button.onclick = add_scopepreserver(item);
      cell.appendChild(button);
      row.appendChild(cell);
      var cell = document.createElement("td");
      var button = document.createElement("input");
      button.type = "button";
      button.value = "-";
      button.onclick = remove_scopepreserver(item);
      cell.appendChild(button);
      row.appendChild(cell);
    //}

    // add the row to the end of the table body
    tblBody.appendChild(row);

    orderPrice += products[item].price*order.cart[item]['quantity'];
  }

  // Last Row - Total Price
  var row = document.createElement("tr");
  var cell = document.createElement("td");
  var cellText = document.createTextNode("Total Price: $" + orderPrice );
  cell.colSpan = 5;
  cell.appendChild(cellText);
  row.appendChild(cell);
  tblBody.appendChild(row);

  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  body.appendChild(tbl);
  // sets the border attribute of tbl to 2;
  tbl.setAttribute("border", "2");
}

function add_scopepreserver(product) {
  return function () {
    addToCart(product);
    document.getElementById("cartModal").innerHTML = "Customer Name: " + name;
    generate_table();
  };
}

function remove_scopepreserver(product) {
  return function () {
    removeFromCart(product);
    document.getElementById("cartModal").innerHTML = "Customer Name: " + name;
    generate_table();
  };
}
