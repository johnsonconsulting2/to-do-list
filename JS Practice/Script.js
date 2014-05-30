//----------------------------------------------------------THIS IS A TO DO LIST---------------------------------------------------------------------

//I am going to have my buttons click and interact with the the mouse

"use strict";
var clicker = document.getElementById("addData");  //I put my button and id into a var
var deleter = document.getElementById("deleteButton"); //var for delete button

var elementOnListArr = []; // this is designed to hold the new items on the list and allow them to have ids.

clicker.onclick = function () {  //when user clicks, function executes
    "use strict";
    elementOnListArr.push(document.getElementById("items").value);  //pushing the elemnts of the array onto the end of the array
    printArray(elementOnListArr);  //calling a function not yet written-out so that the function I'm currently in knows to go to the yet-undefined function and execute it.
    document.getElementById("items").value = "";

}

var printArray = function (passedInArr) {  //designed to print out the list
    "use strict";
    document.getElementById("listItem").innerHTML = "";  //clears out extra list items
    
    for (var i = 0; i < passedInArr.length; i++) { //loops through list and assigns it a checkbox
        document.getElementById("listItem").innerHTML +=
            "<li id='listedItems" + i + "'>" + "<input type='checkbox' id='check" + i + "' onChange='striker("+i+")'/>" + passedInArr[i] + "</li>";
    }
}
 
var striker = function (i) {
    "use strict";
    //this is designed to strike-through whatever checkbox is chosen
    document.getElementById("listedItems" + i).style.textDecorationLineThrough = true; //this simply needs to be set to "true."
}

deleter.onclick = function () {
    "use strict";
    var uncheckedItems = []; //created empty array to hold items that were not struck-through
    for (var i = 0; i < elementOnListArr.length; i++) { //walking through original array to see which ones are struck-through
        if (!document.getElementById("listedItems" + i).style.textDecorationLineThrough) {
            uncheckedItems.push(elementOnListArr[i]); //if not struck-through, push unchecked items into the new array.
        }
    }
    
    "use strict";
    elementOnListArr = uncheckedItems; //this passes the value of new array into the original array
    printArray(elementOnListArr); //call printArray again

}