import './App.css';
import Countdown from './components/Countdown';
import Directive from './components/Directive';
import Header from './components/Header';
import Title from './components/Title';

function App() {
  return (
   <div>
    <Header/>
    <Directive/>
    <Title/>
  <Countdown seconds={10}/>
   </div>
  );
}

export default App;
