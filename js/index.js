function deleteItem(event){
  
  debugger;
  var clickedButton = event.currentTarget;
  var itemId = clickedButton.id.split('_')[1];
  var productToDelete = document.querySelector('#' + itemId);
  productToDelete.remove();
  getTotalPrice();
}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {

  var products = document.querySelectorAll('.product-wrapper');
  var totalOfAllEle = document.querySelector('#total-of-all');
  var totalOfAllPrices = 0;

  products.forEach(function(oneProduct) {
    var unitCostEle = oneProduct.querySelector('span.unit-cost');
    var quantityEle = oneProduct.querySelector('.quantity input');
    var totalPriceEle = oneProduct.querySelector(".total-price");
    var unitCost = unitCostEle.innerHTML;
    var quantity = quantityEle.value;
    var totalPrice = parseFloat(unitCost) * quantity;
    totalOfAllPrices += totalPrice;
    totalPriceEle.innerHTML = '$'+totalPrice.toFixed(2);
  });
  totalOfAllEle.innerHTML = '$'+ totalOfAllPrices;
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

  var main = document.querySelector('main');

  var uid = generateUniqueId();

  var divNode   = document.createElement('div');
  divNode.setAttribute('class','product-wrapper');
  divNode.setAttribute('id',`${uid}`);

  
  
  var productElement = `
  
        <span class='product-name'>${itemName}</span>
        <p>
          <span>$</span><span class='unit-cost'>${itemUnitPrice.toFixed(2)}</span>
        </p>
        <div class='quantity quantity-wrapper'>
          <form>
            <label for="quantity">Quantity</label>
            <input type="number" name='quantity'>
          </form>
        </div>
        <div class='price-wrapper'>
          <span class='total-price'></span>
        </div>
        <div class='btn-wrapper'>
          <button class='btn-delete btn' id='delete_${uid}'>Delete</button>
        </div>
  `;

  divNode.innerHTML = productElement;
  main.appendChild(divNode);
  
}

function createNewItem(event){
  event.preventDefault();
  var newItemName = document.querySelector('#new-item-name').value;
  var newItemPrice = parseFloat(document.querySelector('#new-item-price').value);
  var deleteButtons = document.getElementsByClassName('btn-delete');
  
  createNewItemRow(newItemName, newItemPrice);
  addDeleteListeners(deleteButtons);
}

function addDeleteListeners(deleteButtonsList) {
  for(var i = 0; i<deleteButtonsList.length ; i++){
    deleteButtonsList[i].onclick = deleteItem;
  }
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  addDeleteListeners(deleteButtons);


};