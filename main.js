// variable of the main form in HTML
let form = document.querySelector('#addForm');
//variable of the list items
let itemList = document.querySelector('#items');
// variable of the filter input
let filter = document.querySelector('#filter');



//form submit Event

form.addEventListener('submit', sub_event);
// don't forget the event type we should use


// Delete the created item
itemList.addEventListener('click',removeItem);


// filter the element
filter.addEventListener('keyup', filterItem);

// Add item


function sub_event(e){
    e.preventDefault();
    // GEt the input value
    let addItem = document.querySelector('#item').value;
    // adding a new list item 
    
    let li = document.createElement('li');
    /* adding a class to the carated li 
    to make it the same like the rest list items*/
    li.className = 'list-group-item';
    // adding the text node value from the input and append it to the list item 
    
    li.appendChild(document.createTextNode(addItem));
    // adding the delete button to the created list item
    
    let deleteBtn = document.createElement('button');
    //adding the delete button classes 
    
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    //adding the x to the delete tutton
    
    deleteBtn.appendChild(document.createTextNode('x'));
    // apending the delete button to the created element
    
    li.appendChild(deleteBtn);
    // append the created list item to the parent ul

    
    
    itemList.appendChild(li);

};


//Remove item

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            let li = e.target.parentElement;
            itemList.removeChild(li);

        };
    };
};

// filter items

function filterItem(e){

    //converting the text into the lowercase to avoide the case sensitive
    let filter_text = e.target.value.toLowerCase();

    // get the list 
    items = itemList.getElementsByTagName('li');


    /*  converting the html collection of the item list into
    an array to loop through every element and finding the 
    matching text in the list and compare it with the filter 

    */
    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent;
        // i forget the fucken t in the textContent!!!
        
        if(itemName.toLowerCase().indexOf(filter_text) != -1){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        };


    })
    
}
