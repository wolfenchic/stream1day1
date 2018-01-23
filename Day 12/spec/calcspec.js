describe("Calculator", function() {
    
    beforeEach(function() {
    calc = new Calculator();
    });
   
    describe("Addition function", function() {
        it("should add two numbers together and return the result", function(){
            calc.add(2);
            calc.add(2);
            expect(calc.value).toBe(4);
        });
        
        it("should not return 4 if the numbers don't add up to 4", function() {
            calc.add(20);
            calc.add(22);
            expect(calc.value).toBe(42);
        });
        
        it("should have called the alert function if we don't give a number", function() {
            spyOn(window, "alert");
            calc.add("Beeblebrox");
            expect(window.alert).toHaveBeenCalledWith("Argument must be a number"
            );
        });
        
        });
        describe("Subtract function", function() {
            it("should subtract one number from the other and return the result", function() {
                calc.sub(10);
                calc.sub(5);
                expect(calc.value).toBe(5);
            });
            
            it("should not return 5 if the subtract result doesn't equal 5", function() {
                calc.sub(15);
                calc.sub(6);
                expect(calc.value).toBe(9);
                
            });
            
            it("should have called the alert function if we don't give a number", function() {
            spyOn(window, "alert");
            calc.add("Beeblebrox");
            expect(window.alert).toHaveBeenCalledWith("Argument must be a number"
            );
        });
       
    });

    describe("Multiplication function", function() {
        it("should multiply two numbers together and return the result", function(){
            calc.multiply(2);
            calc.multiply(2);
            expect(calc.value).toBe(4);
          });
          
     it("should not return 4 if the numbers don't add up to 4", function() {
            calc.multiply(4);
            calc.multiply(10);
            expect(calc.value).toBe(40);
        });
    
     it("should have called the alert function if we don't give a number", function() {
            spyOn(window, "alert");
            calc.multiply("Beeblebrox");
            expect(window.alert).toHaveBeenCalledWith("Argument must be a number"
            );
        
 });
 
});

    describe("Division function", function() {
        it("should divide one number by another number and return the result", function(){
            calc.divide(16);
            calc.divide(2);
            expect(calc.value).toBe(8);
          });
          
     it("should not return 4 if the numbers don't add up to 4", 
     function() {
            calc.divide(15);
            calc.divide(0);
            expect(calc.value).toBe(15);
        });
        
    it("Don't try to divide by zero!", function() {
            spyOn(window, "alert");
            calc.divide(0);
            expect(window.alert).toHaveBeenCalledWith("Don't try to divide by zero!"
            );
        });
    
     it("should have called the alert function if we don't give a number", function() {
            spyOn(window, "alert");
            calc.divide("Infinity");
            expect(window.alert).toHaveBeenCalledWith("Argument must be a number"
            );
            


});

});

});

