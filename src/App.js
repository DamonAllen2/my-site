import './App.css';
import picture1 from './images/106193373.jpg'
import Images from './images';

function App() {
  return (
    <div className="App">
      <header>
      <img src={picture1} className='picture1' alt='of me'/>
        <h1>Damon's Site</h1>
        <h2>A learning Frontend</h2>
        <h2>Web Developer</h2>
        <h2>At Bloomtech</h2>
      </header>
      <div className='bio'>
        <div className='pet-container'>
      <img src={Images.foxy} className='foxy' alt='My dog Foxy'/>
      <img src={Images.fred} className='fred' alt='My cat Fred'/>
      </div>
      <div className='bio-text'>
        <p>
          As a little introduction, my name is Damon Allen.<br>
          </br>I am from Ohio. I started coding in 2022.<br>
          </br>I hope to get a starting career in coding, and possibly different things in the future.<br>
          </br>Some things that I enjoy doing is playing guitar, and editing videos using Adobe Premiere Pro.
        </p>
        </div>
      </div>
      <div className='pet-pictures'>
      <img src={Images.scooby} className='pets' alt='My cat Scooby'/>
      <img src={Images.shaggy} className='pets' alt='My cat Shaggy'/>
      <img src={Images.foxandsoph} className='pets' alt='Both of my dogs'/>
      </div>
      <div className='music'>
        <div className='album-art'>

        </div>
        <p>
          
        </p>
      </div>
    </div>
  );
}

export default App;
