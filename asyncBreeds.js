const fs = require('fs');

const breedDetailsFromFile = (breed, cb)=> {
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    if (!error) cb(data);
  });
};

// const printBreed = breed => {
//   console.log('Return Value: ', breed);
// };

// breedDetailsFromFile('Bombay', printBreed);

module.exports = breedDetailsFromFile