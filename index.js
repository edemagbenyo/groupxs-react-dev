function priceCalculator(books) {
    let price = 8;
    if (books.length > 1) {
      let discount = 1;
      //Get the discount based on the number of books
      switch (books.length) {
        case 2:
          discount = 0.05;
          break;
        case 3:
          discount = 0.1;
          break;
        case 4:
          discount = 0.2;
          break;
        case 5:
          discount = 0.25;
          break;
        default:
          discount = 1;
      }
      //Get the minimum number of book in the set
      let min = Math.min(...books);
      if (books.every(i => i == min)) {
        return price * (1 - discount) * min * books.length;
      }else{
        //Calculate the price of all different book in a set
        let sameBookPrice = (price * (1 - discount) * min * books.length);

        //Remove the book with the lowest number from the book set
        books.splice(books.indexOf(min),1);

        //Reduce the number of the book by the number 
        let reducedBooks = books.map(i=>i-min);

        return sameBookPrice + priceCalculator(reducedBooks);
      }
      
    } else if (books.length == 1) {
        //Get the price of one book sample
      return price * books[0];
    }
    return 0;
  }
  

module.exports = priceCalculator;
