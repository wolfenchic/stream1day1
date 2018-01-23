describe("whatCanIDrink", function() {
    
    
describe("Age function", function() {
    it("incorrect age",function(){
    expect(whatCanIDrink(0)).toBe("incorrect age");
});

    it("Drink Toddy",function(){
    expect(whatCanIDrink(13)).toBe("Drink Toddy");
});

    it("Drink Coke",function(){
    expect(whatCanIDrink(17)).toBe("Drink Coke");
});

    it("Drink Beer",function(){
    expect(whatCanIDrink(20)).toBe("Drink Beer");
});

    it("Drink Whiskey",function(){
    expect(whatCanIDrink(129)).toBe("Drink Whiskey");

});

});
});