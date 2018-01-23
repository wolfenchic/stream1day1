function FizzBuzz(number1) {
   if(number1 % 3 === 0 && number1 % 5 === 0){
       return "FizzBuzz";
} else if (number1 % 3 === 0){
    return "Fizz";
} else if (number1 % 5 === 0){
    return "Buzz";
} else {
    return number1;
}
    
}