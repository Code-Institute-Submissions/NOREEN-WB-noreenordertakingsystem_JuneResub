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

const menus = [
  {
    id: 1,
    typeId: 1,
    name: "karahi",
    price: "500$",
  },
  {
    id: 2,
    typeId: 1,
    name: "Biryani",
    price: "300$",
  },
  {
    id: 3,
    typeId: 2,
    name: "chinnese Rice",
    price: "100$",
  },
  {
    id: 4,
    typeId: 3,
    name: "Beef Burger",
    price: "100$",
  },
  {
    id: 5,
    typeId: 3,
    name: "Chicken Burger",
    price: "100$",
  },
  {
    id: 6,
    typeId: 3,
    name: "Grill Burger",
    price: "100$",
  },
  {
    id: 2,
    typeId: 1,
    name: "Biryani",
    price: "300$",
  },
  {
    id: 2,
    typeId: 1,
    name: "Biryani",
    price: "300$",
  },
  {
    id: 2,
    typeId: 1,
    name: "Biryani",
    price: "300$",
  },
  {
    id: 2,
    typeId: 1,
    name: "Biryani",
    price: "300$",
  },
  {
    id: 2,
    typeId: 1,
    name: "Biryani",
    price: "300$",
  },
  {
    id: 2,
    typeId: 1,
    name: "Biryani",
    price: "300$",
  },
  {
    id: 2,
    typeId: 1,
    name: "Biryani",
    price: "300$",
  },
  {
    id: 2,
    typeId: 1,
    name: "Biryani",
    price: "300$",
  },
  {
    id: 2,
    typeId: 1,
    name: "Biryani",
    price: "300$",
  },
  {
    id: 2,
    typeId: 1,
    name: "Biryani",
    price: "300$",
  },
  {
    id: 2,
    typeId: 1,
    name: "Biryani",
    price: "300$",
  },
  {
    id: 2,
    typeId: 1,
    name: "Biryani",
    price: "300$",
  },
  {
    id: 2,
    typeId: 1,
    name: "Biryani",
    price: "300$",
  },
  {
    id: 2,
    typeId: 1,
    name: "Biryani",
    price: "300$",
  },
];

function getTraditional() {
  //function buildTable(){
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
  let trdArrs = [];
  for (let i = 0; i < menus.length; i++) {
    if (menus[i].typeId === 1) {
      trdArrs.push(menus[i]);
    }
  }
  console.log(trdArrs);
  for (trdArr of trdArrs) {
    let rowHtml = `
                    <tr class="fruit-row">
                            <td>${trdArr.id}</td>
                            <td>${trdArr.name}</td>
                            <td>${trdArr.price}</td>
                        </tr>
                    `;
    html += rowHtml;
  }
  html += `
            </tbody>
        </table>
    `;
  //return html;
  //}

  //let table = buildTable();

  document.getElementById("trd-div").innerHTML = html;
}

function getChineese() {
  //function buildTable(){
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
  let chnArrs = [];
  for (let i = 0; i < menus.length; i++) {
    if (menus[i].typeId === 2) {
      chnArrs.push(menus[i]);
    }
  }
  console.log(chnArrs);
  for (chnArr of chnArrs) {
    let rowHtml = `
                    <tr class="fruit-row">
                        <td>${chnArr.id}</td>
                        <td>${chnArr.name}</td>
                        <td>${chnArr.price}</td>
                    </tr>
                  `;
    html += rowHtml;
  }
  html += `
          </tbody>
      </table>
  `;
  //return html;
  //}

  //let table = buildTable();

  document.getElementById("trd-div").innerHTML = html;
}

function getFastFood() {
  //function buildTable(){
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
  let fstArrs = [];
  for (let i = 0; i < menus.length; i++) {
    if (menus[i].typeId === 3) {
      fstArrs.push(menus[i]);
    }
  }
  console.log(fstArrs);
  for (fstArr of fstArrs) {
    let rowHtml = `
                      <tr class="fruit-row">
                          <td>${fstArr.id}</td>
                          <td>${fstArr.name}</td>
                          <td>${fstArr.price}</td>
                      </tr>
                  `;
    html += rowHtml;
  }
  html += `
          </tbody>
      </table>
  `;
  //return html;
  //}

  //let table = buildTable();

  document.getElementById("trd-div").innerHTML = html;
}
