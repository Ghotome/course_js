"use strict";


let initQuestions = {
    userName: prompt('Как вас зовут?', ''),
    watchhedFilms: +prompt('Сколько фильмов вы уже посмотрели?', ''),
    watchedMovieLast: prompt('Какой фильм посмотрели последним?', ''),
    watchedMovieLastStars: +prompt('Какую  оценку дадите?', ''),
    watchedMovieLast2: prompt('Какой фильм посмотрели за ним?', ''),
    watchedMovieLastStars2: +prompt('Какую  оценку дадите этому фильму?', ''),
    isPrivate: confirm('Сделать ответы публичными или нет?')
};

let personalMovieDB = {};
personalMovieDB[initQuestions.userName] = {
    count: initQuestions.watchhedFilms,
    movies: {},
    actors: {},
    genres: {},
    private: initQuestions.isPrivate
};

personalMovieDB[initQuestions.userName].movies[initQuestions.watchedMovieLast] = initQuestions.watchedMovieLastStars;
personalMovieDB[initQuestions.userName].movies[initQuestions.watchedMovieLast2] = initQuestions.watchedMovieLastStars2;

console.log(`All users DB:  ${JSON.stringify(personalMovieDB)}`);
console.log(`Current user answers:  ${JSON.stringify(personalMovieDB[initQuestions.userName])}`);