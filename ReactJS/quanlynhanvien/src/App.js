
import './App.css';
import ComponentBody from './Components/ComponentBody';
import ComponentBottom from './Components/ComponentBottom';
import ComponentTop from './Components/ComponentTop';

function App() {
  return (
    <div className="App">
      
      <div class="container">
        <ComponentTop/>
        <ComponentBody/>
        <ComponentBottom/>
        <ComponentBottom/>
      </div>
      
    </div>
  );
}

export default App;
