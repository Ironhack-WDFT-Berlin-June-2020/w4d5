const express = require('express');
const app = express();
// needed to register the partials
const handlebars = require('hbs');


const allMovies = require('./movies.json');
// console.log(movies);

app.use(express.static('public'));

handlebars.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    // const movies = <our database access>
    res.render('index', { movies: allMovies });
})

// app.get('/godfather', (req, res) => {
//     const godfather = movies.find(movie => movie.title === 'The Godfather');
//     console.log(godfather);
//     res.render('movie', { movie: godfather });
// })

app.get('/movies', (req, res) => {
    // res.send(req.query.title);
    const movies = allMovies.filter(movie => movie
        .title
        .toLowerCase()
        .includes(req.query.title.toLowerCase())
    );
    console.log(movies);
});

app.get('/movies/:title', (req, res) => {
    // console.log(req.params);
    const movie = allMovies.find(movie => movie.title === req.params.title);
    // console.log(movie);
    res.render('movie', { movie: movie });
})

app.listen(3000);