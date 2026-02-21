console.log("Script loaded");

let CartBody = document.getElementById("CartBody");
let Total = document.getElementById("Total");

let SendTheOrder = document.getElementById("SendTheOrder");
let UserLocation = document.getElementById("UserLocation");
let UserPhone = document.getElementById("UserPhone");
let UserName = document.getElementById("UserName");

let cart = localStorage.getItem("cart");
let CART = cart ? JSON.parse(cart) : [];

function renderCart() {
  if (!CartBody) return;

  CartBody.innerHTML = "";

  for (let i = 0; i < CART.length; i++) {
    let row = document.createElement("tr");
    let cell = [];

    for (let j = 0; j < 6; j++) {
      cell[j] = document.createElement("td");
      row.appendChild(cell[j]);
    }

    cell[0].innerText = CART[i].Title ?? "";
    cell[1].innerText = CART[i].name ?? "";
    cell[2].innerText = CART[i].quality ?? 0;
    cell[3].innerText = CART[i].Price ?? 0;
    cell[4].innerText = (CART[i].Price ?? 0) * (CART[i].quality ?? 0);

    cell[5].innerText = "Delete";
    cell[5].style.cursor = "pointer";

    cell[5].addEventListener("click", function () {
      CART.splice(i, 1);
      localStorage.setItem("cart", JSON.stringify(CART));
      renderCart();
      updateTotal();
    });

    CartBody.appendChild(row);
  }
}

function TotalResult() {
  let sum = 0;
  for (let m = 0; m < CART.length; m++) {
    sum += (CART[m].Price ?? 0) * (CART[m].quality ?? 0);
  }
  return sum;
}

function updateTotal() {
  if (!Total) return;
  Total.innerText = "المجموع هو: " + TotalResult() + " شيكل";
}



let OrderMsg = document.getElementById('OrderMsg')
let ModalBox = document.getElementById("ModalBox")

if (SendTheOrder) {
  SendTheOrder.addEventListener("click", function (e) {
    e.preventDefault();

    let name = UserName ? UserName.value.trim() : "";
    let phone = UserPhone ? UserPhone.value.trim() : "";
    let location = UserLocation ? UserLocation.value.trim() : "";

    if (name === "" || phone === "" || location === "") {
      alert("لو سمحت عبّي الاسم، رقم الهاتف، والموقع 🙏");
      return;
    }

    localStorage.setItem("Name", name);
    localStorage.setItem("Phone", phone);
    localStorage.setItem("Location", location);

    if (ModalBox && window.bootstrap) {
      let instance = bootstrap.Modal.getInstance(ModalBox);
      if (!instance) instance = new bootstrap.Modal(ModalBox);
      instance.hide();
    }


    if (OrderMsg) {
      OrderMsg.classList.remove("d-none");
      window.scrollTo({ top: 0, behavior: "smooth" });
      setTimeout(function () {
        OrderMsg.classList.add("d-none");
      }, 4000);
    }
  });
}


renderCart();
updateTotal();
