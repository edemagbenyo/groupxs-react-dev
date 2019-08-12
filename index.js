function priceCalculator(books) {
  if (books.length > 1) {
    let discount = 1;
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
    let price = 0;
    let min = Math.min(...books);
    if (books.every(i => i == min)) {
      price += 8 * (1 - discount) * min * books.length;
    }
    for (let i = 0; i < books.length; i++) {}
    return price;
  } else if (books.length == 1) {
    return 8 * books[0];
  }
  return 0;
}

module.exports = priceCalculator;
