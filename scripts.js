let form = document.querySelector('form');
form.addEventListener('submit', e => {
    e.preventDefault();
    let output = document.querySelector('output');
    let firstNum = document.querySelector('#first-num').value;
    let secondNum = document.querySelector('#second-num').value;
    let operator = document.querySelector('#operator').value;
    // Try doing the calculation on the given input
    try{
        output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
    }
    // If there is an error, catch it, log that an error occured and send it to console
    catch (error) {
        console.log("Sadly an error happened my friend");
        console.error(error);
    }
    // Show that it took place.
    finally{
        console.log("Calculated or Error shown.")
    }
});

let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));

//Console Log Button
errorBtns[0].addEventListener("click", function(){
    console.log("You pressed console log button");
});

//Console Error button
errorBtns[1].addEventListener("click", function(){
    console.error("You caused an error :P ");
});

//Console Count Button
errorBtns[2].addEventListener("click", function(){
    console.count("Count Button: ");
});

//Console Warn Button
errorBtns[3].addEventListener("click", function(){
    console.warn("This is a warning!");
});

// Console Assert Button
errorBtns[4].addEventListener("click", function(){
    let x = 1;
    let y = 2;
    console.assert(x == y, {x, y}, "The numbers are not equal");
});

// Console Clear Button
errorBtns[5].addEventListener("click", function(){
    console.clear();
});

// Console Dir Button
errorBtns[6].addEventListener("click", function(){
    console.dir(document.getElementById("calculate"));
});

// Console dirxml Button
errorBtns[7].addEventListener("click", function(){
    console.dirxml(document.getElementById("calculate"));
});

// Console Group Start Button
errorBtns[8].addEventListener("click", function(){
    console.group("You can add elements to the group");
});

// Console Group End Button
errorBtns[9].addEventListener("click", function(){
    console.groupEnd();
});

// Console Table Button
errorBtns[10].addEventListener("click", function(){
    let table = [
        {number: 1, alphabet: "a"},
        {number: 2, alphabet: "b"},
        {number: 3, alphabet: "c"},
        {number: 4, alphabet: "d"}
    ]
    console.table(table);
});

// Start Timer BUtton
errorBtns[11].addEventListener("click", function(){
    console.time();
});

// End Timer BUtton
errorBtns[12].addEventListener("click", function(){
    console.timeEnd();
});

// Console Trace Button
errorBtns[13].addEventListener("click", function(){
    function first(){
        second();
    }
    function second(){
        third();
    }
    function third(){
        console.trace();
    }
    first();
});



// Trigger a Global Error
class MyError extends Error{
    constructor(){
        super();
        this.name = "MyError";
    }

}

errorBtns[14].addEventListener("click", () => {
    throw new MyError("Global Error");
});

window.onerror = function(message, source, lineno, colno, error){
    console.log(error);
    return true;
}