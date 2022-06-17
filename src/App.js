import { useEffect, useState } from "react";
import "./assets/css/main.css";
import "./assets/css/media_query.css";
import "./assets/css/reset.css";
import "./assets/css/variable.css";
import "./App.css";
import MoviesBox from "./MoviesBox";
import Baner from "./assets/images/51fe6c3efe58ac6b97bca8929a9c07.jpg";
import HBO from "./assets/images/HBO-Logo-square.jpg";
import Vikins from "./assets/images/vikins.jpg";
import Got from "./assets/images/got.jpg";
import BBC from "./assets/images/bbcamerica.jpg";
import Planet from "./assets/images/planet.jpg";
import Scifi from "./assets/images/sci-fi.jpg";
import Crime from "./assets/images/crime.jpg";
import Animated from "./assets/images/animated.jpg";
import Adventure from "./assets/images/adventure.jpg";
import Horror from "./assets/images/horror.jpg";
import Thriller from "./assets/images/thriller.webp";
import Comedy from "./assets/images/comedy.jpg";
import Action from "./assets/images/action.jpg";
import Logo from "./assets/images/logo.png";

const API_URL ="https://api.themoviedb.org/3/movie/popular?api_key=f639f65f6181ccd718a300c8ea30d293";
// const API_SEARCH="https://api.themoviedb.org/3/search/movie?api_key=f639f65f6181ccd718a300c8ea30d293&query";

function App() {
  const [movies, setMovies] = useState([]);
  // const examp = ["One","Two"]
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  const searchMovie = async (resFilm) => {
    resFilm.preventDefault();
    console.log("Searching");
    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=f639f65f6181ccd718a300c8ea30d293&query=${query}`;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setMovies(data.results);
    } catch (e) {
      console.log(e);
    }
  };

  const changeHandler = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      {/* <!--
  - main container
--> */}
      <div className="container">
        {/* <!--
    - #HEADER SECTION
  --> */}

        <header className="">
          <div className="navbar">
            {/* <!--
        - menu button for small screen
      --> */}
            <button className="navbar-menu-btn">
              <span className="one"></span>
              <span className="two"></span>
              <span className="three"></span>
            </button>

            <a href="/" className="navbar-brand">
              <img className="logo_img" src={Logo} alt="" />
            </a>

            {/* <!--
        - navbar navigation
      --> */}

            <nav className="">
              <ul className="navbar-nav">
                <li>
                  {" "}
                  <a href="/" className="navbar-link">
                    Home
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="#category" className="navbar-link">
                    Category
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="#live" className="navbar-link  indicator">
                    LIVE
                  </a>{" "}
                </li>
              </ul>
            </nav>

            {/* <!--
        - search and sign-in
      --> */}

            <div className="navbar-actions">
              <form action="#" className="navbar-form" onSubmit={searchMovie}>
                <input
                  type="text"
                  name="query"
                  placeholder="I'm looking for..."
                  className="navbar-form-search"
                  value={query}
                  onChange={changeHandler}
                />

                <button className="navbar-form-btn">
                  <ion-icon name="search-outline"></ion-icon>
                </button>

                <button className="navbar-form-close">
                  <ion-icon name="close-circle-outline"></ion-icon>
                </button>
              </form>

              {/* <!--
          - search button for small screen
        --> */}

              <button className="navbar-search-btn">
                <ion-icon name="search-outline"></ion-icon>
              </button>

              <a href="#" className="navbar-signin">
                <span>Sign in</span>
                <ion-icon name="log-in-outline"></ion-icon>
              </a>
            </div>
          </div>
        </header>

        {/* <!--
    - MAIN SECTION
  --> */}
        <main>
          {/* <!--
      - #BANNER SECTION
    --> */}
          <section className="banner">
            <div className="banner-card">
              <img src={Baner} className="banner-img" alt="" />

              <div className="card-content">
                <div className="card-info">
                  <div className="genre">
                    <ion-icon name="film"></ion-icon>
                    <span>Action/Thriller</span>
                  </div>

                  <div className="year">
                    <ion-icon name="calendar"></ion-icon>
                    <span>2019</span>
                  </div>

                  <div className="duration">
                    <ion-icon name="time"></ion-icon>
                    <span>2h 11m</span>
                  </div>

                  <div className="quality">4K</div>
                </div>

                <h2 className="card-title">JUMANJI: The next level</h2>
              </div>
            </div>
          </section>

          {/* <!--
      - #MOVIES SECTION
    --> */}
          <section className="movies">
            {/* <!--
        - filter bar
      --> */}
            <div className="filter-bar">
              <div className="filter-dropdowns">
                <select name="genre" className="genre">
                  <option value="all genres">All genres</option>
                  <option value="action">Action</option>
                  <option value="adventure">Adventure</option>
                  <option value="animal">Animal</option>
                  <option value="animation">Animation</option>
                  <option value="biography">Biography</option>
                </select>

                <select name="year" className="year">
                  <option value="all years">All the years</option>
                  <option value="2022">2022</option>
                  <option value="2020-2021">2020-2021</option>
                  <option value="2010-2019">2010-2019</option>
                  <option value="2000-2009">2000-2009</option>
                  <option value="1980-1999">1980-1999</option>
                </select>
              </div>

              <div className="filter-radios">
                <input type="radio" name="grade" id="featured"/>
                <label htmlFor="featured">Featured</label>

                <input type="radio" name="grade" id="popular" />
                <label htmlFor="popular">Popular</label>

                <input type="radio" name="grade" id="newest" />
                <label htmlFor="newest">Newest</label>

                <div className="checked-radio-bg"></div>
              </div>
            </div>

            {/* <!--
        - movies grid
      --> */}

            <div className="movies-grid">
              {movies.length > 0 ? (
                <>
                  {movies.map((movieReq) => (
                    <MoviesBox key={movieReq.id} {...movieReq} />
                  ))}
                </>
              ) : (
                <h2>Sorry not found</h2>
              )}

              {/* <div className="movie-card">

          <div className="card-head">
            <img src="./assets/images/movies/red-notice.jpg" alt="" className="card-img"/>

            <div className="card-overlay">

              <div className="bookmark">
                <ion-icon name="bookmark-outline"></ion-icon>
              </div>

              <div className="rating">
                <ion-icon name="star-outline"></ion-icon>
                <span>6.4</span>
              </div>

              <div className="play">
                <ion-icon name="play-circle-outline"></ion-icon>
              </div>

            </div>
          </div>

          <div className="card-body">
            <h3 className="card-title">Red Notice</h3>

            <div className="card-info">
              <span className="genre">Action/Comedy</span>
              <span className="year">2021</span>
            </div>
          </div>

        </div> */}
            </div>
            {/* 
      <!--
        - load more button
      --> */}
            <button className="load-more">LOAD MORE</button>
          </section>

          {/* <!--
      - #CATEGORY SECTION
    --> */}
          <section className="category" id="category">
            <h2 className="section-heading">Category</h2>

            <div className="category-grid">
              <div className="category-card">
                <img src={Action} alt="" className="card-img" />
                <div className="name">Action</div>
                <div className="total">100</div>
              </div>

              <div className="category-card">
                <img src={Comedy} alt="" className="card-img" />
                <div className="name">Comedy</div>
                <div className="total">50</div>
              </div>

              <div className="category-card">
                <img src={Thriller} alt="" className="card-img" />
                <div className="name">Thriller</div>
                <div className="total">20</div>
              </div>

              <div className="category-card">
                <img src={Horror} alt="" className="card-img" />
                <div className="name">Horror</div>
                <div className="total">80</div>
              </div>

              <div className="category-card">
                <img src={Adventure} alt="" className="card-img" />
                <div className="name">Adventure</div>
                <div className="total">100</div>
              </div>

              <div className="category-card">
                <img src={Animated} alt="" className="card-img" />
                <div className="name">Animated</div>
                <div className="total">50</div>
              </div>

              <div className="category-card">
                <img src={Crime} alt="" className="card-img" />
                <div className="name">Crime</div>
                <div className="total">20</div>
              </div>

              <div className="category-card">
                <img src={Scifi} alt="" className="card-img" />
                <div className="name">SCI-FI</div>
                <div className="total">80</div>
              </div>
            </div>
          </section>

          {/* <!--
      - #LIVE SECTION
    --> */}
          <section className="live" id="live">
            <h2 className="section-heading">Live Tv Shows</h2>

            <div className="live-grid">
              <div className="live-card">
                <div className="card-head">
                  <img src={Planet} alt="" className="card-img" />
                  <div className="live-badge">LIVE</div>
                  <div className="total-viewers">305K viewers</div>
                  <div className="play">
                    <ion-icon name="play-circle-outline"></ion-icon>
                  </div>
                </div>

                <div className="card-body">
                  <img src={BBC} alt="" className="avatar" />
                  <h3 className="card-title">
                    Planet Earth II <br /> Season 1 - Islands
                  </h3>
                </div>
              </div>

              <div className="live-card">
                <div className="card-head">
                  <img src={Got} alt="" className="card-img" />
                  <div className="live-badge">LIVE</div>
                  <div className="total-viewers">1.7M viewers</div>
                  <div className="play">
                    <ion-icon name="play-circle-outline"></ion-icon>
                  </div>
                </div>

                <div className="card-body">
                  <img src={HBO} alt="" className="avatar" />
                  <h3 className="card-title">
                    Game of Thrones <br /> Season 5 - Mother's Mercy
                  </h3>
                </div>
              </div>

              <div className="live-card">
                <div className="card-head">
                  <img src={Vikins} alt="" className="card-img" />
                  <div className="live-badge">LIVE</div>
                  <div className="total-viewers">468K viewers</div>
                  <div className="play">
                    <ion-icon name="play-circle-outline"></ion-icon>
                  </div>
                </div>

                <div className="card-body">
                  <img src={HBO} alt="" className="avatar" />
                  <h3 className="card-title">
                    Vikings <br /> Season 4 - What Might Have Been
                  </h3>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* <!--
    - FOOTER SECTION
  --> */}
        <footer>
          <div className="footer-content">
            <div className="footer-brand">
              <img src={Logo} alt="" className="footer-logo" />
              <p className="slogan">
                Movies & TV Shows, Online cinema, Movie database HTML Template.
              </p>

              <div className="social-link">
                <a href="#">
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
                <a href="#">
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
                <a href="#">
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
                <a href="#">
                  <ion-icon name="logo-tiktok"></ion-icon>
                </a>
                <a href="#">
                  <ion-icon name="logo-youtube"></ion-icon>
                </a>
              </div>
            </div>

            <div className="footer-links">
              <ul>
                <h4 className="link-heading">CineFlix</h4>

                <li className="link-item">
                  <a href="#">About us</a>
                </li>
                <li className="link-item">
                  <a href="#">My profile</a>
                </li>
                <li className="link-item">
                  <a href="#">Pricing plans</a>
                </li>
                <li className="link-item">
                  <a href="#">Contacts</a>
                </li>
              </ul>

              <ul>
                <h4 className="link-heading">Browse</h4>

                <li className="link-item">
                  <a href="#">Live Tv</a>
                </li>
                <li className="link-item">
                  <a href="#">Live News</a>
                </li>
                <li className="link-item">
                  <a href="#">Live Sports</a>
                </li>
                <li className="link-item">
                  <a href="#">Streaming Library</a>
                </li>
              </ul>

              <ul>
                <li className="link-item">
                  <a href="#">TV Shows</a>
                </li>
                <li className="link-item">
                  <a href="#">Movies</a>
                </li>
                <li className="link-item">
                  <a href="#">Kids</a>
                </li>
                <li className="link-item">
                  <a href="#">Collections</a>
                </li>
              </ul>

              <ul>
                <h4 className="link-heading">Help</h4>

                <li className="link-item">
                  <a href="#">Account & Billing</a>
                </li>
                <li className="link-item">
                  <a href="#">Plans & Pricing</a>
                </li>
                <li className="link-item">
                  <a href="#">Supported devices</a>
                </li>
                <li className="link-item">
                  <a href="#">Accessibility</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-copyright">
            <div className="copyright">
              <p>&copy; copyright 2022</p>
            </div>

            <div className="wrapper">
              <a href="#">Privacy policy</a>
              <a href="#">Terms and conditions</a>
            </div>
          </div>
        </footer>
      </div>

      {/* 
<!--
  - custom js link
--> */}
      <script src="./assets/js/main.js"></script>

      {/* <!--
  - ionicon link
--> */}
      
    </>
  );
}

export default App;
