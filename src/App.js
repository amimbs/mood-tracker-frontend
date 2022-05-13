
import './App.css';

function App() {

  let callBackend = (e) => {
    fetch('http://localhost:3001/').then(res => res.json()).then(data => {
      console.log(data)
    })
  }

  return (
    <div className="App">
      <button onClick={callBackend}>
        call backend
      </button>
    </div>
  );
}

export default App;
