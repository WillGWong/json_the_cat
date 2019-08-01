const request = require('request');
let breedSearch = 'https://api.thecatapi.com/v1/breeds/search?q=' + process.argv[2];


request(breedSearch, (error, response, body) => {
  if (error) {
    return console.log("Failed to receive details", error);
  }

  let breedObject = JSON.parse(body);

  if (breedObject[0]) {
    console.log(breedObject[0]['description']);
  } else {
    console.log("Breed not found");
  }
});
