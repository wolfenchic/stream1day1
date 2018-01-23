describe("FizzBuzz", function() {
    
    it("Should return FizzBuss if divisble by both 3 and 5 function",function(){
    expect(FizzBuzz(15)).toBe("FizzBuzz");
});

    it("should return Fizz if divisible by 3",function(){
    expect(FizzBuzz(9)).toBe("Fizz");
});

    it("should return Buzzzz if divisible by 5",function(){
    expect(FizzBuzz(25)).toBe("Buzz");
});

it("should return the number if no number",function(){
    expect(FizzBuzz(22)).toBe(22);
});

});