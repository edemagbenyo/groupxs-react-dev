const priceCalculator = require('../index');

describe('Book Price Calculator',function(){

    it('should return null for 0 book',function(){
        expect(priceCalculator([])).toBe(null)
    })
    describe('Same book',function(){
        it('should calculate price of 1 book',function(){
            expect(priceCalculator([1])).toBe(8)
        })
        it('should calculate price of 2 books',function(){
            expect(priceCalculator([2])).toBe(16)
        })
        it('should calculate price of 3 books',function(){
            expect(priceCalculator([3])).toBe(24)
        })
        it('should calculate price of 4 books',function(){
            expect(priceCalculator([4])).toBe(32)
        })
        it('should calculate price of 5 books',function(){
            expect(priceCalculator([5])).toBe(40)
        })
    })
    
});