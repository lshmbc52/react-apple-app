import Banner from './components/MovieModal/Banner';
import './App.css';
import {styled} from 'styled-components';
import Nav from './components/MovieModal/Nav';

function App() {
  

  return (
  <Container>
   <Nav />
   <Banner />   
  </Container>
  );
}

export default App


const Container = styled.main`
position:relative;
display:block;
top:70px;
padding:0 calc(3.5vw +5px);
`

