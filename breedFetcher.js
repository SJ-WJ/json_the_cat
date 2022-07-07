const request = require('request');
const breedName = process.argv.slice(2);
const url = `https://api.thecatapi.com/v1/breeds/search/?q=${breedName}`;

request(url, (error, response, body) => {
  
  //Edge Case: Request Failed (example: incorrect spelling in url)
  if (error) {
    console.log(`Your request has failed.`);
    return;
  }
  
  //Edge Case: Breed Not Found
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log(`The ${breedName} you requested does not exist.`);
    return;
  }
  console.log("Description:", data[0].description);
 
});