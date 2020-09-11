/*Global variables */
let addItemInput = document.querySelector('.add-item__input');
let addItemButton = document.querySelector('.add-item__button');
let items = document.querySelector('.items');
let itemNames = Array.from(document.querySelectorAll('.item-name'));
let searchListInput = document.querySelector('.search-list');

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





function searchWishList() {
    let inputValue = searchListInput.value;
    // console.log(inputValue)

    /*items text*/
    let listOfItemText = itemNames.map((item) => {
       return item.textContent;
    }, []);

    /*items */
    let listOfItems = itemNames.map((item) => {
        return item.parentElement;
     }, []);
    //  console.log(listOfItems)
    // console.log(listOfItemText)

    // filter item text
    let filterInput = listOfItemText.filter((item) => {
        
        for(let i = 0; i < inputValue.length; i+=1) {
            let itemLetter = item.substr(i, 1);

            let findItemCharacter = inputValue.indexOf(item.substr(0, 1));

            if(findItemCharacter !== -1) {
                // display the item-container 
                console.log(itemLetter)
              
            } 

        }
        // console.log(item.substr(0,1));
    });
    // search text --> itemLetter


}
// searchWishList();

   
/*Event Listeners */
    /*add items*/
    addItemInput.addEventListener('keyup', function(event){
        addItemToWishList(event, this, createUniqueID());
    });

    /*Delete items*/
    items.addEventListener('click', deleteItemsFromWishList);
    

    /*Search wishList*/
    searchListInput.addEventListener('keyup', searchWishList);
        



/*TODO (X - means task done)
-----
Current task / problem : 

-----
1. create ability to add items to the wishlist - X

2. create ability to delete items create in wishlist X

3. create ability to search for items in your wishlist
- 3.1 : get all the item names X 
- 3.2 : create a function to search though them X
- 3.3 : displaying items that match the search,
        hiding the items that don't.
- 3.4 : update the list each time you type in the search this list.

-----
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
