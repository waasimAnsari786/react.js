import './App.css';
import Greetings from './components/Greetings.js'

function App() {
  document.querySelector("body").classList.add("body-styling");
  return (
    <>
      <Greetings />
    </>
  );
}

export default App;
