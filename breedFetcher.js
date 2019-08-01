const request = require('request');


const fetchBreedDescription = function(breedSearch, callback) {
  let breedName = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedSearch
  request(breedName, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }

    let breedObject = JSON.parse(body);

    if (breedObject[0]) {
      callback(null, breedObject[0]['description']);
    } else {
      callback(error, "Breed not found");
    }
  });
};

module.exports = fetchBreedDescription;