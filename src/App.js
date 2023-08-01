import './App.css';
import picture1 from './images/106193373.jpg'

function App() {
  return (
    <div className="App">
      <header>
      <img src={picture1} className='picture1'/>
        <h1>Damon's Site</h1>
        <h2>A learning Frontend Web Dev</h2>
      </header>
      <div className='bio'>
        <p></p>
      </div>
    </div>
  );
}

export default App;
