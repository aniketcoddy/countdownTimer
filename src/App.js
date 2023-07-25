import './App.css';
import Body from './components/Body';
import Countdown from './components/Countdown';
import Directive from './components/Directive';
import Header from './components/Header';
import Right from './components/Right';
import Title from './components/Title';

function App() {
  return (
    <div>
      <Header />
      <Directive />
      <Title />
      <Countdown seconds={10} />
        <Body />
        {/* <Right /> */}
    </div>
  );
}

export default App;
