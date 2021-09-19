//Get values from fizz and buzz from the user 
//start the controller function

function getValues() {

    //get the user values from the page 
    let fizzValue = document.getElementById('fizzValue').value; 
    let buzzValue = document.getElementById('buzzValue').value; 

//parse for intergers 
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue); 

//check that the numbers are intergers 

if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {
    
    //we call fizzbuzz 
    let fbArray = fizzbuzz(fizzValue,buzzValue);


    //call displayData and write the values to the screen
    displayData(fbArray);


} else {
    alert("You must enter in a interger "); 
}

}      

// do fizz buzz function 
function fizzbuzz(fizzValue, buzzValue) {

    let returnArray = [];


    //initialize return array 

    // loop from 1 to 100
    for (let i = 1; i <= 100; i++) {
       
        if (i % fizzValue == 0 && i % buzzValue == 0 ) {
            rerturnArray.push('FizzBuzz');
        } else if (i % fizzValue == 0) {
            returnArray.push('fizz')
        } else if ( i % buzzValue  == 0) {

            returnArray.push('Buzz');   
        } else{
            returnArray.push(i);

        }

        
        
    }

    //we need to check the current in three steps
    // check to see if its divisble by both 
    // if so push fizzbuzz in array and not the number 

    //check to see if divisble by fizzValue 
    //if so push fizz into array and not the number 


    //check to see if divisble by buzz value
    // if so push bush into array and not the number 

    //finally if none are divislbe push number into array 


   return returnArray; 
    


}

//loop over the array and create a tablerow for each item.
function displayData() {

    //get the table body element from the page
    let tableBody = document.getElementById('results ');

    //get the template itself 

    let templateRow = document.getElementById('fbTemplate');

// clear the table first 
tableBody.innerHTML = '';

for (let index = 0; index < fbArray.length; index+= 5) {
    
    let tableRow = document.importNode(templateRow.content, true);

    //grab use the to put into array

    let rowcols = tableRow.querSelectorAll('td');
    rowcols[0].textContent=fbArray[index];
    rowcols[1].textContent=fbArray[index+1];
    rowcols[2].textContent=fbArray[index+2];
    rowcols[3].textContent=fbArray[index+3];
    rowcols[4].textContent=fbArray[index+4];
    
    tableBody.appendChild(tableRow);
}

    //add all the rows to the table 
}

 








