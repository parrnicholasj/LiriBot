require("dotenv").config();

const Spotify = require("node-spotify-api");

var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);

var userRequest = process.argv[2];

var userItem = process.argv[3];

if (userRequest == "spotify-this-song")
{

  console.log(userItem);

  spotify
  .search({ type: 'track', query: userItem, limit: 1 })
  .then(function(response) {

    //need .artists[0].name for artists
    //.name
    //.artists[0].external_urls.spotify


    console.log(JSON.stringify(response.tracks.items[0].artists[0].external_urls.spotify));
  })
  .catch(function(err) {
    console.log(err);
  });

}