// import HeartLogo from './heart.svg';
import Heart from './components/Heart';
import Header from './components/Header';
import './App.css';

const message = "cool cud";





function App() {
  return(
    <>
      <Header/>
      <Heart msg={message} />
    </>
  );
}

export default App;
