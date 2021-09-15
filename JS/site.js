//Get values from fizz and buzz from the user 
//start the controller function

function getValutes() {

    //get the user values from the page 
    let fizzValue = document.getElementById('fizzValue').value; 
    let buzzValue = document.getElementById('buzzValue').value; 

//parse for intergers 
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue); 

//check that the numbers are intergers 

if (Number.isInterger(fizzValue) && Number.isInteger(buzzValue)) {
    
    //we call fizzbuzz 
    let fbArray = fizzbuzz(fizzValue,buzzValue);


    //call displayData and write the values to the screen


} else {
    alert("You must enter in a interger "); 
}

}      

// do fizz buzz function 
function fizzbuzz(fizzValue, buzzValue) {

    let rerturnArray = [];


    //initialize return array 

    // loop from 1 to 100
    for (let index = 1; index <= 100; index++) {
       
        if (i % fizzValue == 0 && i buzzValue == 0 ) {
            rerturnArray.push('FizzBuzz');
        } else if (i % fizzValue == 0) {
            
            returnArray.push('fizz');

        } else if ( i % buzzValue  == 0) {

            returnArray.push('Fizz');

            
        } else{
            returnArray.push(i);

        }

        returnArray.push(i);
        
    }

    //we need to check the current in three steps

    // check to see if its divisble by both 

    // if so push fizzbuzz in array and not the number 

    //check to see if divisble by fizzValue 
    //if so push fizz into array and not the number 


    //check to see if divisble by buzz value
    // if so push bush into array and not the number 

    //finally if none are divislbe push number into array 


    returnarray; 
    


}


function displayData() {


}

 








