
import Form from './component/Form'
import MovieDisplay from './component/MovieDisplay'
import{useState,useEffect} from 'react'

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
    <>
     <Form movieSearch={getMovie}/>
     <MovieDisplay movie={movie}/>
    </>
  )
}

export default App
