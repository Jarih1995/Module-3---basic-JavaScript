const MyFavoriteMovie = {
    title: "Puff the Magic Dragon",
    duration: 30,
    stars: ["Puff", "Jackie", "Living Sneezes."]
};

const movieInformation = function(movie){
    console.log(movie.title + "for" + movie.duration + "minutes.")
    console.log("It stars" + movie.stars.join(", "));
}

movieInformation(MyFavoriteMovie);
