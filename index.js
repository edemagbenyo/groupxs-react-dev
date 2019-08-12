function priceCalculator(books){
    if(books.length==2){
        for (let i = 0; i < books.length; i++) {
            
        }
    }else if(books.length==1){
        return 8 * books[0];
    }
    return null;
}

module.exports = priceCalculator;