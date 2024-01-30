const getTheTitles = function(books) {
    let arrayTitles = [];

    books.forEach(book => {
        arrayTitles.push(book.title);
        
    });

    return arrayTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
