//display num in text box

function displayNum(num){
    console.log(num);
    i1.value+=num;
}



//clear the text box

function clearBox(){
    i1.value="";
}


//evaluate expression 

function evaluateExpression(){

    expression=i1.value;
    console.log(expression);
    output=eval(expression)
    i1.value=output

}

//clear each item

function removeLastItem(){
    currentExpression=i1.value;
    i1.value=currentExpression.slice(0,-1);
}