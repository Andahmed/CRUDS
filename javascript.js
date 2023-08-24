let title = document.getElementById("title");
let price = document.getElementById("price");
let taxes = document.getElementById("taxes");
let ads = document.getElementById("ads");
let discount = document.getElementById("discount");
let total = document.getElementById("total");
let count = document.getElementById("count");
let category = document.getElementById("category");
let submit = document.getElementById("submit");




// get total

function getTotal() {
  if (price.value != "") {
    let result = +price.value + +taxes.value + +ads.value + -discount.value;
    total.innerHTML = result;
    total.style.background = "green";
  } else {
    total.innerHTML = "";
    total.style.background = "brown";
  }
}




// create product
let datapro;
if(localStorage.product !=null) {
  datapro = JSON.parse(localStorage.product)
  
  
}else{
let datapro = [];
}
submit.onclick=(eo) => {
  let newpro = {
    title:title.value,
    price:price.value,
    taxes:taxes.value,
    ads:ads.value,
    discount:discount.value,
    total:total.innerHTML,
    count:count.value,
    category:category.value,
  }
  datapro.push(newpro)
  localStorage.setItem('product',JSON.stringify(datapro))
  console.log(datapro)
}






















// save local
// clear inputs
// red
// count
// delete
// update
// search
// clean date
