/*create unique ID */
function createUniqueID(lengthOfUniqueID = 10) {
    let uniqueID = '';
    let characters = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890';
  
    // create uniqueID
    for(let i = 0; i < lengthOfUniqueID; i+=1) {
        uniqueID += characters.charAt(Math.round(Math.random()  * characters.length));
    }

    return uniqueID;
}

// createUniqueID();

/*Add items to wishlist*/
    /* wishlist input*/
    let addItemInput = document.querySelector('.add-item__input');
    addItemInput.addEventListener('keyup', addItemToWishList);
    
    
    /*add button*/
    let addItemButton = document.querySelector('.add-item__button');
    // addItemButton.addEventListener('click', addItemToWishList);
    

function addItemToWishList(uniqueID) {
    
    console.log(uniqueID)
    console.log(arguments)

    /* wishlist input value*/
    let addItemInputValue = addItemInput.value;
    // console.log(addItemInputValue);

/*Document fragment*/
    let itemFragment = new DocumentFragment();
    
    /*item container */
    let itemContainer = document.createElement('div');
    itemContainer.classList.add('item-container');
    itemContainer.id = uniqueID;
    // add item to itemFragment
    itemFragment.appendChild(itemContainer);


    /*item name*/
    let itemName = document.createElement('span');
    itemName.classList.add('item-name');
    itemName.textContent = `${addItemInputValue}`;
    // add to itemFragment
    itemContainer.appendChild(itemName);

    /*item delete btn*/
    itemDeleteBtn = document.createElement('button');
    itemDeleteBtn.classList.add('item-delete-btn');
    itemDeleteBtn.textContent = '×';
    // add btn to itemFragment
    itemContainer.appendChild(itemDeleteBtn);

    let itemContainerHr = document.createElement('hr');
    itemContainerHr.classList.add('item-container-hr');
   
    itemFragment.appendChild(itemContainerHr)


    /*append item fragment into the DOM on click */
    let items = document.querySelector('.items');
    // items.appendChild(itemFragment)
    // if()
    addItemButton.onclick = function() {
        items.appendChild(itemFragment);
    }
    
}

addItemToWishList('xyz');


/*TODO (X - means task done)
1. create ability to add items to the wishlist - X
- 0.1: get input & the inputs value on user input - X
- 0.2: create a document fragment thats identical to - X
the item in list example(below) - X
- 0.3: create a function that creates unique user ID's - X
- 0.4: append the document frag of the item into the DOM - X

2. create ability to delete items create in wishlist

3. create ability to search for items in your wishlist
-----
-----
OPTIONAL EXTRA THINGS

4. make all the header text & text of added items editable
- https://www.w3schools.com/tags/att_global_contenteditable.asp
- https://www.w3schools.com/jsref/prop_html_iscontenteditable.asp

5. save the items saved on the wish list w/ local storage / cookies

6.sort drop down that lets you sort by alphabetically & other ways

7. reorder items by dragging them w/ the mouse

8. ✔️ item deleted X --> at the top of the screen
      when an item is successfully deleted
*/


/* *Item in list example*

<div class="item-container" id="item-abD342aZx">
    <span class="item-name">item name</span>
    <button class="item-delete-btn">&times;</button>
</div>
    <hr>

*/