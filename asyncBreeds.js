const fs = require('fs');

const breedDetailsFromFile = function(breed, callback) {
  
  console.log('breedDetailsFromFile: Calling readFile...');
  
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log('--------------')
    if (!error) callback(data);
  });
  
};

breedDetailsFromFile('Bombay', (txt) => console.log('Breed Details:', txt));