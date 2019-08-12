const priceCalculator = require('../index');

describe('Book Price Calculator',function(){

    it('should return null for 0 book',function(){
        expect(priceCalculator([])).toBe(null)
    })
    it('should calculate price of 1 book',function(){
        expect(priceCalculator([{book1:1}])).toBe(true)
    })
    it('should calculate price of 2 books',function(){
        expect(priceCalculator([{book2:1}])).toBe(true)
    })
    it('should calculate price of 3 books',function(){
    
    })
    it('should calculate price of 4 books',function(){
    
    })
    it('should calculate price of 5 books',function(){
    
    })
});