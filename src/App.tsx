import './App.css';
import { ContextProvider } from './context';
import Home from './screens/Home';

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Home/>
      </ContextProvider>
    </div>
  );
}

export default App;
