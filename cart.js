//JS File for cart page

let itemDetails = JSON.parse(localStorage.getItem("cart")) || [];

let Total_price = 0;

itemDetails.forEach(function (elem, index) {
  let tr = document.createElement("tr");
  let td1 = document.createElement("td");
  let img = document.createElement("img");
  img.setAttribute("src", elem.image);
  td1.append(img);

  let td2 = document.createElement("td");
  let p1 = document.createElement("p");
  p1.innerText = elem.name;
  let p2 = document.createElement("p");
  p2.innerText = "Style  " + elem.style;

  let p3 = document.createElement("p");
  p3.innerText = "Color: " + elem.color;

  let p4 = document.createElement("p");
  p4.innerText = "Size " + elem.size;

  let a1 = document.createElement("a");
  a1.setAttribute("href", "#");
  a1.setAttribute("id", "edit");
  a1.innerText = "Edit";
  td2.append(p1, p2, p3, p4, a1);

  let td3 = document.createElement("td");
  td3.setAttribute("class", "col3");

  td3.innerText = "$" + Number(elem.price);

  let td4 = document.createElement("td");
  td4.setAttribute("class", "col3");
  let qty = document.createElement("select");
  qty.setAttribute("class", "quantity_btn");

  let opt1 = document.createElement("option");
  opt1.setAttribute("value", 1);
  opt1.innerText = 1;
  let opt2 = document.createElement("option");
  opt2.setAttribute("value", 2);
  opt2.innerText = 2;
  let opt3 = document.createElement("option");
  opt3.setAttribute("value", 3);
  opt3.innerText = 3;
  let opt4 = document.createElement("option");
  opt4.setAttribute("value", 4);
  opt4.innerText = 4;
  let opt5 = document.createElement("option");
  opt5.setAttribute("value", 5);
  opt5.innerText = 5;
  let opt6 = document.createElement("option");
  opt6.setAttribute("value", 6);
  opt6.innerText = 6;
  let opt7 = document.createElement("option");
  opt7.setAttribute("value", 7);
  opt7.innerText = 7;
  let opt8 = document.createElement("option");
  opt8.setAttribute("value", 8);
  opt8.innerText = 8;
  let opt9 = document.createElement("option");
  opt9.setAttribute("value", 9);
  opt9.innerText = 9;
  let opt10 = document.createElement("option");
  opt10.setAttribute("value", 10);
  opt10.innerText = 10;

  let remove = document.createElement("a");
  remove.setAttribute("href", "#");
  remove.setAttribute("id", "remove");
  remove.innerText = "Remove";
  remove.addEventListener("click", function () {
    //T remove an item
    removeItem(index);
  });
  let br = document.createElement("br");

  qty.append(opt1, opt2, opt3, opt4, opt5, opt6, opt7, opt8, opt9, opt10);
  // qty.addEventListener("change",function(){
  //     getQquantity(T_price,td5.value)
  //     console.log(t_price)
  //         });

  td4.append(qty, br, remove);

  let td5 = document.createElement("td");
  td5.setAttribute("class", "col3");
  td5.setAttribute("id", "t_price");
  let price_div = document.createElement("div");
  let T_price = +elem.price;
  Total_price += T_price;
  price_div.innerText = "$" + T_price;

  let a2 = document.createElement("a");
  a2.setAttribute("href", "#");
  a2.innerText = "Save for Later";
  let br1 = document.createElement("br");

  td5.append(price_div, br1, a2);

  tr.append(td1, td2, td3, td4, td5);
  document.querySelector("table>tbody").append(tr);

  // For Showing all price

  document.querySelector("#sub_total").innerText = "$" + Total_price;

  document.querySelector("#shipping").innerText = "$" + 60;

  document.querySelector("#tax").innerText = "$0.00";

  document.querySelector("#total").innerText = "$" + (60 + Total_price);
});

localStorage.setItem("price", Total_price);
localStorage.setItem("total", 60 + Total_price);

function getQuantity(value, i) {
  let qty_value = value;
  console.log(qty_value);
}

// Function for removing items
function removeItem(index) {
  itemDetails.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(itemDetails));
  window.location.reload();
}

// For Applying promo code
document.querySelector("#promocode").addEventListener("change", getSiscount);
let dis = 0;
function getSiscount() {
  let promovalue = document.querySelector("#promo").value;
  // console.log(typeof(Total_price))
  let dis = 0;
  if (promovalue == "10") {
    dis = Total_price / 10;
    document.querySelector("#sub_total").innerText = "$" + (Total_price - dis);
    document.querySelector("#total").innerText = "$" + (Total_price - dis);
    alert(`Wow...! you got $${dis} Discount.`);
    console.log(typeof dis);
  } else if (promovalue == "20") {
    console.log(promovalue);
    dis = ((Total_price / 10) * 2).toFixed(2);
    document.querySelector("#sub_total").innerText = "$" + (Total_price - dis);
    document.querySelector("#total").innerText = "$" + (Total_price - dis);
    alert(`Wow...! you got $${dis} Discount.`);
    // console.log(typeof(dis))
  } else if (promovalue == "30") {
    dis = ((Total_price / 10) * 3).toFixed(2);
    document.querySelector("#sub_total").innerText = "$" + (Total_price - dis);
    document.querySelector("#total").innerText = "$" + (Total_price - dis);
    alert(`Wow...! you got $${dis} Discount.`);
    console.log(typeof dis);
  }
  localStorage.setItem("price", Total_price);
  localStorage.setItem("total", 60 + Total_price);
}
let quantity = document.querySelectorAll(".quantity_btn");
quantity.forEach(function (elem) {
  elem.addEventListener("change", function () {
    let selected = elem.value;
    console.log(selected);
    let prod_price = document.querySelector(".col3").innerText;
    console.log(prod_price);
  });
});

// For payment page

document.querySelector("#btn").addEventListener("click", proceedTopay);
function proceedTopay() {
  itemDetails = JSON.parse(localStorage.getItem("cart")) || [];
  let invoice = itemDetails;

  // window.location.href="payment.html"

  localStorage.setItem("invoice_details", JSON.stringify(invoice));
}
