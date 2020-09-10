/*Global variables */
let addItemInput = document.querySelector('.add-item__input');
let addItemButton = document.querySelector('.add-item__button');
let items = document.querySelector('.items');


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





/*add the item to the wish list */
function addItemToWishList() {
    // arguments[2] is the uniqueID
 

    /* wishlist input value*/
    let addItemInputValue = addItemInput.value;
    // console.log(addItemInputValue);

/*Document fragment*/
    let itemFragment = new DocumentFragment();
    
    /*item container */
    let itemContainer = document.createElement('div');
    itemContainer.classList.add('item-container');
    itemContainer.id = arguments[2];
    // add item to itemFragment
    itemFragment.appendChild(itemContainer);


    /*item name*/
    let itemName = document.createElement('span');
    itemName.classList.add('item-name');
    itemName.textContent = addItemInputValue;
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
    addItemButton.onclick = function() {
        items.appendChild(itemFragment);
    } 
}





function deleteItemsFromWishList(event) {
    if(event.target.closest('button.item-delete-btn')) {
        let itemContainer = event.target.parentElement;
        // hr below the item container
        let itemContainerHr = event.target.parentElement.nextElementSibling;

        itemContainer.remove();
        itemContainerHr.remove();
    }
}




   
/*Event Listeners */
    /*add items*/
    addItemInput.addEventListener('keyup', function(event){
        addItemToWishList(event, this, createUniqueID());
    });

    /*Delete items*/
    items.addEventListener('click', deleteItemsFromWishList);
    

    






/*TODO (X - means task done)
-----
Current task / problem : 

-----
1. create ability to add items to the wishlist - X

2. create ability to delete items create in wishlist X

3. create ability to search for items in your wishlist
- 3.1 : 
-----
-----
OPTIONAL EXTRA THINGS

4. make all the header text & text of added items editable
- https://www.w3schools.com/tags/att_global_contenteditable.asp
- https://www.w3schools.com/jsref/prop_html_iscontenteditable.asp

5. save the items saved on the wish list w/ local storage / cookies
- https://web.dev/storage-for-the-web/
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