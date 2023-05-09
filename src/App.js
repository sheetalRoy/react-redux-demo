import './App.css';
import { useSelector } from 'react-redux';

function App() {
  const counter = useSelector((state) => state.counter)
  console.log(counter, 'app')
  return (
    <div className="App">
      { counter }
    </div>
  );
}

export default App;
