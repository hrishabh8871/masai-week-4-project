/*function addStock() {
    var getItem = document.getElementById('inputItem').value;
    var getQuantity = document.getElementById('inputQuantity').value;
    console.log(typeof(getItem))
    console.log(getItem);
    var numberQuantity = Number(getQuantity);
    console.log(typeof(numberQuantity));
    console.log(numberQuantity);
    
}*/

/*var item = [
    {
      name: "rice",
      quantity: 250,
    },
    {
      name: "floor",
      quantity: 1000,    
    },
    {
      name: "pulse",
      quantity: 200,    
    },
    {
      name: "sugar",
      quantity: 150,    
    },
    {
        name: "rajma",
        quantity: 300,
    }
  ]*/

/*var rice = new item("rice", 250);
var floor = new item("floor", 1000);
var maze = new item("maze", 200);
var pulse = new item("pulse", 1250);
var sugar = new item("sugar", 150);
var rajma = new item("rajma", 1500);
var groundnut = new item("groundnut", 1300);
var dryfruits = new item("dryfruits", 800);*/

/*console.log(rice)
console.log(floor)
console.log(maze)
console.log(pulse)
console.log(sugar)
console.log(rajma)
console.log(groundnut)
console.log(dryfruits)*/


/*function seeStock () {
    var getItem = document.getElementById('inputItem').value;
    var getQuantity = document.getElementById('inputQuantity').value;
    var ptagParent = document.querySelector('p');
    item.forEach(function(item) {
      var ptag = document.createElement('p');
      ptag.innerHTML = (item["name"] + " : " + item["quantity"]);
      ptagParent.appendChild(ptag);    
      ptag.style.color = '#ffff';
      console.log(getItem)
   
    

})
}*/

var itemName = ['rice' , 'floor' , 'pulse' , 'sugar' , 'rajma'];
var itemPrice = [250 , 1000, 200, 150, 300];
function addStock () {
    var getItem = document.getElementById('inputItem').value;
    for(var i = 0; i < itemName.length; i++){
        if(itemName[i] === getItem) {
            var getNewPrice = document.getElementById('inputQuantity').value;
            var numberGetNewPrice =  Number(getNewPrice)
            itemPrice[i] = itemPrice[i] + numberGetNewPrice;
            var showPrice = itemPrice[i];

        }
       

    }
    var addNote = document.createElement('h2');
    var addNoteParent = document.querySelector('p');
    addNote.innerHTML = "Successfull Updated Stock! New Stock of " + getItem + ": " + showPrice + "kg";
    addNote.style.color = '#ffff';
    addNoteParent.appendChild(addNote); 

}


function removeStock () {
    var getItem = document.getElementById('inputItem').value;
    for(var i = 0; i < itemName.length; i++){
        if(itemName[i] === getItem) {
            var getNewPrice = document.getElementById('inputQuantity').value;
            var numberGetNewPrice =  Number(getNewPrice)
            itemPrice[i] = itemPrice[i] - numberGetNewPrice;
            var showPrice = itemPrice[i];

        }
       

    }
    var addNote = document.createElement('h2');
    var addNoteParent = document.querySelector('p');
    if(showPrice < 100) {
        addNote.innerHTML = "This Product is High in Demand You Have To Purchase Now.";
        addNote.style.color = 'red'; 
        addNote.style.background = 'black';       
    }
    else {
        addNote.innerHTML = "Successfull Updated Stock! New Stock of " + getItem + ": " + showPrice + "kg";
        addNote.style.color = '#ffff';
        
    }
    
    
    addNoteParent.appendChild(addNote); 

}

function showStock () {
    for(var i = 0; i < itemName.length; i++) {
        var addNote = document.createElement('h2');
        var addNoteParent = document.querySelector('p');
        addNote.innerHTML = itemName[i] + " :" + itemPrice[i] + "kg";
        addNote.style.color = '#ffff';
        addNoteParent.appendChild(addNote);         
    }
}

function createItem () {
    var createItemName = document.createElement('input');
    var createItemNameParent = document.querySelector('p');
    createItemName.setAttribute("id" , "newGetName");
    var createItemQuantity = document.createElement('input');
    var createItemQuantityParent = document.querySelector('p');
    createItemQuantity.setAttribute("id" , "newGetQuantity");
    createItemNameParent.appendChild(createItemName);
    createItemQuantityParent.appendChild(createItemQuantity);
    var createSubmitBtn = document.createElement('button');
    var createSubmitBtnParent = document.querySelector('p');
    createSubmitBtn.innerHTML = "Add New Items";    
    createSubmitBtnParent.appendChild(createSubmitBtn);
    createSubmitBtn.setAttribute('id' , 'button');
    var actionSubmitBtn = document.getElementById("button");
    actionSubmitBtn.addEventListener('click', getNewData);



}
function getNewData () {
    var getNewItemName = document.getElementById("newGetName").value;
    var getNewItemQuantity = document.getElementById("newGetQuantity").value;
    /*console.log(typeof(getNewItemName))
    console.log(typeof(getNewItemQuantity))
    console.log(getNewItemName);
    console.log(getNewItemQuantity);*/
    var numberGetNewItemQuantity = Number(getNewItemQuantity);
    console.log(typeof(numberGetNewItemQuantity));
    console.log(numberGetNewItemQuantity);
    /*itemName.push[getNewItemName];*/
    itemName[itemName.length] = getNewItemName;
    console.log(numberGetNewItemQuantity)
    /*itemPrice.push[numberGetNewItemQuantity];*/
    itemPrice[itemPrice.length] = numberGetNewItemQuantity;
    console.log(itemPrice)
    console.log(itemName);
    var addNew = document.createElement('option');
    var addNewParent = document.querySelector('select')
    addNew.innerHTML = getNewItemName;
    addNewParent.appendChild(addNew);
}
