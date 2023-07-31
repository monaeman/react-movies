import React from "react";
import styled from "styled-components";


const Title = styled.h1`
  font-size: 5em;
`;

const Image = styled.img
`

height : 900px;
width : 800px;

`
const Genre = styled.h3
`
font-size: 15em;
color : red;

`

function MovieDisplay({ movie }) {
  const loaded = () => {
    return (
      <>
        <Title>{movie.Title}</Title>
        <Image src={movie.Poster} alt={movie.Title} />
        <h3>{movie.Genre}</h3>
        <h3>{movie.Year}</h3>
      </>
    );
  };

  const loading = () => {
    return <h1>No movie to display</h1>;
  };

  return movie ? loaded() : loading();
}

export default MovieDisplay;