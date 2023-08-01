import React from "react";
import styled from "styled-components";
//import styled, { createGlobalStyle } from 'styled-components';

const Title = styled.h1`
  font-size: 100px;
  position: sticky;
  top:0;
`;

const Image = styled.img
`

height : 1100px;
width : 1000px;
position: sticky;
top: 0;

`
const MovieContainer = styled.div`


h3{

    font-size: 60px;
    position: sticky;
    top:0;
    color: white;
    text-align: center;
}

`


function MovieDisplay({ movie }) {
  const loaded = () => {
    return (
      <>
      <MovieContainer>
      <Title>{movie.Title}</Title>
        <Image src={movie.Poster} alt={movie.Title} />
        <h3>Genre :{movie.Genre}</h3>
        <h3>Year :{movie.Year}</h3>
        
        <h3>Actors :{movie.Actors}</h3>

        
       </MovieContainer>
        
      </>
    );
  };

  const loading = () => {
    return <h1>No movie to display</h1>;
  };

  return movie ? loaded() : loading();
}

export default MovieDisplay;