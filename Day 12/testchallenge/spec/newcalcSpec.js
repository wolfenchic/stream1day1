describe("Extra calculator functions", function() {
    describe("Area function", function() {
        it("should return 314.16 for a circle with radius 10", function() {
            expect(areaOfCircle(10)).toBe(314.16);
        });
        it("should return 78.54 for a circle with radius 5", function() {
            expect(areaOfCircle(5)).toBe(78.54);
        });
        it("should return error if value is not a number", function(){
            expect(areaOfCircle("circle")).toBe("error");
        });
    });
    
    describe("Square Root function", function() {
        it("should return 3 for square root of 9", function() {
            expect(squareRoot(9)).toBe(3);
        });
        
        it("should return error if value is not a number", function(){
            expect(squareRoot("square")).toBe("error");
        });
    });
    
  describe("Square Me function", function() {
        it("should return 9 as the square of 3", function() {
            expect(squareMe(3)).toBe(9);
        });
        it("should return error if value is not a number", function(){
            expect(squareMe("box")).toBe("error");
        });
        
   describe("Cube Me function", function() {
        it("should return 27 as the cube of 3", function() {
            expect(cubeMe(3)).toBe(27);
        });
        it("should return error if value is not a number", function(){
            expect(cubeMe("box")).toBe("error");
        });
    });
 
   describe("Triangle Me function", function() {
        it("should return 100 as the area of triangle", function() {
            expect(triangleMe(5)).toBe(100);
        });
        it("should return error if value is not a number", function(){
            expect(triangleMe("box")).toBe("error");
        });
    });
    
    describe("The Year function", function() {
        it("should return 2 years until 2018", function() {
            expect(whatYear(2016)).toBe(2);
        });
   
   });
   
});

});
