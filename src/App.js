import HeartLogo from './heart.svg';
import './App.css';

const message = "cool cud";

const Heart = (props) => {
  return (
      <div className='heart'>
          <img className='heart-img' src={HeartLogo} alt='heart' />
          <p className='heart-message'>{props.msg}</p>
      </div>
  );
}

const Header = () => {
  return(
    <div className="App-header">I ❤️ React</div>
  )
}

function App() {
  return(
    <>
      <Header/>
      <Heart msg={message} />
    </>
  );
}

export default App;
