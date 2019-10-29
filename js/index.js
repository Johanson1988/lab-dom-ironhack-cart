var rowsNumber = 2;

function deleteItem(event){
  let parent = event.currentTarget.parentNode.parentNode;
  console.log(parent);

  let grandParent = parent.parentNode;
  grandParent.removeChild(parent);

  rowsNumber--;
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

function createNewItemRow(){
  let wrapper = document.createElement('div');
  wrapper.setAttribute('class', 'wrapper');
  let newName = document.getElementById('new-product-name').value;
  let newPrice = document.getElementById('new-product-price').value;
  let newNameField = document.createElement('span');
  newNameField.innerHTML = newName;
  let newPriceField = document.createElement('span');
  newPriceField.innerHTML = newPrice;
  wrapper.appendChild(newNameField);
  wrapper.appendChild(newPriceField);
  document.getElementById('big-container').appendChild(wrapper);
  console.log(newName,newPrice);
  console.log(wrapper);



}

function createNewItem(){
  rowsNumber++;
  createNewItemRow();


}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  var inputFields = document.getElementsByClassName('input-quantity');
  var inputsArray = [...inputFields];

  inputsArray.forEach(input => input.addEventListener('change', (e) => {
    let index = (e.currentTarget.className);
    let price = document.querySelector('span.'+index ).innerHTML;
    updatePriceByProduct(price,index);
  }));

  
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }



  calculatePriceButton.addEventListener('click', getTotalPrice);
};