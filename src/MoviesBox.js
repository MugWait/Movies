import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import YouTube from 'react-youtube';
const API_IMG = "https://image.tmdb.org/t/p/w500/";

const MoviesBox = ({
  id,
  title,
  poster_path,
  vote_average,
  release_date,
  overview,
}) => {
  const API_VIDEO = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=f639f65f6181ccd718a300c8ea30d293&language=en-US`;

  const [video, setVideo] = useState('');

  useEffect(() => {
    fetch(API_VIDEO)
      .then((res) => res.json())
      .then((data) => (data.results.find(vid => vid.name === "Official Trailer")))
      .then((video_p) => { setVideo(video_p.key)    
    })
  }, []);
//   console.log(video);

  

  /// video/play?key=bZH6CtMvE7s

  const [show, setShow] = useState(false);

  const showModal = () => setShow(true);
  const closeModal = () => setShow(false);

  return (
    <>
      <div className="movie-card">
        <div className="card-head" onClick={showModal}>
          <img src={API_IMG + poster_path} alt="" className="card-img" />

          <div className="card-overlay">
            <div className="bookmark">
              <ion-icon name="bookmark-outline"></ion-icon>
            </div>

            <div className="rating">
              <ion-icon name="star-outline"></ion-icon>
              <span>{vote_average}</span>
            </div>

            <div className="play">
              <ion-icon name="play-circle-outline"></ion-icon>
            </div>
          </div>
        </div>

        <div className="card-body">
          <h3 className="card-title">{title}</h3>

          <div className="card-info">
            <span className="genre">Action/Comedy</span>
            <span className="year">2021</span>
          </div>
        </div>
        <Modal show={show} onHide={closeModal}>
          <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="one">
              <img src={API_IMG + poster_path} alt="" className="modal_img" />
            </div>
            <div className="two">
                <h3 className="popup-title">{title}</h3>
              {overview}
              <br />
              <br />
              Release Date: {release_date}
              <br />
              <br />
              
              <YouTube videoId={video} />
              
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default MoviesBox;
