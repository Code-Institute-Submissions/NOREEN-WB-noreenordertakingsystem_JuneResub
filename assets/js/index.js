//  Orders Array
var orders = [];
var result = 0;
//onclick fucntion to get data from menu array
function onclick(id){
  //filter the menu array to get the dish that  user clicked on menu
  const item = menus.filter((x) => x.id === id);
  let a = item[0].price;
  var o = orders.find((x) => x.name == item[0].name);
}


// Type Array to differentiate menu
const type = [
  {
    id: 1,
    name: "Traditional",
  },
  {
    id: 2,
    name: "Chienese",
  },
  {
    id: 3,
    name: "Continental",
  },
];
// Menu Array to create menu
const menus = [
  {
    id: 1,
    typeId: 1,
    name: "karahi",
    price: 500,
  },
  {
    id: 2,
    typeId: 1,
    name: "Biryani",
    price: 150,
  },
  {
    id: 3,
    typeId: 1,
    name: "Pulao",
    price: 130,
  },
  {
    id: 4,
    typeId: 1,
    name: "Nihari",
    price: 190,
  },
  {
    id: 5,
    typeId: 1,
    name: "Haleem",
    price: 70,
  },
  {
    id: 6,
    typeId: 1,
    name: "Halwa Puri",
    price: 50,
  },
  {
    id: 7,
    typeId: 1,
    name: "Mutton Korma",
    price: 200,
  },
  {
    id: 101,
    typeId: 2,
    name: "chinnese Rice",
    price: 100,
  },
  {
    id: 102,
    typeId: 2,
    name: "vegitable Rice",
    price: 90,
  },
  {
    id: 103,
    typeId: 2,
    name: "Dumpling",
    price: 75,
  },
  {
    id: 104,
    typeId: 2,
    name: "Oyster",
    price: 200,
  },
  {
    id: 105,
    typeId: 2,
    name: "Prawn",
    price: 95,
  },
  {
    id: 106,
    typeId: 2,
    name: "Shrimps",
    price: 110,
  },
  {
    id: 201,
    typeId: 3,
    name: "Beef Burger",
    price: 80,
  },
  {
    id: 202,
    typeId: 3,
    name: "Chicken Burger",
    price: 60,
  },
  {
    id: 203,
    typeId: 3,
    name: "Grill Burger",
    price: 70,
  },
  {
    id: 204,
    typeId: 3,
    name: "BBQ-Pizza",
    price: 70,
  },
  {
    id: 205,
    typeId: 3,
    name: "Chicken Tikka Pizza",
    price: 70,
  },
  {
    id: 206,
    typeId: 3,
    name: "Jalapeño Loaded Pizza",
    price: 70,
  },
];
// Menu List for Traditonal Item's
function getTraditional() {
  let html = `
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
    <tbody>
  `;
  //loop through the menu array and get the traditional dishes from it - then send it for orderDetail array using onClick function

  for (let i = 0; i < menus.length; i++) {
    if (menus[i].typeId === 1) {
      let rowHtml = `
      <tr class="menus-row" onclick="clicked(${menus[i].id})">
        <td>${menus[i].id}</td>
        <td>${menus[i].name}</td>
        <td>${menus[i].price}</td>
      </tr>
    `;
      html += rowHtml;
    }
  }
  html += `
    </tbody>
    </table>
  `;

  document.getElementById("trd-div").innerHTML = html;
}
// Menu List for Chineese
function getChineese() {
  let html = `
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
    <tbody>
  `;
 //loop through the menu array and get the Chinese dishes from it - then send it for orderDetail array using onClick function

 for (let i = 0; i < menus.length; i++) {
  if (menus[i].typeId === 2) {
    let rowHtml = `
    <tr class="menus-row" onclick="clicked(${menus[i].id})">
      <td>${menus[i].id}</td>
      <td>${menus[i].name}</td>
      <td>${menus[i].price}</td>
    </tr>
  `;
    html += rowHtml;
  }
}
html += `
  </tbody>
  </table>
`;

document.getElementById("trd-div").innerHTML = html;
}
// Menu list for fastFood
function getFastFood() {
  let html = `
    <table class="table">
      <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
      </thead>
    <tbody>
  `;
//loop through the menu array and get the fastFood dishes from it - then send it for orderDetail array using onClick function

for (let i = 0; i < menus.length; i++) {
  if (menus[i].typeId === 3) {
    let rowHtml = `
    <tr class="menus-row" onclick="clicked(${menus[i].id})">
      <td>${menus[i].id}</td>
      <td>${menus[i].name}</td>
      <td>${menus[i].price}</td>
    </tr>
  `;
    html += rowHtml;
  }
}
html += `
  </tbody>
  </table>
`;

document.getElementById("trd-div").innerHTML = html;
}