/*Add items to wishlist*/

// function addItemsToWishList(itemName, itemID) {
    
// }

// addItemsToWishList();
    /* wishlist input*/
    let addItemInput = document.querySelector('.add-item__input');
    addItemsDisplay.addEventListener('keyup', addItemToWishList);

    
    /*add button*/
    let addItemButton = document.querySelectorAll('.add-item__button');
    addItemsDisplay.addEventListener('click', addItemToWishList);

function addItemToWishList() {
    /* wishlist input*/
    
    /*add button*/
}


/*TODO
1. create ability to add items to the wishlist
- 0.1: get input & the inputs value on user input
- 0.2: create a document fragment that identical to
the item in list example
- 0.3: create a function that creates unique user ID's
- 0.4: append the document frag of the item into the DOM

2. create ability to delete items create in wishlist

3. create ability to search for items in your wishlist
-----
OPTIONAL EXTRA THINGS

4. make all the header text & text of added items editable
- https://www.w3schools.com/tags/att_global_contenteditable.asp
- https://www.w3schools.com/jsref/prop_html_iscontenteditable.asp

5. save the items saved on the wish list w/ local storage / cookies

6.sort drop down that lets you sort by alphabetically & other ways

7. reorder items by dragging them w/ the mouse
*/


/* *Item in list example*

<div class="item-container" id="item-abD342aZx">
    <span class="item-name">item name</span>
    <button class="item-delete-btn">&times;</button>
</div>
    <hr>

*/