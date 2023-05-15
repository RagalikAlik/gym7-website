import logo from './pictures/logo.svg';
import './style/App.css';
import {HeaderTemplate} from './pages/headerTemplate';


function App() {
  return (
    <><HeaderTemplate />
    <div class="App">

    </div>
    <div class="video-fragment">
        <iframe 
        width="900" 
        height="500" 
        src="https://www.youtube.com/embed/TQkpWSpVaKQ?autoplay=1&mute=1" 
        title="YouTube video player" 
        frameborder="0" 
        allowfullscreen></iframe>
    </div>
    </>
  );
}

export default App;
