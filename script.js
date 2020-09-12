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
    let itemContainer = document.createElement('li');
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





// function searchWishList() {
//     let inputValue = searchListInput.value;

//     let listOfItemText = itemNames.map((item) => {
//        return item.textContent;
//     }, []);

//     let listOfItems = itemNames.map((item) => {
//         return item.parentElement;
//      }, []);

//     let filterInput = listOfItemText.filter((item) => {
        
//         for(let i = 0; i < inputValue.length; i+=1) {
//             let itemLetter = item.substr(i, 1);

//             let findItemCharacter = inputValue.indexOf(item.substr(0, 1));

//             if(findItemCharacter !== -1) {
//                 // display the item-container 
//                 console.log(itemLetter)
//             } 
//         }
//     });
// }

// searchWishList();


function searchWishlist() {
    let filter = searchListInput.value.toLowerCase();
    // console.log(filter)
    let itemsAll = Array.from(document.querySelectorAll('.item-container'));
    let itemsAllText = itemsAll;
    

    for(let i = 0; i < itemsAll.length; i+=1)  {
        let txtValue = itemNames[i].textContent
        || itemNames[i].innerText;

        if(txtValue.toLowerCase().indexOf(filter) > -1) {
            itemsAll[i].style.display = '';
        } else {
            itemsAll[i].style.display = 'none';
            
        }
    }
    
}

   
/*Event Listeners */
    /*add items*/
    addItemInput.addEventListener('keyup', function(event){
        addItemToWishList(event, this, createUniqueID());
    });

    /*Delete items*/
    items.addEventListener('click', deleteItemsFromWishList);
    

    /*Search wishList*/
    searchListInput.addEventListener('keyup', searchWishlist);
        



/*TODO (X - means task done)
-----
Current task / problem : 

-----
1. create ability to add items to the wishlist - X

2. create ability to delete items create in wishlist X

3. create ability to search for items in your wishlist X

-----
-----
-----
OPTIONAL EXTRA THINGS

4. save the items saved on the wish list w/ local storage / cookies
- https://web.dev/storage-for-the-web/

5. make all the header text & text of added items editable
- https://www.w3schools.com/tags/att_global_contenteditable.asp
- https://www.w3schools.com/jsref/prop_html_iscontenteditable.asp

*/
