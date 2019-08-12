const priceCalculator = require('../index');

describe('Book Price Calculator',function(){

    it('should return 0 for 0 book',function(){
        expect(priceCalculator([])).toBe(0)
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
    });

    describe('Different book that form a set',function(){
        it('should calculate price of 2 books',function(){
            expect(priceCalculator([1,1])).toEqual(15.2);
            expect(priceCalculator([2,2])).toEqual(30.4);
            expect(priceCalculator([5,5])).toEqual(76.0);
        })
        it('should calculate price of 3 books',function(){
            expect(priceCalculator([1,1,1])).toEqual(21.6);
        })
        it('should calculate price of 4 books',function(){
            expect(priceCalculator([1,1,1,1])).toEqual(25.6);
        })
        it('should calculate price of 5 books',function(){
            expect(priceCalculator([1,1,1,1,1])).toEqual(30);
            expect(priceCalculator([2,2,2,2,2])).toEqual(60);
            expect(priceCalculator([5,5,5,5,5])).toEqual(150);
        })
    });

    describe('Different book that form a set with additional books',function(){
        it('should calculate price of 2 books',function(){
            expect(priceCalculator([1,2])).toEqual(23.2);
            expect(priceCalculator([2,1])).toEqual(23.2);
        })
        it('should calculate price of 3 books',function(){
            expect(priceCalculator([2,1,1])).toEqual(29.6);
            expect(priceCalculator([3,2,1])).toEqual(44.8);
        })
        it('should calculate price of 4 books',function(){
            expect(priceCalculator([2,1,1,4])).toEqual(56.8);
            expect(priceCalculator([3,2,1,1])).toEqual(48.8);
        })
        it('should calculate price of 5 books',function(){
            expect(priceCalculator([2,2,2,1,1])).toEqual(51.6);
            expect(priceCalculator([3,2,2,1,1])).toEqual(59.6);
        })
    })
    
});