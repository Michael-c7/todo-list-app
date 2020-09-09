/*create unique ID */
function createUniqueID() {
    let lengthOfUniqueID = 10;
    let uniqueID;
    /*can be any letter upper
    or lower case &
    any number 1-9 */
    let str = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890';
    for(let i = 0; i < str.length; i++) {
        // get 10 random characters and put them into a string
        // from str w/out mutating the string
        // slice
        // console.log(str[i]);
    }

    // random number 0 - 62
    let randomNumber = Math.round(Math.random()  * str.length);
    console.log(randomNumber)

}

createUniqueID();


/*Add items to wishlist*/
    /* wishlist input*/
    let addItemInput = document.querySelector('.add-item__input');
    addItemInput.addEventListener('keyup', addItemToWishList);
    
    
    /*add button*/
    let addItemButton = document.querySelector('.add-item__button');
    addItemButton.addEventListener('click', addItemToWishList);
    

function addItemToWishList(uniqueID) {
    /* wishlist input value*/
    let addItemInputValue = addItemInput.value;
    // console.log(addItemInputValue);

/* document fragment*/
    let itemFragment = new DocumentFragment();
    
    /*item container */
    let itemContainer = document.createElement('div');
    itemContainer.classList.add('item-container');
    // itemContainer.id.add(`${uniqueID}`);
    // add item to itemFragment
    itemFragment.appendChild(itemContainer)


    /*item name*/
    let itemName = document.createElement('span');
    itemName.classList.add('item-name');
    itemName.textContent = `${addItemInputValue}`;
    // add to itemFragment
    itemContainer.appendChild(itemName);

    /*item delete btn*/
    itemDeleteBtn = document.createElement('button');
    itemDeleteBtn.classList.add('item-delete-btn');
    itemDeleteBtn.textContent = '&times;';
    // add btn to itemFragment
    itemContainer.appendChild(itemDeleteBtn);

    let itemContainerHr = document.createElement('hr');
    itemContainerHr.classList.add('item-container-hr');
   
    itemFragment.appendChild(itemContainerHr)
    console.log(itemFragment);

    /*append item fragment to DOM on click */
    
}


addItemToWishList('aX450iLpmX');


/*TODO
1. create ability to add items to the wishlist
- 0.1: get input & the inputs value on user input
- 0.2: create a document fragment thats identical to
the item in list example(below)
- 0.3: create a function that creates unique user ID's
- 0.4: append the document frag of the item into the DOM

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
*/


/* *Item in list example*

<div class="item-container" id="item-abD342aZx">
    <span class="item-name">item name</span>
    <button class="item-delete-btn">&times;</button>
</div>
    <hr>

*/