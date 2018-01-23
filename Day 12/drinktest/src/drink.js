
function whatCanIDrink(number1) {
   if(number1==0){
    return "incorrect age";
    } else if(number1 < 14){
    return "Drink Toddy"
    } else if(number1 < 18){
    return "Drink Coke"
    } else if(number1 < 21){
    return "Drink Beer"
    }else if(number1 < 130){
    return "Drink Whiskey"
    } else {
        return "Sorry, Incorrect"
    }
}