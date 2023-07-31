
import Form from './component/Form'
import MovieDisplay from './component/MovieDisplay'
import{useState,useEffect} from 'react'
import styled from "styled-components"

const Container = styled.div`
  width: 100%;
  margin: auto;
  text-align: center;
  // background-color: #242424
`;


function App() {
  
  const apiKey='98e3fb1f'
const[movie, setMovie]= useState(null)

const getMovie =async (searchTerm) => {
try{
  const response =await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`)
  const data = await response.json();
  //console.log(data)
  setMovie(data)
 } catch (error){
  console.log(error)
 }

}
useEffect(()=> {
  getMovie('oppenheimer')

}, [])
  return (
    
    
      <Container>
        {/* Passing the function to Form as a prop and calling it movieSearch */}
        <Form movieSearch={getMovie} />
        <MovieDisplay movie={movie} />
      </Container>
    
     
   
  )
}

export default App
