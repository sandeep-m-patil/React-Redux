import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header'
import Container from './components/Container';
import Controlls from './components/Controlls';
import Counter from './components/Counter';
import { useSelector } from 'react-redux';
import PrivacyMessage from './components/PrivacyMessage';

function App() {
const privacy = useSelector(store=>store.privacy)
  return (
    <>
      <Container>

        <div class="px-4 py-5 my-5 text-center">
          <h1 class="display-5 fw-bold text-body-emphasis"><Header /></h1>
          <div class="col-lg-6 mx-auto">
            <p class="lead mb-4">{privacy ? <PrivacyMessage/> : <Counter/>} </p>
            <Controlls />
          </div>
        </div>
      </Container>
    </>
  )
}

export default App
