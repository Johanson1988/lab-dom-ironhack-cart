function deleteItem(event){

}

function getPriceByProduct(itemNode){
  return itemNode.value;
}

function updatePriceByProduct(productPrice, index){
  let newPrice = document.querySelector('p.'+index );  
  productPrice = parseFloat(productPrice.split('$').join(''));
  let quantity = document.querySelector('input.'+index).value;
  newPrice.innerHTML = parseFloat(productPrice) * parseInt(quantity) + '$'; 
}

function getTotalPrice() {
  let arrayPrices = document.querySelectorAll('.price');
  let totalPrice = 0;
  arrayPrices.forEach(price => {
    let priceClean = parseFloat(price.innerHTML.split('$').join(''));
    totalPrice += priceClean;
  });
  console.log(totalPrice);
  document.getElementById('total-price').innerHTML = totalPrice + ' $';
  
}

function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(){

}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  var inputFields = document.getElementsByTagName('input');
  var inputsArray = [...inputFields];

  inputsArray.forEach(input => input.addEventListener('change', (e) => {
    let index = (e.currentTarget.className);
    let price = document.querySelector('span.'+index ).innerHTML;
    updatePriceByProduct(price,index);
  }));

  /*calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
  */



  calculatePriceButton.addEventListener('click', getTotalPrice);
};