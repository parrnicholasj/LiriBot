require("dotenv").config();

var axios = require("axios");

var moment = require('moment');

const Spotify = require("node-spotify-api");

var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);

var userRequest = process.argv[2];

var userItem = process.argv.slice(3).join(" ");

if (userRequest == "spotify-this-song")
{

  console.log(userItem);

  spotify
    .search({ type: 'track', query: userItem, limit: 1 })
    .then(function (response)
    {

      //need .artists[0].name for artists
      //.name
      //.artists[0].external_urls.spotify
      //.album.name
      console.log(`artist: ${response.tracks.items[0].artists[0].name}`);

      console.log(`song: ${response.tracks.items[0].name}`);

      console.log(`album: ${response.tracks.items[0].album.name}`);

      console.log(`link: ${response.tracks.items[0].artists[0].external_urls.spotify}`);

      //console.log(JSON.stringify(response.tracks.items[0].album.name));
    })
    .catch(function (err)
    {
      console.log(err);
    });

}

if (userRequest == "concert-this")
{

  //.venue
  //.datetime


  var artist = userItem;

  axios.get(`https://rest.bandsintown.com/artists/${artist}/events?app_id=codingbootcamp`)
    .then(function (response)
    {

      console.log(`name of venue: ${response.data[0].venue.name}`);
      console.log(`location of venue: ${response.data[0].venue.city} in ${response.data[0].venue.country}`)
      console.log(`date: ${moment(response.data[0].datetime).format("MM/DD/YYYY")}`);

      //console.log(response.data[0]);
    })
    .catch(function (error)
    {
      console.log(error);
    });

}

if (userRequest == "movie-this")
{



  var title = userItem;

  axios.get(`http://www.omdbapi.com/?t=${title}&apikey=trilogy`)
    .then(function (response)
    {

      console.log(`title: $`);
      console.log(`year: `);
      console.log(`IMDB: `);
      console.log(`tomatoes: `);
      console.log(`country: `);
      console.log(`language: `);
      console.log(`plot: `);
      console.log(`cast: `);
      
      console.log(response.data.Ratings);
    })
    .catch(function (error)
    {
      console.log(error);
    });

}