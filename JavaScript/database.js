// JavaScript Document

let myMovies = [
    {
    title: "Avengers: End Game",
    hasWatched: true,
    rating: 5
    },
    {
    title: "It: Chapter 2",
    hasWatched: false,
    rating: 3   
    },
    {
    title: "The Equalizer 2",
    hasWatched: true,
    rating: 4
    }
]

myMovies.forEach(function(movie) {
    let result = "You have ";
    if (movie.hasWatched) {
      result += "watched ";
    } else {
      result += "not seen ";
    }
    result += "\"" + movie.title + "\" - "
    result += movie.rating + " stars.";
    console.log(result);
})