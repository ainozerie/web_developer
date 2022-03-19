import './App.css';
import Contact from './Contact';
import Navigation from './Navigation';
import Window from './Window';

function App() {

  return (
    <main>
      <div className='header'></div>
      <Navigation /> // navigation between pages
      <Window /> // main sector
      <Contact />
    </main>
  );
}

export default App;
