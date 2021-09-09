//Get values from the page
//start the controller function

function getValutes() {

    let fizzValue = document.getElementById('fizzValue').value; 
    let buzzValue = document.getElementById('buzzValue').value; 


    startValue = parseInt(fizzValue);
    endValue = parseInt(buzzValue); 


    if (Number.isInteger(fizzValue ) && Number.isInteger(buzzValue));

        let numbers = generateNumbers(fizzValue, buzzValue);

        displayNumbers(numbers); 

        else {
            alert("You must type in a number"); 
            
}

}      








