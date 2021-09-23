import React from "react";
import PropTypes from "prop-types";

function Movie({ year, title, summary, poster, genres }) {
    return (
      <div classnName="movie">
        <img src={poster} alt={title} title={title} />
        <div classnName="movie__data">
          <h3 classnName="movie__title">{title}</h3>
          <h5 classnName="movie__year">{year}</h5> 
          {/* 장르는 여러개일 수 있으니 따로 map으로 담기. key가 꼭 필요한데, 
          이 때 index, number 등의 숨겨진 이름으로 가져올 수 있다. */}
          <ul classnName="genres">
          {genres.map((genre, index) => (
            <li key={index} classnName="genres__genre">
              {genre}
            </li>
          ))}
        </ul>
          
          <p classnName="movie__summary">{summary}</p>
        </div>
      </div>
    );
}
Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
  };

export default Movie;