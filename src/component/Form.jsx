import React from 'react'
import { useState } from 'react'
//import styled from 'styled-components'
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-image: url("https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"); 
    background-size: cover;
    background-position: right;
    background-repeat: no-repeat;
    height: 100%; /* Set the desired height of the background */
    display: flex;
    flex-direction: column;
    align-items: right;
    justify-content: right;
  
  }
`;

const FormContainer = styled.div`
  display: flex;
  font-size : 10px;
  flex-direction: column;
  align-items: right;
  padding: 20px;
  max-width: 700px;
  margin: 0 auto;
  margin-top: 50px;
 
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  
 
  
  
  input[type="text"] {
   
    font-size: 30px;
    width: 80%;
    padding: 10px;
    border: 2px solid #ccc;
    border-radius: 10px;
    margin: 10px 0;
    
  }


  `;











const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 5px;
  text-align: center;
  
  
`;

const SubmitButton = styled.input`
  padding: 10px 20px;
  background-color: black;
  color: #fff;
  border: none;
  cursor: pointer;
  width : 40%;
  font-size: 35px;
  border-radius: 7%;
  align-item: center;
  
`;



function Form({ movieSearch }) {
  const [form, setForm] = useState({
    searchTerm: '',
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      searchTerm: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    movieSearch(form.searchTerm);
  };

  return (
    <>
      <GlobalStyle />
      <FormContainer>

        <Title>Search for a Movie</Title>
        <form onSubmit={handleSubmit}>

          <input
            type="text"
            value={form.searchTerm}
            onChange={handleChange}
            placeholder="Enter movie title..."
          />
          <SubmitButton type="submit" value="Search" />
        </form>
      </FormContainer>
    </>
  );
}

export default Form;



