import { Container } from 'react-bootstrap';
import './App.css';
import Header from './components/Header';
import TextWall from './components/TextWall';
import Logos from './components/Logos';
import Form from './components/Form';
import GoogleMaps from './components/GoogleMaps';
import SomethingBig from './components/SomethingBig';
import Footer from './components/Footer';

function App() {
  return (
    <Container className="mainContainer">
      <Header />
      <TextWall />
      <Logos />
      <Form />
      <GoogleMaps />
      <SomethingBig />
      <Footer />
    </Container>
  );
}

export default App;
