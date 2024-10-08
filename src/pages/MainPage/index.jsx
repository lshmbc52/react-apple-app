import { Outlet, Route,Routes } from 'react-router-dom'
import React from 'react'
import Nav from '../../components/MovieModal/Nav';
import LoginPage from '../../pages/LoginPage';

import DetailPage from '../../pages/DetailPage';
import SearchPage from '../../pages/SearchPage';
import {styled} from 'styled-components';
import Banner from '../../components/MovieModal/Banner';
import Row from '../../components/MovieModal/Row';
import requests from '../../api/requests';





const MainPage = () => {
  return (
    <Container>
   
   <Banner />   
   <Row title="Trending Now" id="TN" fetchUrl={requests.fetchTrending}/>
   <Row title="Top Rated" id="TR" fetchUrl={requests.fetchTopRated}/>
   <Row title="Action Movies" id="AM" fetchUrl={requests.fetchActionMovies}/>
   <Row title="Comedy Movies" id="CM" fetchUrl={requests.fetchComedyMovies}/>
  
  </Container>
  );
};

const Container = styled.main`
position:relative;
display:block;
top:70px;
padding:0 calc(3.5vw +5px);
`;

export default MainPage;