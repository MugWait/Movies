const url = 'https://api.themoviedb.org/3/movie/338953/videos?api_key=f639f65f6181ccd718a300c8ea30d293&language=en-EN'

const data = fetch(url)
      .then((res) => res.json())
      .then((data) => data


//        setMovies(data.results);
      );

console.log(data)

//const url = 'https://api.themoviedb.org/3/movie/610150/watch/providers?api_key=f639f65f6181ccd718a300c8ea30d293'
//fetch(url)
//      .then((res) => res.json())
//      .then((data) => {
//        console.log(data.results);
////        setMovies(data.results);
//      });
