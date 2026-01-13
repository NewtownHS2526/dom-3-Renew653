const button1 = document.getElementById("sticker");
const button2 = document.getElementById("keychain");
const button3 = document.getElementById("plush");
const button4 = document.getElementById("comic");
const button5 = document.getElementById("mystery");
const totalamount = document.getElementById("total-span");
const cart = document.getElementById("shopping-cart");


function addsticker () {
    totalamount.textContent = Number(totalamount.textContent) + 0.50;
    cart.textContent = cart.textContent + " sticker ";
}
function addkeychain () {
    totalamount.textContent = Number(totalamount.textContent) + 1.50;
        cart.textContent = cart.textContent + " keychain ";
}
function addplush () {
    totalamount.textContent = Number(totalamount.textContent) + 4.00;
        cart.textContent = cart.textContent + " plush ";
}
function addcomic () {
    totalamount.textContent = Number(totalamount.textContent) + 2.75;
        cart.textContent = cart.textContent + " comic ";
}
function addmystery () {
    totalamount.textContent = Number(totalamount.textContent) + 3.25;
        cart.textContent = cart.textContent + " mystery ";
}


button1.addEventListener("click", addsticker);
button2.addEventListener("click", addkeychain);
button3.addEventListener("click", addplush);
button4.addEventListener("click", addcomic);
button5.addEventListener("click", addmystery);